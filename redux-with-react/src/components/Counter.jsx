import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";

const Counter = () => {

    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();

    return (
        <>
            <p>Counter - {counter}</p>
            <button onClick={() => dispatch(increment())}> Increment </button>
            <button onClick={() => dispatch(decrement())}> Decrement </button>
        </>
    );
}

export default Counter;