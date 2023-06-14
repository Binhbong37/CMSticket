import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../../../../store';
import { addPackage, cancelEdit, closeAdd, editPackage } from '../../../../store/packageSlice';

import { packageSchema } from '../../../../utils/getRules';
import { formatPrice } from '../../../../utils/formatPrice';
import Label from '../../../../components/Label';
import Modal from '../../../../components/Modal';
import Input from '../../../../components/Inputs';
import CalenderPicker from '../../../../components/CalendarPicker';
import Button from '../../../../components/Button';
import Select from '../../../../components/Select';
import RequireTag from '../../../../components/RequiredTag';
import styles from '../../../../assets/css/pages/CaiDat/components/AddAndUpdate.module.css';
import ClockTime from '../../../../components/CalendarPicker/ClockTime';

const cx = classNames.bind(styles)

function AddAndUpdate() {
  const today = new Date()
  const dispatch = useAppDispatch()
  const editItem: any | null = useSelector((state: RootState) => state.package.editItem)
  const currentApplyDate = editItem?.applyDate ? new Date(editItem.applyDate) : today
  const currentExpirationDate = editItem?.expirationDate ? new Date(editItem.expirationDate) : today

  const [applyDate, setApplyDate] = useState<Date | undefined>(currentApplyDate)
  const [expirationDate, setExpirationDate] = useState<Date | undefined>(currentExpirationDate)
  const [isCheckPrice, stIsCheckPrice] = useState<boolean>(Boolean(editItem?.price) || false)
  const [isCheckComboPrice, stIsCheckComboPrice] = useState<boolean>(
    Boolean(editItem?.comboPrice) || false
  )
  const [isPending, setIsPending] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<any>({
    resolver: yupResolver(packageSchema)
  })


  const onSubmit = handleSubmit(async (data) => {

    const price = isCheckPrice ? formatPrice(Number(data.price)) : ''
    const comboPrice = isCheckComboPrice ? formatPrice(Number(data.comboPrice)) : ''
    const comboQuantity = isCheckComboPrice ? data.comboQuantity : ''
    const form: any = {
      ...data,
      id: editItem?.id || new Date().getTime(),
      applyDate: new Date(applyDate as Date).getTime(),
      expirationDate: new Date(expirationDate as Date).getTime(),
      price,
      comboPrice,
      comboQuantity
    }

    console.log(form)
    // setIsPending(true)
    // editItem ? await dispatch(editPackage(form)) : await dispatch(addPackage(form))
    // setIsPending(false)
    // dispatch(closeAdd())
    // dispatch(cancelEdit())
  })

  const handleCheckPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    stIsCheckPrice(e.target.checked)
  }
  const handleCheckComboPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    stIsCheckComboPrice(e.target.checked)
  }
  const handleClose = () => {
    dispatch(closeAdd())
    dispatch(cancelEdit())
  }

  return (
    <Modal title={editItem ? 'Cập nhật thông tin gói vé' : 'Thêm gói vé'}
      oncloseModal={handleClose}
    >
      <form className={cx('container')} onSubmit={onSubmit}>
        <div>
          <Label label='Tên gói vé:' require className={cx('label')} />
          <Input
            name='name'
            type='text'
            value={editItem?.name}
            placeholder='Nhập tên gói vé'
            errorMessage={errors.name?.message}
            register={register}
          />
        </div>
        <div className={cx('group')}>
          <div>
            <Label label='Ngày áp dụng:' className={cx('label')} />
            <div className={cx('dateGr')}>
              <CalenderPicker selectedDate={applyDate} setSelectedDate={setApplyDate} />
              <ClockTime />
            </div>
          </div>
          <div>
            <Label label='Ngày hết hạn:' className={cx('label')} />
            <div className={cx('dateGr')}>
              <CalenderPicker selectedDate={expirationDate} setSelectedDate={setExpirationDate} />
              <ClockTime />
            </div>
          </div>
        </div>
        <div className={cx('check-group')}>
          <Label label='Giá vé áp dụng:' className={cx('label')} />
          <div className={cx('checkbox-item')}>
            <input
              type='checkbox'
              className={cx('price-check')}
              checked={isCheckPrice}
              onChange={handleCheckPrice}
            />
            <label>Vé lẻ (vnđ/vé) với giá</label>
            <input
              placeholder='Giá vé'
              type='number'
              className={cx('price-input')}
              {...register('price', { value: editItem?.price?.replace('.', '') })}
            />
            <span>/ vé</span>
          </div>
          <div className={cx('checkbox-item')}>
            <input
              type='checkbox'
              className={cx('price-check')}
              checked={isCheckComboPrice}
              onChange={handleCheckComboPrice}
            />
            <label>Combo vé với giá</label>
            <input
              placeholder='Giá vé'
              type='number'
              className={cx('price-input')}
              {...register('comboPrice', { value: editItem?.comboPrice?.replace('.', '') })}
            />
            <span>/</span>
            <input
              placeholder='Số lượng vé'
              type='number'
              className={cx('price-input')}
              {...register('comboQuantity', { value: editItem?.comboQuantity })}
            />
            <span>vé</span>
          </div>
        </div>
        <div>
          <Label label='Tình trạng:' className={cx('label')} require />
          <Select
            name='statusMessage'
            placeholder='Tình trạng'
            options={['Đang áp dụng', 'Tắt']}
            value={editItem?.statusMessage}
            errorMessage={errors.statusMessage?.message}
            register={register}
          />
        </div>
        <RequireTag />
        <div className={cx('btn-group')}>
          <Button outline large onClick={handleClose}>
            Huỷ
          </Button>
          <Button large
            disabled={isPending}
          >
            Lưu
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default AddAndUpdate
