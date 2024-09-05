import { useSelector, useDispatch } from "react-redux"
// Import the increment and decrement actions
import { increment, decrement } from "./counterState"
import "./App.css"

// Use state from the store
function App() {
  // Get the counter state value from the store
  const count = useSelector(state => state.counter.value)
  // Get the dispatch function
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>Count: {count} </div>
      {/* Dispatch the increment action from counterstate.js */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      {/* Dispatch the decrement action from counterstate.js */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
