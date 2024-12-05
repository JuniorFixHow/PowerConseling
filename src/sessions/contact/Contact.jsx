import './contact.css';
import IMG from '../../assets/imgs/Industries-Served.png';
import { FaPhone } from "react-icons/fa6";
import { useRef, useState } from 'react';
import axios from 'axios';
import { API } from '../../constant/Data';
import { Alert } from '@mui/material';

const Contact = () => {
  const formRef = useRef()
  const [data, setData] = useState({
    fullname: "",
    email: "",
    subject: "",
    body: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({alert:'', error:false})

  const handleTextInput = (e)=>{
    setData(pre=>({
      ...pre, [e.target.name]:e.target.value
    }))
  }

  const sendMessage = async(e)=>{
    e.preventDefault();
    if(data.email!=='' && data.fullname!=='' && data.subject!=='' && data.body!==''){
      setIsLoading(true);
      try {
        const res = await axios.post(`${API}message/create`, data);
        if(res.status===200){ 
          setMessage({alert:"Message sent. We'll reply shortly.", error:false});
          formRef.current.reset();
        }else{
          setMessage({alert:'Error occured. Retry', error:true});
        }
      } catch (error) {
        setMessage({alert:'Error occured. Retry', error:true});
      }finally{
        setIsLoading(false)
      }
    }else{
      setMessage({alert:'Please complete the form', error:true})
    }
  }

  const openBooking = ()=>{
    window.open('https://calendly.com/powerconsulting24/30min', '_blank')
  }
  return (
    <div id="contact" className="contact">
      <span className="subtitle center">We look Forward To Working With you</span>
      <div className="cont-container">
        <img src={IMG} alt="" />
        <div className="cont-right">
          <span className="second-title">Contact us</span>
          <form ref={formRef}>
            <div className="cont-input">
              <span className="sub-text">Enter full name</span>
              <input
                onChange={handleTextInput}
                name="fullname"
                required
                className="inp"
                type="text"
                placeholder="full name"
              />
            </div>
            <div className="cont-input">
              <span className="sub-text">Enter email</span>
              <input
                onChange={handleTextInput}
                required
                name="email"
                className="inp"
                type="email"
                placeholder="email address"
              />
            </div>
            <div className="cont-input">
              <span className="sub-text">Enter subject</span>
              <input
                onChange={handleTextInput}
                name="subject"
                required
                className="inp"
                type="text"
                placeholder="subject"
              />
            </div>
            <div className="cont-input">
              <span className="sub-text">Enter message</span>
              <textarea
                onChange={handleTextInput}
                name="body"
                rows={5}
                required
                className="inp"
                placeholder="subject"
              />
            </div>
            {message.alert && (
              <Alert severity={message.error ? "error" : "success"}>
                {message.alert}
              </Alert>
            )}
            <button
              disabled={isLoading}
              onClick={sendMessage}
              className={isLoading ? "dis-button" : "cont-button"}
            >
              {isLoading ? "Processing..." : "Send"}
            </button>
          </form>
          
          <div className="bcd">
            <div className="cont-down">
              <a href="tel:770 854 1894" className="phone-container">
                <FaPhone className="cont-icon" />
                <span className="welcome-text">770 854 1894</span>
              </a>
              <button onClick={openBooking} className="book-button">
                Book a call
              </button>
            </div>

            <div className="cont-useful">
              <span className="welcome-text">Tel: +1 (203) 715 5243</span>
              <span className="welcome-text">Email: contact@ramahsolutions.com</span>
              <span className="welcome-text">Location: 406 Nocturne Ridge Drive Willis TX, 77318, USA</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact