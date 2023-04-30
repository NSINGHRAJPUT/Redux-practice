import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/authentication';


const Header = () => {
const dispatch = useDispatch();
const isAuth = useSelector(state => state.auth.isAuthenticated)

const logoutHandler = (e) =>{
  e.preventDefault();
  dispatch(authActions.logout())
}  
return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            {isAuth &&<a href='/'>My Products</a>}
          </li>
          <li>
            {isAuth &&<a href='/'>My Sales</a>}
          </li>
          <li>
            {isAuth &&<button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
