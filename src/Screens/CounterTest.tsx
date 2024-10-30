import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/Counter";
import styles from '../Screens/Home.module.css'

interface HomeProps {
  name: string;
  age?: number;
}

const Home: React.FC<HomeProps> = (props) => {
  const dispatch = useDispatch();
  const counter = useSelector((state: { counter: number }) => state.counter);
  
  const plusHandeler = () => {
    dispatch(counterActions.incresment());
  };
  const plusHandelerWithNumber = () => {
    dispatch(counterActions.plusHandelerWithNumber(5));
  };

  
  return (
    <>
      <div>{counter}</div>
      <button onClick={plusHandeler}>+</button>
      <button onClick={plusHandelerWithNumber}>+10</button>
      <button>-</button>
    </>
  );
};

export default Home;
