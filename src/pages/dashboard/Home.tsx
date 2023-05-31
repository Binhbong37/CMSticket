import React from 'react'
import ChartLine from '../../Components/ChartLine';
import { DatePicker } from 'antd';
import '../../assets/css/home.css'
import PieChart from '../../Components/PieChart';

const Home = () => {

  return (
    <div>
      <h2 className='title'>Thống kê</h2>
      <div className='chartline'>
        <div className='chart-top'>
          <p className='doanhThu'>Doanh thu</p>
          <DatePicker
            placeholder='Tháng 4, 2021'
            style={{
              height: "auto",
              width: "auto",
              border: "1px solid #E6E0E0",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "17px",
              padding: "8px 1.2rem"
            }}
          />
        </div>
        <ChartLine aspect={3 / 1} />
      </div>

      <div className='totalDoanhthu'>
        <p className='tit'>Tổng doanh thu theo tuần</p>
        <p className=''><span className='title'>525.145.000</span> đồng</p>
      </div>

      <div className='pie-chart'>
        <div className='labelPie'>
          <DatePicker />
          <p className=''>Gói gia đình</p>
          <p>Gói sự kiện</p>
        </div>
        <PieChart />
      </div>
    </div>
  )
}

export default Home