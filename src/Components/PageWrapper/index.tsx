import classNames from 'classnames/bind'
import style from '../../assets/css/components/PageWrapper.module.css'

const cx = classNames.bind(style)

interface Props {
  children: React.ReactNode
  className?: string
}

function PageWrapper({ children, className }: Props) {
  return <div className={cx('wrapper', className)}>{children}</div>
}

export default PageWrapper