import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header_block">
        <div className="header_block-logo"></div>
        <div className="header_block-score">
          Score:
          <span className="header_block-score_curr" id="score">0</span>
        </div>
      </header>
    );
  }
}

export default Header;
