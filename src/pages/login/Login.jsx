import { useContext, useState } from 'react';
import './login.css';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

const Login = () => {
  const {dispatch, loading, error} = useContext(AuthContext);
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState({username:'', password:''});

  const navigate = useNavigate();

  const handleTextChange = (e)=>{
    setData(pre=>({
      ...pre, [e.target.name]:e.target.value
    }))
  }


  const handleLogin = (e)=>{
    e.preventDefault();
    dispatch({type:'LOGIN_START'})
    if (data.username.trim() === "" || data.password.trim() === "") {
      dispatch({type:'LOGIN_FAILED', payload:'Please complete the form'})
    } else if (
      data.username.trim() !== "AcuAdmin" ||
      data.password.trim() !== "power2024"
      ) {
      dispatch({type:'LOGIN_FAILED', payload:'Incorrect credentials'});
    } else {
      try {
        dispatch({type:'LOGIN_SUCCESS', payload:data});
        navigate("/");
      } catch (error) {
        dispatch({type:'LOGIN_FAILED', payload:'Error occured. Retry'});
        console.log(error);
      }
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <span className="subtitle">Login</span>
        <form className="input-container">
          <input
            onChange={handleTextChange}
            placeholder="username"
            type="text"
            name="username"
          />
          <input
            onChange={handleTextChange}
            placeholder="password"
            type="password"
            name="password"
          />
          {error && (
            <Alert severity='error'>
              {error}
            </Alert>
          )}
          <button
            onClick={handleLogin}
            disabled={loading}
            className={loading ? "login-dis" : "login-butt"}
          >
            {loading ? "Loading" : "Proceed"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login