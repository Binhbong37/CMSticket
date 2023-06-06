import classNames from 'classnames/bind'
import styles from '../../assets/css/components/Label.module.css'

const cx = classNames.bind(styles)

interface Props {
  label: string
  require?: boolean
  className?: string
}

function Label({ label, require, className }: Props) {
  return (
    <div className={cx('label', className)}>
      {label}
      {require && <span className={cx('require')}>*</span>}
    </div>
  )
}

export default Label
