import React, { useState } from 'react';
import '../../../assets/css/quanLyVe.css'
import SearchFilter from '../../../Components/SearchFilter';
import TableGiaDinh from '../../../Components/TableGiaDinh';
import TableSuKien from '../../../Components/TableSuKien';
import Box from '../../../Components/Box';

const QuanLyVe = () => {
  const [loaiGoi, setLoaiGoi] = useState('giaDinh');


  const changeLoaiVe = (ve: string) => {
    setLoaiGoi(ve)
  }
  return (
    <Box>
      <h2 className='title'>Danh sách vé</h2>
      <div className='loaiGoi'>
        <p
          onClick={() => changeLoaiVe('giaDinh')}
          className={loaiGoi === 'giaDinh' ? 'clicked' : ''}
        >Gói gia đình</p>
        <p
          onClick={() => changeLoaiVe('suKien')}
          className={loaiGoi === 'suKien' ? 'clicked' : ''}
        >Gói sự kiện</p>
      </div>
      <div className=''>
        <SearchFilter quanlyve={true} doisoatve={false} />
      </div>
      <div className=''>
        {
          loaiGoi === 'giaDinh' && <TableGiaDinh />
        }
        {
          loaiGoi === 'suKien' && <TableSuKien />
        }
      </div>
    </Box>
  )
}

export default QuanLyVe