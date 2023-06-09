import classNames from 'classnames/bind'
import avatar from '../../../assets/img/avatar.jpg'
import { BellIcon, MailIcon } from '../../../components/Icons'
import styles from '../../../assets/css/layouts/components/Header.module.css'
import { Link } from 'react-router-dom'
import routes from '../../../configs/routes'
import Search from '../../../components/Search'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Header() {
  const [searchValue, setSearchValue] = useState<string>('')
  return (
    <div className={cx('wrapper')}>
      <div className='rightSide'>
        <Search
          placeholder='Search'
          className={'header-search'}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className={cx('leftSide')}>
        <div className={cx('tool-item')}>
          <MailIcon />
        </div>
        <div className={cx('tool-item')}>
          <BellIcon />
        </div>
        <Link to={'/'} className={cx('user')}>
          <img src={avatar} alt='avatar' className={cx('avatar')} />
        </Link>
      </div>

    </div>
  )
}

export default Header