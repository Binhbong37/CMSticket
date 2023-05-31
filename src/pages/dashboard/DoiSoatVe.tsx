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
          <SearchFilter quanlyve={false} doisoatve={true} />

        </Box>
        <Box style={{ width: "30%" }}>
          <h2>Lọc vé</h2>

        </Box>
      </div>
    </div>
  )
}

export default DoiSoatVe