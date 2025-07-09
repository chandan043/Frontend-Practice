import React from 'react';
import { useToggle } from './useToggle';
import './ToggleComponent.css';

function ToggleComponent() {
  const [isVisible, toggleVisible] = useToggle(true);
  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
    <div className="toggle-container">
      <h2>Custom `useToggle` Hook Demo</h2>

      <div>
        <button onClick={toggleVisible} className="toggle-button">
          {isVisible ? "Hide Text" : "Show Text"}
        </button>
        {isVisible && <p>This text appears and disappears!</p>}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={toggleSidebar} className="toggle-button">
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        {isSidebarOpen && (
          <div className="sidebar">
            <p>Welcome to the sidebar</p>
            <button className="sidebar-close" onClick={toggleSidebar}>×</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToggleComponent;
