import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/Counter";
import Header from "../Components/Header";

interface HomeProps {
  name?: string;
  age?: number;
}

const Home: React.FC<HomeProps> = (name, age) => {
  const dispatch = useDispatch();

  const counter = useSelector(
    (state: { counter: { counter: number } }) => state.counter.counter
  );

  const plusHandeler = () => {
    dispatch(counterActions.incresment());
  };
  const plusHandelerWithNumber = () => {
    dispatch(counterActions.plusHandelerWithNumber(5));
  };

  const minusHandeler = () => {
    dispatch(counterActions.decrecment());
  };

  return (
    <>
      <Header />
      <div>{counter}</div>
      <button onClick={plusHandeler}>+</button>
      <button onClick={plusHandelerWithNumber}>+10</button>
      <button onClick={minusHandeler}>-</button>
    </>
  );
};

export default Home;
