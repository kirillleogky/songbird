import React from 'react'
import GameOver from './gameOver/gameOver'
import Player from './audioPlayer/audioPlayer'
import birdsData from '../birdsData'

class Main extends React.Component {
  renderAnswer = answer => {
    return (
      <li className="answers_block-answer answer" key={answer}>
        <span className="answer_point" />
        {answer}
      </li>
    )
  }

  shuffle = currArray => currArray.sort(() => 0.5 - Math.random())

  generateBird = data => {
    const randomNumb = Math.floor(0 + Math.random() * (5 + 1 - 0))
    const currBird = data[0][randomNumb]
    return currBird
  }

  render() {
    const currBird = this.generateBird(birdsData)
    const shuffleBirds = this.shuffle(birdsData[0])
    const birdsList = shuffleBirds.map(bird => this.renderAnswer(bird.name))

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
            <div className="info_block-player">
              <Player audio={currBird.audio} />
            </div>
          </div>
        </div>
        <div className="answers_block">
          <ul className="answers_block-options">{birdsList}</ul>
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
                <div className="bird_data-player">
                  <Player />
                </div>
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
