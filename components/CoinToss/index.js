// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickedToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      total: prevState.total + 1,
    }))
    if (tossResult === 1) {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
    } else {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
    }
  }

  render() {
    const {imageUrl, total, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="toss-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="toss-image" />
          <button
            type="button"
            className="toss-btn"
            onClick={this.onClickedToss}
          >
            Toss Coin
          </button>
          <ul className="count-container">
            <p className="list-count">Total: {total}</p>
            <p className="list-count">Heads: {heads}</p>
            <p className="list-count">Tails: {tails}</p>
          </ul>
        </div>
      </div>
    )
  }
}
export default CoinToss
