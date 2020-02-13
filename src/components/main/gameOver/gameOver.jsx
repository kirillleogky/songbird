import React from 'react'

const GameOver = () => {
  return (
    <div className="game_over-block hide">
      <h1 className="game_over-block-title">Поздравляем!</h1>
      <p className="game_over-block-total">
        {`Вы прошли викторину и набрали `}
        <span id="total">00</span>
        {` из 30 возможных баллов`}
      </p>
      <button type="button" className="game_over-block-btn btn btn-try_again">
        Попробовать еще раз!
      </button>
    </div>
  )
}

export default GameOver
