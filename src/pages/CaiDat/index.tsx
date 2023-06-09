import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { collection, onSnapshot } from 'firebase/firestore'
import { CSVLink } from 'react-csv'

import usePagination from '../../hooks/usePagination';
import { RootState, useAppDispatch } from '../../store';
import { startAdd } from '../../store/packageSlice'

import { db } from '../../firebase'
import PageWrapper from '../../components/PageWrapper'
import PageTitle from '../../components/PageTiltle'
import Search from '../../components/Search'
import Button from '../../components/Button'
import Pagination from '../../components/Pagination';
import TableHeader from './components/Table/TableHeader';
import TableRow from './components/Table/TableRow'
import AddAndUpdate from './components/AddAndUpdate'

import styles from '../../assets/css/pages/CaiDat/CaiDat.module.css'

const cx = classNames.bind(styles)

function SettingPackagePage() {
  const dispatch = useAppDispatch()
  const isOpenAddAndUpdate: boolean = useSelector(
    (state: RootState) => state.package.isOpenAddAndUpdate
  )
  const editPackage: any | null = useSelector((state: RootState) => state.package.editItem)
  const [listPackage, setListPackage] = useState<any[]>([])
  const { currentData, itemsPerPage, pageSize, setItemOffset } = usePagination(listPackage as [], 8)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'packages'),
      (snapShot) => {
        let list: any[] = []
        snapShot.forEach((doc) => {
          list.push({ ...(doc.data() as any) })
        })
        setListPackage(list)
      },
      (error) => {
        console.log(error)
      }
    )
    return () => {
      unsub()
    }
  }, [])

  const handleOpenAdd = () => {
    dispatch(startAdd())
  }

  return (
    <PageWrapper>
      <PageTitle title='Danh sách gói vé' />
      <div className={cx('tool')}>
        <Search
          placeholder='Tìm bằng số vé'
          setSearchValue={setSearchValue}
          className={cx('tool__search')}
        />
        <div className={cx('tool__btn')}>
          <CSVLink
            data={listPackage}
            filename={'my-file.csv'}
            target='_blank'
            className={cx('tool__export')}
          >
            <Button large outline>
              Xuất file (.csv)
            </Button>
          </CSVLink>
          <Button large onClick={handleOpenAdd}>
            Thêm gói vé
          </Button>
        </div>
      </div>
      <div className={cx('content')}>
        <table className='table'>
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {(currentData as any[]).map((item, index) => (
              <TableRow packageItem={item} index={index} key={item.id} />
            ))}
          </tbody>
        </table>
        {/* paginate */}
        {pageSize > 1 && (
          <Pagination
            itemsPerPage={itemsPerPage}
            listLength={listPackage.length}
            pageSize={pageSize}
            setItemOffset={setItemOffset}
          />
        )}
      </div>
      {(isOpenAddAndUpdate || editPackage) && <AddAndUpdate />}
    </PageWrapper>
  )
}

export default SettingPackagePage
