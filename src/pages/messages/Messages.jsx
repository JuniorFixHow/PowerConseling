/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './messages.css';
import { MdAddComment, MdDelete } from "react-icons/md";
import NewMessage from '../../components/newMessage/NewMessage';
import axios from 'axios';
import { API } from '../../components/constants';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const Messages = ({setCurrentItem, setOpenMessage, currentItem, openMessage}) => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [message, setMessage] = useState({alert:'', error:false});

  const closeMessage = ()=>{
    setOpen(false);
    setCurrentItem(null);
    setOpenMessage(false);
  }
  const openFullMessage = async(item, id, hasRead)=>{
    setOpen(true);

    setCurrentItem(currentItem ? null : item);
    setCurrentId(currentId ? null : id);
    setOpenMessage(false);

    try {
      if(!hasRead){
        await axios.put(`${API}message/${id}`, {hasRead:true})
      }
    } catch (error) {
      console.log(error)
    }
  }

  const openNew=()=>{
    setCurrentItem(null);
    setOpenMessage(true);
  }
  
  const handleReply = (item)=>{
    setCurrentItem(item);
    setOpenMessage(true);
  }

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await axios.get(`${API}message`);
        setMessages(res.data.sort((a, b)=>a.createdAt<b.createdAt?1:-1))
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[messages])

  const deleteItem = async()=>{
    messages.filter(item=>item._id !== currentId);
    try {
      setOpenDialog(false);
      await axios.delete(`${API}message/${currentId}`);
      setMessage({alert:'Item deleted successfully', error:false});
      // location.reload();
    } catch (error) {
      setMessage({alert:'Error occured. Retry', error:true});
      console.log(error)
    }
  }

  return (
    <div className="messages">
      <div className="msg-top">
        {openMessage && (
          <NewMessage
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            openMessage={openMessage}
            setOpenMessage={setOpenMessage}
          />
        )}
        <span className="subtitle">Messages</span>
        <MdAddComment onClick={openNew} className="msg-icon" />
      </div>
      {
        message.alert &&
        <Alert  severity={message.error? 'error':'success'} onClose={()=>setMessage({alert:'', error:false})} >{message.alert}</Alert>
      }
      <div className="msg-content">
        {messages.length?
          messages.map((msg) => (
            <div key={msg._id} className="one-msg">
              <span
                onClick={() => openFullMessage(msg, msg._id, msg.hasRead)}
                className={msg?.hasRead ? "msg-onetop2" : "msg-onetop"}
              >
                {msg?.subject}
              </span>
              <span className="msg-text">
                {(currentId !== msg._id && msg?.body.length > 50) ?
                  msg?.body.slice(0, 50) + '...'
                  : open && currentId === msg._id 
                  ?
                  msg?.body
                  :
                  msg?.body.slice(0, 50)
                }
               
              </span>
              
              {open && currentId === msg._id && (
                <>
                  <div className="msg-onedown">
                    <span className="sender">{msg?.fullname} @{msg?.email}</span>
                    <span className="msg-date">
                      {new Date(msg?.createdAt).toLocaleDateString()},{" "}
                      {new Date(msg?.createdAt).toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </span>
                  </div>
                  <div className="msg-actions">
                    <MdDelete onClick={()=>setOpenDialog(true)} className="msg-delete" />
                    <button onClick={closeMessage} className="mesleft">
                      Close
                    </button>
                    <button
                      onClick={() => handleReply(msg)}
                      className="mesright"
                    >
                      Reply
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
          :
          <h1>No Messages yet</h1>
        }
      </div>
      <Dialog
          open={openDialog}
          onClose={()=>setOpenDialog(true)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          {"Delete"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this message?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpenDialog(false)} autoFocus >No</Button>
          <Button onClick={deleteItem} >
            Yes
          </Button>
        </DialogActions>
        </Dialog>
    </div>
  );
}

export default Messages