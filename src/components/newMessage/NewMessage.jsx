/* eslint-disable react/prop-types */
import { Alert, Modal } from '@mui/material';
import './newMessage.css';
import { useRef, useState } from 'react';
import axios from 'axios';
import { API } from '../constants';

const NewMessage = ({openMessage, setOpenMessage, currentItem, setCurrentItem}) => {
  const [message, setMessage] = useState({alert:'', error:false});
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [data, setData] = useState({
    email:'',
    fullname: "powerconsulting24@gmail.com",
    subject: "",
    body: "",
  });

  const formRef = useRef();

  const closeModal = ()=>{
    setOpenMessage(false);
    setCurrentItem(null);
  }

  const handleChange = (e)=>{
    setData(pre=>({
      ...pre, [e.target.name]:e.target.value,
      email:currentItem ? currentItem.email : email
    }))
  }

  const sendMessage = async(e)=>{
    e.preventDefault()
    if(data.body.trim()!=='' && data.subject.trim() !==''){
      setLoading(true);
      try {
        const res = await axios.post(`${API}message/send`, data);
        if(res.status===200){
          setMessage({alert:'Message delivered!', error:false})
          formRef.current.reset();
        }else{
          setMessage({alert:'Error occured. Please retry', error:true})
        }
      } catch (error) {
        console.log(error);
        setMessage({alert:'Error occured. Please retry', error:true})
      }finally{
        setLoading(false);
      }
    }
    else{
      setMessage({alert:'Please complete the form.', error:true})
    }
  }

  return (
    <Modal
      className='newMessage'
      open={openMessage}
      onClose={closeModal}
      aria-labelledby='New Message'
      aria-describedby="Create new product"
    >
      <form ref={formRef} className="mess-container">
        <span className="subtitle">New Message</span>
        <div className="mess-top">
          {
            !currentItem &&
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name='email' placeholder='Enter email' />
          }
          <input onChange={handleChange} type="text" name='subject' placeholder='Enter suject' />
          <textarea onChange={handleChange} name="body" id=""  placeholder='message body...' rows="5"/>
        </div>
        {
          message.alert &&
          <Alert className='alert' severity={message.error?'error':'success'} >{message.alert}</Alert>
        }
        <div className="mess-down">
          <button onClick={closeModal} className="mesleft">Cancel</button>
          <button disabled={loading} onClick={sendMessage} className={loading?"mesrightd":"mesright"}>{loading?'Wait..':'Send'}</button>
        </div>
      </form>
    </Modal>
  )
}

export default NewMessage