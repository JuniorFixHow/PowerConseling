/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './acatable.css';
import { MdDelete, MdEmail } from "react-icons/md";
import axios from 'axios';
import { API } from '../constants';
import { DataGrid } from '@mui/x-data-grid';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const AcaTable = ({searchItem, setCurrentItem, currentItem, setOpenMessage}) => {
    const [rows, setRows] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [message, setMessage] = useState({alert:'', error:false});
    
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const data =  await axios.get(`${API}academy`);
                setRows(data.data.sort((a, b)=>a.createdAt < b.createdAt? 1:-1));
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[rows])
    
    const openCurrentMessage = (item)=>{
      setCurrentItem(item);
      setOpenMessage(true);
    }

    const openCurrentItem =(item)=>{
        setCurrentItem(item);
        setOpenDialog(true);
    }
    const closeCurrentItem =()=>{
        setCurrentItem(null);
        setOpenDialog(false);
    }

    const deleteItem= async()=>{
        try {
            rows.filter((item)=>item._id !== currentItem._id);
            await axios.delete(`${API}academy/${currentItem?._id}`)
            setMessage({alert:'Item deleted successfully', error:false});
            closeCurrentItem();
        } catch (error) {
            setMessage({alert:'Error occured. Retry', error:true})
            console.log(error)
        }
    }


    const columns = [
      { field: "fullname", headerName: "Name", width: 150 },
      { field: "interest", headerName: "Interest", width: 130 },
      { field: "phone", headerName: "Phone", width: 130 },
      { field: "email", headerName: "Email", width: 200 },
      { 
        field: "location", 
        headerName: "Location", 
        width: 280,
        renderCell:(params) =>(
            <div className="location-items">
                <span className="location-item">
                    {params?.row?.location.country}, {params?.row?.location.region}, {params?.row?.location.city}
                </span>
            </div>
        )
    },
      { 
        field: "id", 
        headerName: "Actions", 
        width: 80,
        renderCell:(params) =>(
            <div className="actions">
                <MdDelete onClick={()=>openCurrentItem(params.row)} className='delete' />
                <MdEmail onClick={()=>openCurrentMessage(params.row)} className='edit' />
            </div>
        )
    },
    ];
  return (
    <div className='acatable' >
        {
            message.alert &&
            <Alert  severity={message.error? 'error':'success'} onClose={()=>setMessage({alert:'', error:false})} >{message.alert}</Alert>
        }
        <DataGrid
          getRowId={(row)=>row._id}
            rows={searchItem(rows)}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 5 },
            },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
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
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeCurrentItem} autoFocus >No</Button>
          <Button onClick={deleteItem} >
            Yes
          </Button>
        </DialogActions>
        </Dialog>
    </div>
  )
}

export default AcaTable