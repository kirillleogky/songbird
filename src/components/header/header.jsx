import React from 'react'

class Header extends React.Component {
  renderQuestionTheme = (questionName, isActive) => {
    return (
      <li className="header_block-question">
        <a href="/#" className={`question_link ${isActive ? 'active' : ''}`}>
          {questionName}
        </a>
      </li>
    )
  }

  render() {
    return (
      <header className="header_block">
        <div className="header_block-data">
          <div className="header_block-logo" />
          <div className="header_block-score">
            Score:
            <span className="header_block-score_curr" id="score">
              0
            </span>
          </div>
        </div>
        <ul className="header_block-questions questions_block">
          {this.renderQuestionTheme('Разминка', true)}
          {this.renderQuestionTheme('Воробьиные', false)}
          {this.renderQuestionTheme('Лесные птицы', false)}
          {this.renderQuestionTheme('Певчие птицы', false)}
          {this.renderQuestionTheme('Хищные птицы', false)}
          {this.renderQuestionTheme('Морские птицы', false)}
        </ul>
      </header>
    )
  }
}

export default Header
