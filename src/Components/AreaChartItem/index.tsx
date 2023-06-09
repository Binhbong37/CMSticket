import classNames from 'classnames/bind'
import styles from '../../assets/css/components/AreaChartItem.module.css'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const cx = classNames.bind(styles)

const data = [
  { name: 'Thứ 2', Total: 220 },
  { name: 'Thứ 3', Total: 170 },
  { name: 'Thứ 4', Total: 180 },
  { name: 'Thứ 5', Total: 200 },
  { name: 'Thứ 6', Total: 260 },
  { name: 'Thứ 7', Total: 240 },
  { name: 'CN', Total: 250 }
]

function AreaChartItem() {
  return (
    <ResponsiveContainer height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#FF993C' stopOpacity={0.3} />
            <stop offset='95%' stopColor='#FF993C' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='name' stroke='gray' padding={{ left: 40 }} />
        <YAxis tickMargin={20} unit='tr' width={70} axisLine={false} />
        <CartesianGrid vertical={false} className={cx('chartGrid')} />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='Total'
          stroke='#FF993C'
          strokeWidth={4}
          fillOpacity={1}
          fill='url(#total)'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartItem