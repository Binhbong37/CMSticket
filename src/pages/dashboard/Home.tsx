import ChartLine from '../../Components/ChartLine';
import { DatePicker } from 'antd';
import '../../assets/css/home.css'
import CircleChart from '../../Components/PieChart';
import Box from '../../Components/Box';

const familyPackage = [
  { name: 'Tickets used', value: 560 },
  { name: 'Unused ticket', value: 135 }
]

const eventPackage = [
  { name: 'Tickets used', value: 302 },
  { name: 'Unused ticket', value: 283 }
]

const Home = () => {

  return (
    <Box style={{ width: "100%" }}>
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
        <div className='piker'>
          <DatePicker />

        </div>
        <div className='pie-circle'>
          <div className='groupLabel'>
            <p>Gói gia đình</p>
            <CircleChart data={familyPackage} />
          </div>
          <div className='groupLabel'>
            <p>Gói sự kiện</p>
            <CircleChart data={eventPackage} />
          </div>
        </div>

        <div className='notePie'>
          <div className='notePie-block'>
            <p className='colorNote1'></p>
            <p>Vé đã sử dụng</p>
          </div>
          <div className='notePie-block'>
            <p className='colorNote2'></p>
            <p>Vé chưa sử dụng</p>
          </div>

        </div>

      </div>
    </Box>
  )
}

export default Home