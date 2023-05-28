import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  bookingCode: string;
  soVe: number;
  tenSuKien: string;
  ngaySuDung: string;
  ngayXuatVe: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'STT',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Booking code',
    dataIndex: 'bookingCode',
    key: 'bookingCode',
  },
  {
    title: 'Số vé',
    dataIndex: 'soVe',
    key: 'soVe',
  },
  {
    title: 'Tên sự kiện',
    dataIndex: 'tenSuKien',
    key: 'tenSuKien',
  },
  {
    title: 'Tình trạng sử dụng',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 10 ? 'geekblue' : 'green';
          if (tag === 'Hết hạn') {
            color = 'red';
          }
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Ngày sử dụng',
    dataIndex: 'ngaySuDung',
    key: 'ngaySuDung',
  },
  {
    title: 'Ngày xuất vé',
    dataIndex: 'ngayXuatVe',
    key: 'ngayXuatVe',
  },
  {
    title: 'Cổng check-in',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        Cổng 1
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    bookingCode: 'ALTOJMNB',
    soVe: 123456789034,
    tenSuKien: "Hội chợ triển lãm tiêu dùng 2021",
    ngaySuDung: '14/04/2021',
    ngayXuatVe: '07/04/2021',
    tags: ['Đã sử dụng'],
  },
  {
    key: '2',
    bookingCode: 'ALTOJMNB',
    soVe: 236784631642,
    tenSuKien: "Hội chợ triển lãm tiêu dùng 2021",
    ngaySuDung: '01/06/2023',
    ngayXuatVe: '28/05/2023',
    tags: ['Chưa sử dụng'],
  },
  {
    key: '3',
    bookingCode: 'ALTQTYJH',
    soVe: 487621489474,
    tenSuKien: "Hội chợ triển lãm tiêu dùng 2021",
    ngaySuDung: '01/06/2022',
    ngayXuatVe: '20/05/2021',
    tags: ['Hết hạn'],
  },
  {
    key: '4',
    bookingCode: 'ALTQTYJH',
    soVe: 487621489474,
    tenSuKien: "Hội chợ triển lãm tiêu dùng 2021",
    ngaySuDung: '01/06/2022',
    ngayXuatVe: '20/05/2021',
    tags: ['Hết hạn'],
  },
  {
    key: '5',
    bookingCode: 'ALTQTYJH',
    soVe: 487621489474,
    tenSuKien: "Hội chợ triển lãm tiêu dùng 2021",
    ngaySuDung: '01/06/2022',
    ngayXuatVe: '20/05/2021',
    tags: ['Hết hạn'],
  },
  {
    key: '6',
    bookingCode: 'ALTQTYJH',
    soVe: 487621489474,
    tenSuKien: "Hội chợ triển lãm tiêu dùng 2021",
    ngaySuDung: '01/06/2022',
    ngayXuatVe: '20/05/2021',
    tags: ['Hết hạn'],
  },
  {
    key: '7',
    bookingCode: 'ALTQTYJH',
    soVe: 487621489474,
    tenSuKien: "Hội chợ triển lãm tiêu dùng 2021",
    ngaySuDung: '01/06/2022',
    ngayXuatVe: '20/05/2021',
    tags: ['Hết hạn'],
  },
];

const TableSuKien: React.FC = () => <Table columns={columns} dataSource={data} />;

export default TableSuKien;