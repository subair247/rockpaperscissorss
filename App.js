import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainContainer,
  ScoreBoard,
  ScoreCard,
  GameButton,
  GameImage,
  PopupView,
} from './StyledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => {
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [userChoice, setUserChoice] = useState({})
  const [opponentChoice, setOpponentChoice] = useState({})
  const [gameResult, setGameResult] = useState('')

  const getResult = (user, opponent) => {
    if (user.id === opponent.id) return 'IT IS DRAW'
    if (
      (user.id === 'PAPER' && opponent.id === 'ROCK') ||
      (user.id === 'SCISSORS' && opponent.id === 'PAPER') ||
      (user.id === 'ROCK' && opponent.id === 'SCISSORS')
    ) {
      setScore(prev => prev + 1)
      return 'YOU WON'
    }
    setScore(prev => prev - 1)
    return 'YOU LOSE'
  }

  const onPlayerClick = id => {
    const opponent = choicesList[Math.floor(Math.random() * choicesList.length)]
    const user = choicesList.find(each => each.id === id)
    const result = getResult(user, opponent)

    setUserChoice(user)
    setOpponentChoice(opponent)
    setGameResult(result)
    setIsPlaying(false)
  }

  return (
    <MainContainer>
      <ScoreBoard>
        <div>
          <h1>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </h1>
        </div>
        <ScoreCard>
          <p>Score</p>
          <p style={{fontSize: '30px', fontWeight: 'bold'}}>{score}</p>
        </ScoreCard>
      </ScoreBoard>

      {isPlaying ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '400px',
          }}
        >
          <GameButton
            data-testid="rockButton"
            onClick={() => onPlayerClick('ROCK')}
          >
            <GameImage src={choicesList[0].imageUrl} alt="ROCK" />
          </GameButton>
          <GameButton
            data-testid="scissorsButton"
            onClick={() => onPlayerClick('SCISSORS')}
          >
            <GameImage src={choicesList[1].imageUrl} alt="SCISSORS" />
          </GameButton>
          <GameButton
            data-testid="paperButton"
            onClick={() => onPlayerClick('PAPER')}
          >
            <GameImage src={choicesList[2].imageUrl} alt="PAPER" />
          </GameButton>
        </div>
      ) : (
        <div style={{textAlign: 'center'}}>
          <div style={{display: 'flex', gap: '50px'}}>
            <div>
              <p>YOU</p>
              <img
                src={userChoice.imageUrl}
                alt="your choice"
                style={{width: '150px'}}
              />
            </div>
            <div>
              <p>OPPONENT</p>
              <img
                src={opponentChoice.imageUrl}
                alt="opponent choice"
                style={{width: '150px'}}
              />
            </div>
          </div>
          <p>{gameResult}</p>
          <button onClick={() => setIsPlaying(true)}>PLAY AGAIN</button>
        </div>
      )}

      <div style={{marginTop: 'auto', alignSelf: 'flex-end'}}>
        <Popup modal trigger={<button className="rules-btn">RULES</button>}>
          {close => (
            <PopupView>
              <button
                onClick={() => close()}
                style={{
                  alignSelf: 'flex-end',
                  border: 'none',
                  background: 'none',
                }}
              >
                <RiCloseLine size={25} />
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                style={{width: '100%'}}
              />
            </PopupView>
          )}
        </Popup>
      </div>
    </MainContainer>
  )
}

export default App
