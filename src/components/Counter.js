import {useSelector,useDispatch} from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const show = useSelector(state=>state.showCounter)

  const toggleCounterHandler = () => {
    dispatch({type : 'toggle'})
  };
  const incrementHandler = (e) =>{
    e.preventDefault();
    dispatch({type: 'increment',value: 2})
  }
  const decrementHandler = (e) =>{
    e.preventDefault();
    dispatch({type: 'decrement', value : 2})
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
