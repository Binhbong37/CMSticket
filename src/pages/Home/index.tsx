import classNames from 'classnames/bind'
import { useState } from 'react'
import { formatPrice } from '../../utils/formatPrice';
import PageTitle from '../../components/PageTiltle';
import PageWrapper from '../../components/PageWrapper';
import AreaChartItem from '../../components/AreaChartItem';
import CalenderPicker from '../../components/CalendarPicker';
import CircleChart from '../../components/CircleChart';

import styles from '../../assets/css/pages/Home.module.css'

const familyPackage = [
  { name: 'Tickets used', value: 56024 },
  { name: 'Unused ticket', value: 13568 }
]

const eventPackage = [
  { name: 'Tickets used', value: 30256 },
  { name: 'Unused ticket', value: 28302 }
]

const cx = classNames.bind(styles)

function HomePage() {
  const today = new Date()
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(today)

  return (
    <PageWrapper>
      <PageTitle title='Thống kê' />
      <div className={cx('container')}>
        <div className={cx('area-chart-content')}>
          <div className={cx('title-calendar')}>
            <div className={cx('chart-title')}>Doanh thu</div>
            <CalenderPicker
              formatDate='MMMM, yyyy'
              selectedDate={selectedDay}
              setSelectedDate={setSelectedDay}
              placement='bottom-end'
            />
          </div>

          <AreaChartItem />
          <div className={cx('revenue')}>
            <p className={cx('revenue-title')}>Tổng doanh thu theo tuần</p>
            <div>
              <span className={cx('revenue-total')}>{formatPrice(525145000)}</span>
              <span className={cx('revenue-unit')}>đồng</span>
            </div>
          </div>
        </div>
      </div>
      {/* Circle */}
      <div className={cx('container')}>
        <div className={cx('circle-content')}>
          <CalenderPicker
            formatDate='MMMM, yyyy'
            selectedDate={selectedDay}
            setSelectedDate={setSelectedDay}
            placement='top-start'
          />
          <div className={cx('circle-chart')}>
            <div className={cx('circle-chart-title')}>Gói gia đình</div>
            <CircleChart data={familyPackage} />
          </div>
          <div className={cx('circle-chart')}>
            <div className={cx('circle-chart-title')}>Gói sự kiện</div>
            <CircleChart data={eventPackage} />
          </div>
          <div>
            <div className={cx('circle-note__used')}>
              <div />
              <p>Vé đã sử dụng</p>
            </div>
            <div className={cx('circle-note__unused')}>
              <div />
              <p>Vé chưa sử dụng</p>
            </div>
          </div>
        </div>
      </div>


    </PageWrapper>
  )
}

export default HomePage
