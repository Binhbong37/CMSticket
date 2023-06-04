import Box from '../../../Components/Box';
import '../../../assets/css/doiSoatVe.css'
import SearchFilter from '../../../Components/SearchFilter';
import TableDS from './components/TableDS';
import FilterDS from './components/FilterDS';

const DoiSoatVe = () => {
  return (
    <div>
      <div className='doisoatBox'>
        <Box style={{ width: "70%" }}>
          <h2 className='title'>Đối soát vé</h2>
          <SearchFilter quanlyve={false} doisoatve={true} />
          <TableDS />
        </Box>
        <Box style={{ width: "30%" }}>
          <h2>Lọc vé</h2>
          <FilterDS />
        </Box>
      </div>
    </div>
  )
}

export default DoiSoatVe