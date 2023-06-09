import classNames from 'classnames/bind'
import routes from '../../../configs/routes'
import MenuItem from '../MenuItem';
import { HomeIcon, ListIcon, SettingIcon, TicketIcon } from '../../../components/Icons';
import Logo from '../../../components/Logo'
import styles from '../../../assets/css/layouts/components/Menubar.module.css'

const cx = classNames.bind(styles)

function MenuBar() {
  return (
    <div>
      <Logo className={cx('logo')} />
      <MenuItem title='Trang chủ' route={routes.home} module='parent' icon={<HomeIcon />} />
      <MenuItem title='Quản lý vé' route={routes.QuanLyVe} module='parent' icon={<TicketIcon />} />
      <MenuItem title='Đối soát vé' route={routes.DoiSoatVe} module='parent' icon={<ListIcon />} />
      <MenuItem
        title='Cài đặt'
        route={routes.CaiDat}
        module='parent'
        icon={<SettingIcon />}
        child={<MenuItem title='Gói dịch vụ' module='child' route={routes.CaiDat_Goi} />}
      />
    </div>
  )
}

export default MenuBar
