import React from 'react';
import '../../assets/css/quanLyVe.css'
import SearchFilter from '../../Components/SearchFilter'
import TableAnt from '../../Components/TableAnt'

const QuanLyVe = () => {
  return (
    <div>
      <h2 className='title'>Danh sách vé</h2>
      <div className='loaiGoi'>
        <p className='giaDinh'>Gói gia đình</p>
        <p>Gói sự kiện</p>
      </div>
      <div className=''>
        <SearchFilter />
      </div>
      <div className=''>
        <TableAnt />
      </div>
    </div>
  )
}

export default QuanLyVe