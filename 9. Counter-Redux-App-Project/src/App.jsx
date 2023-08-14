import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/slices/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <br />
      <br />

      <div>{count}</div>

      <br />
      <br />

      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
