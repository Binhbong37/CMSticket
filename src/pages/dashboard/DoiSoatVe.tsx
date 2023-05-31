import React from 'react'
import Box from '../../Components/Box';
import '../../assets/css/doiSoatVe.css'
import SearchFilter from '../../Components/SearchFilter';

const DoiSoatVe = () => {
  return (
    <div>
      <div className='doisoatBox'>
        <Box style={{ width: "70%" }}>
          <h2 className='title'>Đối soát vé</h2>
          <SearchFilter />

        </Box>
        <Box style={{ width: "30%" }}>
          helo
        </Box>
      </div>
    </div>
  )
}

export default DoiSoatVe