import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter } from 'react-icons/fi'

const SearchFilter = () => {
  return (
    <div className='search-filter'>
      <div className='search'>
        <input type="text" placeholder='Tìm bằng số vé' />
        <AiOutlineSearch />
      </div>
      <div className='filter'>
        <button className='btn btn-filter'>
          <FiFilter /> Lọc vé
        </button>
        <button className="btn btn-filter">Xuất file (.csv)</button>
      </div>
    </div>
  )
}

export default SearchFilter