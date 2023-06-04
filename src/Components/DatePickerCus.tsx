import { DatePicker } from "antd";
import dayjs from 'dayjs';

const dateFormat = 'YYYY/MM/DD';

const DatePickerCus = () => {
  return (
    <DatePicker defaultValue={dayjs('2024/01/01', dateFormat)} format={dateFormat}
      style={{
        border: "1px solid #E6E0E0",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "17px",
        padding: "8px 1.2rem"
      }}
    />
  )
}

export default DatePickerCus