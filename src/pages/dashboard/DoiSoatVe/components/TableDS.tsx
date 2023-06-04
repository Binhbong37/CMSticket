import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  soVe: number;
  ngaySuDung: string;
  tenLoaiVe: string;
  congCheck: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'STT',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Số vé',
    dataIndex: 'soVe',
    key: 'soVe',
  },
  {
    title: 'Ngày sử dụng',
    dataIndex: 'ngaySuDung',
    key: 'ngaySuDung',
  },
  {
    title: 'Tên loại vé',
    dataIndex: 'tenLoaiVe',
    key: 'tenLoaiVe',
  },
  {
    title: 'Cổng check-in',
    key: 'congCheck',
    render: (_, record) => (
      <Space size="middle">
        Cổng 1
      </Space>
    ),
  },
  {
    title: '',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <i>Chưa đối soát</i>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    soVe: 123456789034,
    ngaySuDung: '14/04/2021',
    tenLoaiVe: 'Vé cổng',
    congCheck: 'Cổng 1',
  },
  {
    key: '2',
    soVe: 123456789034,
    ngaySuDung: '14/04/2021',
    tenLoaiVe: 'Vé cổng',
    congCheck: 'Cổng 1',
  },
  {
    key: '3',
    soVe: 123456789034,
    ngaySuDung: '14/04/2021',
    tenLoaiVe: 'Vé cổng',
    congCheck: 'Cổng 1',
  },
  {
    key: '4',
    soVe: 123456789034,
    ngaySuDung: '14/04/2021',
    tenLoaiVe: 'Vé cổng',
    congCheck: 'Cổng 1',
  },
  {
    key: '5',
    soVe: 123456789034,
    ngaySuDung: '14/04/2021',
    tenLoaiVe: 'Vé cổng',
    congCheck: 'Cổng 1',
  },
];

const TableDS: React.FC = () => <Table columns={columns} dataSource={data} />;

export default TableDS;