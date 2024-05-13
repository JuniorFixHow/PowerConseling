/* eslint-disable react/prop-types */
import { useState } from 'react'
import AcaTable from '../../components/academyTables/AcaTable'
import './academy.css'
import NewMessage from '../../components/newMessage/NewMessage';

const Academy = ({openMessage, setOpenMessage, currentItem, setCurrentItem}) => {
  const [search, setSearch] = useState('');
  
  
  
  const searchItem = (arr)=>{
    return(
      arr.filter(item=>{
        return search === '' ? item : Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase())
      })
    )
  }

  return (
    <div className="academy">
      <div className="aca-container">
        <span className="subtitle aca-title">The AcuPower Academy</span>
        {openMessage && (
          <NewMessage
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            openMessage={openMessage}
            setOpenMessage={setOpenMessage}
            />
            )}
        <div className="table-container">
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search..."
            type="text"
            />
          <AcaTable
            searchItem={searchItem}
            setCurrentItem={setCurrentItem}
            currentItem={currentItem}
            // openMessage={openMessage}
            setOpenMessage={setOpenMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Academy