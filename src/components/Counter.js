import {useSelector,useDispatch} from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state=>state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };
  const incrementHandler = (e) =>{
    e.preventDefault();
    dispatch(counterActions.increment())
  }
  const decrementHandler = (e) =>{
    e.preventDefault();
    dispatch(counterActions.decrement())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div><button onClick={incrementHandler}>increment</button></div>
      <div><button onClick={decrementHandler}>decrement</button></div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
