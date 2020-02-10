import React from 'react'
import GameOver from './gameOver/gameOver'

class Main extends React.Component {
  renderAnswer = answer => {
    return (
      <li className="answers_block-answer answer">
        <span className="answer_point" />
        {answer}
      </li>
    )
  }

  render() {
    return (
      <main className="main_block">
        <GameOver />
        <div className="info_block">
          <img
            className="info_block-image image"
            src="./static/img/unknown.jpg"
            alt="bird"
          />
          <div className="info_block-title_player">
            <div className="info_block-title">
              <h3 id="bird_name">******</h3>
            </div>
            <div className="info_block-player" />
          </div>
        </div>
        <div className="answers_block">
          <ul className="answers_block-options">
            {this.renderAnswer('птичка')}
            {this.renderAnswer('птичка')}
            {this.renderAnswer('птичка')}
            {this.renderAnswer('птичка')}
            {this.renderAnswer('птичка')}
            {this.renderAnswer('птичка')}
          </ul>
          <div className="answers_block-bird_data bird_data">
            <div className="bird_data-instruction hide">
              <p>Послушайте плеер.</p>
              <p>Выберите птицу из списка</p>
            </div>
            <div className="bird_data-info">
              <img
                className="bird_data-image image"
                src="./static/img/unknown.jpg"
                alt="Птичка"
              />
              <div className="bird_data-name_voice">
                <h2 className="bird_data-name">Имя птички</h2>
                <h3 className="bird_data-latin_name">Имя птички (латиница)</h3>
                <div className="bird_data-player">ПЛЕЕР</div>
              </div>
            </div>
            <span className="bird_data-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              augue leo, vestibulum at urna vehicula, finibus venenatis ligula.
              Phasellus ut risus aliquam, cursus ligula eget, tincidunt magna.
              Mauris porta pretium augue vitae tempor. Integer nunc ipsum,
              egestas vitae convallis quis, laoreet vel tellus.
            </span>
          </div>
        </div>
        <button type="button" className="next_level_btn btn">
          Next Level
        </button>
      </main>
    )
  }
}

export default Main
