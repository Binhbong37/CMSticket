import classNames from 'classnames/bind'
import { useId, useState } from 'react'
import { useFloating, FloatingPortal, useInteractions, useHover } from '@floating-ui/react'

import formatDate from '../../../../utils/formatDate'
import { useAppDispatch } from '../../../../store'
import { startEdit } from '../../../../store/packageSlice'
import StatusTag from '../../../../components/StatusTag'
import { EditIcon } from '../../../../components/Icons'
import styles from '../../../../assets/css/pages/CaiDat/components/Table.module.css'

const cx = classNames.bind(styles)

function TableRow({ packageItem, index }: { packageItem: any; index: number }) {
  const dispatch = useAppDispatch()
  const id = useId()
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start'
  })
  const hover = useHover(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  const handleUpdate = () => {
    dispatch(startEdit(packageItem))
  }

  return (
    <tr className='table-row'>
      <td className='table-col center-row'>{index + 1}</td>
      <td className='table-col'>{packageItem.id}</td>
      <td
        className={cx('event-name', 'table-col')}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {packageItem.name}
        {isOpen && (
          <FloatingPortal id={id}>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className={cx('popup')}
              {...getFloatingProps()}
            >
              {packageItem.name}
            </div>
          </FloatingPortal>
        )}
      </td>
      <td className='table-col'>{formatDate(packageItem.applyDate)}</td>
      <td className='table-col'>{formatDate(packageItem.expirationDate)}</td>
      <td className='table-col'>{`${packageItem.price} VNĐ` || '_'}</td>
      <td className='table-col'>
        {packageItem.comboPrice && packageItem.comboQuantity
          ? `${packageItem.comboPrice} VNĐ/${packageItem.comboQuantity} vé`
          : '_'}
      </td>
      <td className={cx('table-col', 'status')}>
        <StatusTag statusMessage={packageItem.statusMessage} />
      </td>
      <td className={cx('table-col', 'table-btn', 'update')} onClick={handleUpdate}>
        <EditIcon />
        Cập nhật
      </td>
    </tr>
  )
}

export default TableRow