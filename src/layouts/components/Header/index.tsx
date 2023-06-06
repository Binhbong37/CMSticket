import classNames from 'classnames/bind'
import avatar from '../../../assets/img/avatar.jpg'
import { BellIcon, MailIcon } from '../../../components/Icons'
import styles from '../../../assets/css/layouts/components/Header.module.css'
import { Link } from 'react-router-dom'
import routes from '../../../configs/routes'

const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('tool-item')}>
        <MailIcon />
      </div>
      <div className={cx('tool-item')}>
        <BellIcon />
      </div>
      <Link to={routes.profile} className={cx('user')}>
        <img src={avatar} alt='avatar' className={cx('avatar')} />
      </Link>
    </div>
  )
}

export default Header