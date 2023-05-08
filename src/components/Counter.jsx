import React from "react"
import { connect } from "react-redux"
import { decreaseCounter, increaseCounter } from "../redux/Counter/counter.actions"


const Counter = (props) => {
  return (
    <div className="App" style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column', paddingTop:'80px', gap:'10px'}}>
      <div>Count: {props.count}</div>

      <button onClick={() => props.increaseCounter()}>Increase Count</button>

      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)