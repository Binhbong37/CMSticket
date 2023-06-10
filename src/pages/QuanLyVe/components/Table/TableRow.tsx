import classNames from 'classnames/bind'
import { useId, useState } from 'react'
import { useFloating, FloatingPortal, useInteractions, useHover } from '@floating-ui/react'

import formatDate from '../../../../utils/formatDate'
import { useAppDispatch } from '../../../../store'
import { startUpdate } from '../../../../store/manageTicketSlice'
import StatusTag from '../../../../components/StatusTag'
import { MoreIcon } from '../../../../components/Icons'
import styles from '../../../../assets/css/pages/QuanLyVe/components/Table.module.css'

const cx = classNames.bind(styles)

function TableRow({ ticket, index }: { ticket: any; index: number }) {
  const id = useId()
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start'
  })
  const hover = useHover(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  const handleStartUpdateTicket = () => {
    console.log('Click')
    // dispatch(startUpdate(ticket))
  }

  return (

    <tr className='table-row'>
      <td className='table-col center-row'>{index + 1}</td>
      <td className='table-col'>{ticket.codeBoking}</td>
      <td className='table-col'>{123456789034}</td>
      <td
        className={cx('event-name', 'table-col')}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {ticket.tenSuKien}
        {isOpen && (
          <FloatingPortal
            id={id}
          >
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className={cx('popup')}
              {...getFloatingProps()}
            >
              {ticket.tenSuKien}
            </div>
          </FloatingPortal>
        )}
      </td>
      <td className='table-col'>
        <StatusTag statusMessage={ticket.status} />
      </td>
      <td className='table-col'>{'14/04/2021'}</td>
      <td className='table-col'>{'14/04/2021'}</td>
      <td className='table-col center-row'>{ticket.gate}</td>
      <td className={cx('update', 'table-col')} onClick={() => handleStartUpdateTicket()}>
        <MoreIcon />
      </td>
    </tr>
  )
}

export default TableRow
