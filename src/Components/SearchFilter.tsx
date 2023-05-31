import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter } from 'react-icons/fi'

type FilterProps = {
  quanlyve: boolean,
  doisoatve: boolean
}

const SearchFilter = ({ quanlyve, doisoatve }: FilterProps) => {
  return (
    <div className='search-filter'>
      <div className='search'>
        <input type="text" placeholder='Tìm bằng số vé' />
        <AiOutlineSearch />
      </div>
      {quanlyve && <div className='filter'>
        <button className='btn btn-filter'>
          <FiFilter /> Lọc vé
        </button>
        <button className="btn btn-filter">Xuất file (.csv)</button>
      </div>}
      {doisoatve && <div className=''>
        <button className='btn btn-ds'>Chốt đối soát</button></div>}
    </div>
  )
}

export default SearchFilter