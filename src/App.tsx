import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Base64Encode from './Tabs/Base64Encode';
import PrettifyJson from './Tabs/PrettifyJson';
import UrlEncode from './Tabs/UrlEncode';
import Base64Decode from './Tabs/Base64Decode';
import UrlDecode from './Tabs/UrlDecode';
import Base64UrlEncode from './Tabs/Base64UrlEncode';
import Base64UrlDecode from './Tabs/Base64UrlDecode';
import HtmlFormatter from './Tabs/HtmlFormatter';
import EpochtoDate from './Tabs/EpochtoDate';
import DatetoEpoch from './Tabs/DatetoEpoch';
import XmlFormatter from './Tabs/XmlFormatter';
import StringUnescape from './Tabs/StringUnescape';
import StringEscape from './Tabs/StringEscape';
import JWTDecoder from './Tabs/JwtDecode';
// Import other tabs as needed

function App() {
  const [activeTab, setActiveTab] = useState<string>('Base64 Encode');
  const [tabResults, setTabResults] = useState<Record<string, { input: string; output: string }[]>>({});
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const groups: Record<string, string[]> = {
    'Base64 Tools': ['Base64 Encode', 'Base64 Decode', 'Base64 URL Encode', 'Base64 URL Decode'],
    'URL Tools': ['URL Encode', 'URL Decode'],
    'JSON Tools': ['Prettify JSON'],
    'Formatter Tools': ['HTML Formatter','XML Formatter'],
    'Epoch Tools': ['Epoch to Date','Date to Epoch'],
    'String Tools': ['String Escape','String Unescape'],
    'JWT Tools': ['JWT Decode']
  };
    
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const updateResults = (tab: string, input: string, output: string) => {
    setTabResults(prevResults => {
      const updatedResults = [{ input, output }, ...(prevResults[tab] || [])].slice(0, 5);
      return { ...prevResults, [tab]: updatedResults };
    });
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Base64 Encode':
        return <Base64Encode updateResults={updateResults} />;
      case 'Base64 Decode':
        return <Base64Decode updateResults={updateResults} />;
      case 'URL Encode':
        return <UrlEncode updateResults={updateResults} />;
      case 'URL Decode':
        return <UrlDecode updateResults={updateResults} />;
      case 'Base64 URL Encode':
        return <Base64UrlEncode updateResults={updateResults} />;
      case 'Base64 URL Decode':
        return <Base64UrlDecode updateResults={updateResults} />;
      case 'Prettify JSON':
        return <PrettifyJson updateResults={updateResults} />;
      case 'HTML Formatter':
        return <HtmlFormatter updateResults={updateResults} />;
      case 'Epoch to Date':
        return <EpochtoDate updateResults={updateResults} />;
      case 'Date to Epoch':
        return <DatetoEpoch updateResults={updateResults} />;
      case 'XML Formatter':
        return <XmlFormatter updateResults={updateResults} />;
      case 'String Unescape':
        return <StringUnescape updateResults={updateResults} />;
      case 'String Escape':
        return <StringEscape updateResults={updateResults} />;
      case 'JWT Decode':
        return <JWTDecoder updateResults={updateResults} />;
      default:
        return <div>Select a tab</div>;
    }
  };

  const toggleGroupCollapse = (group: string) => {
    setCollapsedGroups((prevState) => ({
      ...prevState,
      [group]: !prevState[group],
    }));
  };

  /// Returns an object containing only the groups with tabs that match the search term.
  const filteredGroups = Object.keys(groups).reduce((acc, group) => {
    const filteredTabs = groups[group].filter((tab) => tab.toLowerCase().includes(searchTerm.toLowerCase()));
    if (filteredTabs.length > 0) {
      acc[group] = filteredTabs;
    }
    return acc;
  }, {} as Record<string, string[]>);

  /// For each group, define the group header with toggle function onclick. If group not collapsed, render filtered tabs of the group
  const renderGroup = (group: string) => (
    <div key={group} className="App-group">
      <div className="App-group-header" onClick={() => toggleGroupCollapse(group)}>
        <span>{group}</span>
        <FontAwesomeIcon icon={collapsedGroups[group] ? faChevronDown : faChevronUp}/>
      </div>
      {!collapsedGroups[group] && (
        <div className="App-group-tabs">
          {filteredGroups[group].map((tab) => (
            <button key={tab} className={`App-tab ${activeTab === tab ? "active" : ""}`} onClick={() => handleTabClick(tab)}>
              {tab}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Microsoft Converter</h1>
        <div className="App-container">
          <div className="App-left-pane">
            <div className="App-search-input-container">
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="App-search-input"
              />
              <FontAwesomeIcon icon={faSearch} className="App-search-icon" />
            </div>
            {Object.keys(filteredGroups).map(renderGroup)}
          </div>
          <div className="App-right-pane">
            {renderActiveTab()} {/* Render the content based on the active tab */}
          </div>
        </div>
        {/* Last 5 results should be displayed outside the App-container */}
        {tabResults[activeTab] && (
        <div className="App-results-outer">
          <h2>Last 5 Results for {activeTab}</h2>
          <div className="App-results">
            {tabResults[activeTab].map((result, index) => (
              <div key={index} className="App-result-item">
                <div className="App-result-input">
                  <strong>Input:</strong> {result.input}
                </div>
                <div className="App-result-output">
                  <strong>Output:</strong> {result.output}
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </header>
    </div>
  );
}

export default App;
