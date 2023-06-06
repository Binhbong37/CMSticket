import classNames from 'classnames/bind';
import styles from '../../../../assets/css/pages/CheckPage/components/Table.module.css'

const cx = classNames.bind(styles)

function TableHeader() {
  return (
    <tr className='table-row'>
      <th className='table-col'>STT</th>
      <th className='table-col'>Số vé</th>
      <th className={cx('event-name', 'table-col')}>Tên sự kiện</th>
      <th className='table-col'>Ngày suất vé</th>
      <th className='table-col'>Tên loại vé</th>
      <th className='table-col'>Cổng check - in</th>
      <th className='table-col' />
    </tr>
  )
}

export default TableHeader
