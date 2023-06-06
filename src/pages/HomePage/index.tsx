import classNames from 'classnames/bind'
import { useState } from 'react'
import { formatPrice } from '../../utils/formatPrice';
import PageTitle from '../../components/PageTiltle';
import PageWrapper from '../../components/PageWrapper';
import AreaChartItem from '../../components/AreaChartItem';
import CalenderPicker from '../../components/CalendarPicker';
import CircleChart from '../../components/CircleChart';

import styles from '../../assets/css/pages/HomePage.module.css'

const familyPackage = [
  { name: 'Tickets used', value: 560 },
  { name: 'Unused ticket', value: 135 }
]

const eventPackage = [
  { name: 'Tickets used', value: 302 },
  { name: 'Unused ticket', value: 283 }
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
            />
          </div>

          <AreaChartItem />
          <div className={cx('revenue')}>
            <p className={cx('revenue-title')}>Tổng doanh thu theo tuần</p>
            <div>
              <span className={cx('revenue-total')}>{formatPrice(52514500)}</span>
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
