import classNames from 'classnames/bind'

import formatDate from '../../../../utils/formatDate';
import { useAppDispatch } from '../../../../store';
import { startCheck } from '../../../../store/manageTicketSlice';

// import TicketType from '~/types/TicketType'

import styles from '../../../../assets/css/pages/DoiSoatVe/components/Table.module.css'

const cx = classNames.bind(styles)

function TableRow({ ticket, index }: { ticket: any; index: number }) {

  const dispatch = useAppDispatch()

  const handleCheckTicket = () => {
    window.alert(`Đối soát VÉ ${ticket.id}`)
    dispatch(startCheck(ticket))
  }

  return (
    <tr className='table-row'>
      <td className='table-col center-row'>{index + 1}</td>
      <td className='table-col'>{ticket.id}</td>
      <td className='table-col'>{formatDate(ticket.applyDate)}</td>
      <td className='table-col'>{ticket.type}</td>
      <td className='table-col center-row'>{ticket.gate}</td>
      <td
        className={cx('table-col', 'table-btn', { checked: ticket.checkStatus === 'Đã đối soát' })}
        onClick={handleCheckTicket}
      >
        {ticket.checkStatus}
      </td>
    </tr>
  )
}

export default TableRow