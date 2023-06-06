import classNames from 'classnames/bind'
import styles from '../../assets/css/components/RequireTag.module.css'

const cx = classNames.bind(styles)

function RequireTag() {
  return (
    <div className={cx('wrapper')}>
      <span>*</span>
      Là trường thông tin bắt buộc
    </div>
  )
}

export default RequireTag