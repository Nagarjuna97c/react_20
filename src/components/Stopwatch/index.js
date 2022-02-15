import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeElapsedInSeconds: 0}

  startTimer = () => {
    this.timerId = setInterval(this.addTime, 1000)
  }

  addTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({timeElapsedInSeconds: 0})
  }

  formatTime = () => {
    const {timeElapsedInSeconds} = this.state

    const timeInMinutes = Math.floor(timeElapsedInSeconds / 60)
    const timeInSeconds = Math.floor(timeElapsedInSeconds % 60)

    let newTimeInMinutes = timeInMinutes
    let newTimeInSeconds = timeInSeconds

    if (newTimeInMinutes < 10) {
      newTimeInMinutes = `0${timeInMinutes}`
    }
    if (newTimeInSeconds < 10) {
      newTimeInSeconds = `0${timeInSeconds}`
    }
    return (
      <h1 className="heading1">
        {newTimeInMinutes}:{newTimeInSeconds}
      </h1>
    )
  }

  render() {
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="para">Timer</p>
            </div>
            {this.formatTime()}
            <div className="buttons-container">
              <button
                className="button button-start"
                type="button"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                className="button button-stop"
                type="button"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                className="button button-reset"
                type="button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
