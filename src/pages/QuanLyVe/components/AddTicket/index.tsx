import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch } from '../../../../store'
import { collection, getDocs } from 'firebase/firestore'
import { ticketSchema } from '../../../../utils/getRules'
import { db } from '../../../../firebase'
import { addTicket, cancelAdd } from '../../../../store/manageTicketSlice'
import Modal from '../../../../components/Modal'
import Button from '../../../../components/Button'
import CalenderPicker from '../../../../components/CalendarPicker'
import Label from '../../../../components/Label'
import RequireTag from '../../../../components/RequiredTag'
import Select from '../../../../components/Select'
import styles from '../../../../assets/css/pages/QuanLyVe/components/AddTicket.module.css'


const cx = classNames.bind(styles)

const gates = ['Cổng 1', 'Cổng 2', 'Cổng 3', 'Cổng 4', 'Cổng 5']
const ticketType = ['Vé cổng', 'Vé trọn gói']
const status = ['Chưa sử dụng', 'Đã sử dụng', 'Hết hạn']
const listPackage = ['Sự kiện 1', 'Sự kiện 2', 'Sự kiện 3', 'Hội chợ triển lãm tiêu dùng 2021']

function AddTicket() {
  const today = new Date()
  const dispatch = useAppDispatch()
  // const [listPackage, setListPackage] = useState<string[]>([])
  const [applyDate, setApplyDate] = useState<Date | undefined>(today)
  const [useDate, setUseDate] = useState<Date | undefined>(today)
  const [isPending, setIsPending] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<any>({
    resolver: yupResolver(ticketSchema)
  })
  const onSubmit = handleSubmit(async (data) => {
    const formData: any = {
      ...data,
      id: today.getTime(),
      checkStatus: 'Chưa đối soát',
      applyDate: (applyDate as Date).getTime(),
      useDate: (useDate as Date).getTime()
    }
    setIsPending(true)
    await dispatch(addTicket(formData))
    setIsPending(false)
    dispatch(cancelAdd())
  })

  const handleCancel = () => {
    dispatch(cancelAdd())
  }

  // get list package name
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const listPackageName: string[] = []
  //     const querySnapshot = await getDocs(collection(db, 'packages'))
  //     querySnapshot.forEach((doc) => {
  //       const packageItem: any = doc.data() as any
  //       const packageName: string = packageItem.name
  //       const isHaveName = listPackageName.includes(packageName)
  //       const isApplying = packageItem.statusMessage === 'Đang áp dụng'
  //       if (!isHaveName && isApplying) {
  //         listPackageName.push(packageName)
  //       }
  //     })
  //     setListPackage(listPackageName)
  //   }

  //   fetchApi()
  // }, [])


  return (
    <Modal title='Thêm vé'
      oncloseModal={handleCancel}
    >
      <form className={cx('container')} onSubmit={onSubmit}>
        <div>
          <Label require label='Tên gói vé' className={cx('label')} />
          <Select
            name='packageName'
            options={listPackage}
            placeholder='Chọn gói vé'
            className={cx('select-package')}
            register={register}
            errorMessage={errors.packageName?.message}
          />
        </div>

        <div className={cx('group')}>
          <div className={cx('item')}>
            <Label require label='Loại vé' className={cx('label')} />
            <Select
              name='type'
              options={ticketType}
              placeholder='Chọn loại vé'
              register={register}
              errorMessage={errors.type?.message}
            />
          </div>
          <div className={cx('item')}>
            <Label require label='Cổng check - in' className={cx('label')} />
            <Select
              name='gate'
              options={gates}
              placeholder='Chọn cổng vào'
              register={register}
              errorMessage={errors.gate?.message}
            />
          </div>
        </div>
        {/* use status */}
        <div className={cx('single-ele')}>
          <Label require label='Tình trạng sử dụng' className={cx('label')} />
          <Select
            name='statusMessage'
            options={status}
            placeholder='Trạng thái'
            register={register}
            errorMessage={errors.statusMessage?.message}
          />
        </div>
        {/* date */}
        <div className={cx('group')}>
          <div className={cx('item')}>
            <Label require label='Ngày xuất vé' className={cx('label')} />
            <CalenderPicker
              formatDate='dd/MM/yyy'
              selectedDate={applyDate}
              setSelectedDate={setApplyDate}
              placement='top-start'
            />
          </div>
          <div className={cx('item')}>
            <Label require label='Hạn sử dụng' className={cx('label')} />
            <CalenderPicker
              formatDate='dd/MM/yyy'
              selectedDate={useDate}
              setSelectedDate={setUseDate}
              placement='top-start'
            />
          </div>
        </div>
        {/* note */}
        <RequireTag />
        {/* btn */}
        <div className={cx('form-btn')}>
          <Button large outline onClick={handleCancel}>
            Huỷ
          </Button>
          <Button large
            disabled={isPending}

            type='submit'
          >
            Lưu
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default AddTicket
