import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux'
import useQueryParams from '../../hooks/useQueryparams';
import usePagination from '../../hooks/usePagination';
import { db } from '../../firebase';
import { RootState } from '../../store';
import PageWrapper from '../../components/PageWrapper';
import PageTitle from '../../components/PageTiltle';
import Filter from './components/Filter';
import Search from '../../components/Search';
import Button from '../../components/Button';
import Pagination from '../../components/Pagination';
import TableHeader from './components/Table/TableHeader';
import TableRow from './components/Table/TableRow';
import styles from '../../assets/css/pages/DoiSoatVe/DoiSoatVe.module.css'

const cx = classNames.bind(styles)

function CheckPage() {
  const searchParams = useQueryParams()
  const { type, checkStatus, startDate, endDate } = searchParams;

  const [tickets, setTickets] = useState<any>([])
  const { currentData, itemsPerPage, pageSize, setItemOffset } = usePagination(tickets as [], 8)
  const checkTicket: any | null = useSelector((state: RootState) => state.manage.checkItem)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    const typeQuery = (type: string | undefined) => {
      if (type) {
        if (type === 'Tất cả') {
          const currentType = 'Vé trọn gói,Vé cổng'
          return where('type', 'in', currentType.split(','))
        } else {
          return where('type', '==', type)
        }
      } else {
        const currentType = 'Vé trọn gói,Vé cổng'
        return where('type', 'in', currentType.split(','))
      }
    }
    const checkStatusQuery = (status: string | undefined) => {
      if (status) {
        if (status === 'Tất cả') {
          const currentStatus = 'Đã đối soát,Chưa đối soát'
          return where('checkStatus', 'in', currentStatus.split(','))
        } else {
          return where('checkStatus', '==', status)
        }
      } else {
        const currentStatus = 'Đã đối soát,Chưa đối soát'
        return where('checkStatus', 'in', currentStatus.split(','))
      }
    }
    const startDateQuery = (date: string) => {
      return where('applyDate', '>=', Number(date || 0))
    }
    const endDateQuery = (date: string) => {
      if (date) {
        return where('applyDate', '<=', Number(date))
      } else {
        return where('applyDate', '<=', Infinity)
      }
    }

    const ticketRef = collection(db, 'tickets');
    const q = query(
      ticketRef,
      typeQuery(type),
      checkStatusQuery(checkStatus),
      startDateQuery(startDate),
      endDateQuery(endDate)
    )
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const listTicket: any[] = []
      querySnapshot.forEach((doc) => {
        listTicket.push(doc.data() as any)
      })
      setTickets(listTicket)
    })

    return () => {
      unsubscribe()
    }
  }, [type, checkStatus, startDate, endDate])

  return (
    <div className={cx('wrapper')}>
      <PageWrapper className={cx('wrapper-left')}>
        <PageTitle title='Đối soát vé' />
        <div className={cx('tool')}>
          <Search
            placeholder='Tìm bằng số vé'
            setSearchValue={setSearchValue}
            className={cx('search')}
          />
          <CSVLink data={tickets} filename={'my-file.csv'} target='_blank'>
            <Button large outline>
              Xuất file (.csv)
            </Button>
          </CSVLink>
        </div>
        <div className={cx('content')}>
          <table className='table'>
            <thead>
              <TableHeader />
            </thead>
            <tbody>
              {(currentData as any[]).map((ticket, index) => (
                <TableRow ticket={ticket} index={index} key={ticket.id} />
              ))}
            </tbody>
          </table>
          {/* paginate */}
          {pageSize > 1 && (
            <Pagination
              itemsPerPage={itemsPerPage}
              listLength={tickets.length}
              pageSize={pageSize}
              setItemOffset={setItemOffset}
            />
          )}
        </div>
      </PageWrapper>
      <Filter />
      {checkTicket && 'Updatechecked'}
    </div>
  )
}

export default CheckPage
