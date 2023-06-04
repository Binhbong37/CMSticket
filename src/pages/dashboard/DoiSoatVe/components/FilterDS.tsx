import '../../../../assets/css/pages/DoiSoatVe/componets/FilterDS.css'

const FilterDS = () => {
  return (
    <form>
      <div className='form-group'>
        <h3>Tình trạng đối soát</h3>
        <div className='input-radio'>
          <div className=''>
            <label htmlFor="all">
              <input type='radio' name='tinhTrang' id='all' /> Tất cả
            </label>
          </div>

          <div className=''>
            <label htmlFor="done">
              <input type='radio' name='tinhTrang' id='done' />  Đã đối soát
            </label>
          </div>

          <div className=''>
            <label htmlFor="notCheck">
              <input type='radio' name='tinhTrang' id='notCheck' checked />  Chưa đối soát
            </label>
          </div>



        </div>

      </div>

      <div className='form-group'>
        <h3>Loại vé</h3>
        <select>
          <option value="1">Vé cổng</option>
          <option value="2">Tất cả</option>
          <option value="1">Vé chui</option>
        </select>

      </div>
    </form>
  )
}

export default FilterDS