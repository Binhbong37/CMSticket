import React from 'react'
import ChartLine from '../../Components/ChartLine';
import { DatePicker } from 'antd';
import '../../assets/css/home.css'

const Home = () => {
  return (
    <div>
      <h2 className='title'>Thống kê</h2>
      <div className='chartline'>
        <div className='chart-top'>
          <p className='doanhThu'>Doanh thu</p>
          <DatePicker />
        </div>
        <ChartLine aspect={3 / 1} />
      </div>
    </div>
  )
}

export default Home