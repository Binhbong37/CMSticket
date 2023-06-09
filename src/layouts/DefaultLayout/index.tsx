import { CopyIcon } from '../../components/Icons';
import MenuBar from '../components/MenuBar';
import Header from '../components/Header';

interface Props {
  children: JSX.Element
}
function DefaultLayout({ children }: Props) {

  return (
    <div className='layout-wrapper'>
      <div className='layout-container'>
        <div className='layout-menubar'>
          <MenuBar />
          <div className='layout-copy-right'>
            <span>Copyright</span>
            <CopyIcon />
            <span>2020 Alta Software</span>
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
