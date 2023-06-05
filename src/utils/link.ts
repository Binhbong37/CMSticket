

import { HomeIcon, TicketIcon, SettingIcon, ListIcon } from "../Components/Icons";

interface Icons {
  id: number,
  text:string,
  path:string,
  icon: any
}

const links:Icons[] = [
  { id: 1, text: 'Trang chủ', path: '/', icon: HomeIcon},
  {id:2, text:'Quản lý vé', path:'/quan-ly-ve', icon:TicketIcon},
  {id:3, text:'Đối soát vé', path:'/doi-soat-ve', icon:ListIcon},
  {id:5, text:'Cài đặt', path:'/cai-dat', icon:SettingIcon},
];

export default links;


