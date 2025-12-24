import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-family: 'Bree Serif';
`

export const ScoreBoard = styled.div`
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 50px;
`

export const ScoreCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 120px;
  text-align: center;
  color: #223a5f;
  padding: 10px;
  font-family: 'Roboto';
`

export const GameButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const GameImage = styled.img`
  width: 150px;
  height: 150px;
`

export const PopupView = styled.div`
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
