import React from "react"
import { connect, useSelector } from "react-redux"
// import { decreaseCounter, increaseCounter } from "../redux/Counter/counter.actions"
import { incrementCount, decrementCount } from "../reduxToolkit/slices/CounterSlice"
import { useDispatch } from 'react-redux';


const Counter = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) =>{
    return state.count;
  })

  console.log("data__",data)

  return (
    <div className="App" style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column', paddingTop:'80px', gap:'10px'}}>
      <div>Count: {data}</div>

      <button onClick={() => dispatch(incrementCount())}>Increase Count</button>

      <button onClick={() => dispatch(decrementCount())}>Decrease Count</button>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counter;