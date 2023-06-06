import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import routes from '../../configs/routes'
import styles from '../../assets/css/components/Logo.module.css'
import images from '../assets/images'

const cx = classNames.bind(styles)

function Logo({ className }: { className?: string }) {
  return (
    <Link to={routes.home} className={cx('logo', className)}>
      <img src={images.logo} alt='logo' className={cx('logo')} />
    </Link>
  )
}

export default Logo