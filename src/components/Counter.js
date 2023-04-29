import {useSelector,useDispatch} from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const toggleCounterHandler = () => {};
  const incrementHandler = (e) =>{
    e.preventDefault();
    dispatch({type: 'increment'})
  }
  const decrementHandler = (e) =>{
    e.preventDefault();
    dispatch({type: 'decrement'})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div><button onClick={incrementHandler}>incrementBy5</button></div>
      <div><button onClick={decrementHandler}>decrementBy5</button></div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;