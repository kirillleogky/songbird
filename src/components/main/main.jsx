import React from 'react'
import GameOver from './gameOver/gameOver'
import Player from './audioPlayer/audioPlayer'
import birdsData from '../birdsData'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: './static/img/unknown.jpg',
      name: '',
      latinName: '',
      audio: '',
      description: '',
    }
    this.currBird = this.generateBird(birdsData)
    this.shuffleBirds = this.shuffle(birdsData[0])
    this.birdsList = this.shuffleBirds.map(bird =>
      this.renderAnswer(bird.name, this.currBird.name)
    )
  }

  handleClick = (event, answer, birdName) => {
    const birds = birdsData[0]
    let i = 0
    while (birds[i].name !== answer) {
      i += 1
    }
    const currBird = birds[i]
    const birdImage = currBird.image
    const birdNaming = currBird.name
    const birdLatinName = currBird.species
    const birdAudio = currBird.audio
    const birdDesc = currBird.description

    this.setState({
      image: `${birdImage}`,
      name: `${birdNaming}`,
      latinName: `${birdLatinName}`,
      audio: `${birdAudio}`,
      description: `${birdDesc}`,
    })
    if (answer === birdName) {
      event.target.firstElementChild.classList.add('right')
    } else {
      event.target.firstElementChild.classList.add('wrong')
    }
  }

  renderAnswer = (name, answer) => {
    return (
      <li className="answers_block-answer answer" id={name} key={name}>
        <button
          className="answers_block-btn"
          type="button"
          onClick={event => this.handleClick(event, name, answer)}
        >
          <span className="answer_point" />
          {name}
        </button>
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
    const currState = this.state
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
              <Player audio={this.currBird.audio} />
            </div>
          </div>
        </div>
        <div className="answers_block">
          <ul className="answers_block-options">{this.birdsList}</ul>
          <div className="answers_block-bird_data bird_data">
            <div
              className={`bird_data-instruction ${
                currState.name ? 'hide' : 'show'
              }`}
            >
              <p>Послушайте плеер.</p>
              <p>Выберите птицу из списка</p>
            </div>
            <div
              className={`bird_data-info ${currState.name ? 'show' : 'hide'}`}
            >
              <img
                className="bird_data-image image"
                src={currState.image}
                alt="Птичка"
              />
              <div className="bird_data-name_voice">
                <h2 className="bird_data-name">{currState.name}</h2>
                <h3 className="bird_data-latin_name">{currState.latinName}</h3>
                <div className="bird_data-player">
                  <Player audio={currState.audio} />
                </div>
              </div>
            </div>
            <span
              className={`bird_data-description ${
                currState.name ? 'show' : 'hide'
              }`}
            >
              {currState.description}
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
