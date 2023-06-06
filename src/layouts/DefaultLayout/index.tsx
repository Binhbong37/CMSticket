import { signOut } from 'firebase/auth'

import { useAppDispatch } from '../../store'
import { setProfile } from '../../store/authenticateSlice'
import { clearAuthInLS } from '../../utils/auth'
import { auth } from '../../firebase';
import { CopyIcon, LogoutIcon } from '../../components/Icons';
import MenuBar from '../components/MenuBar';
import Button from '../../components/Button';
import Header from '../components/Header';
import { setIsAuthenticated } from '../../store/authenticateSlice';

interface Props {
  children: JSX.Element
}

function DefaultLayout({ children }: Props) {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        clearAuthInLS()
        dispatch(setProfile(null))
        dispatch(setIsAuthenticated(false))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='layout-wrapper'>
      <div className='layout-container'>
        <div className='layout-menubar'>
          <MenuBar />
          <div>
            <Button leftIcon={<LogoutIcon />} large onClick={handleLogout}>
              Đăng xuất
            </Button>
            <div className='layout-copy-right'>
              <span>Copyright</span>
              <CopyIcon />
              <span>2020 Alta Software</span>
            </div>
          </div>
        </div>
        <div className='layout-content'>
          <Header />
          <div className='layout-child'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
