import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@redux/counterSlice";
import { RootState } from "@redux/store";

interface Props {}

const Home = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Home;
