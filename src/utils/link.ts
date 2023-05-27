import { IconType } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { BsTicket } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";

interface Icons {
  id: number,
  text:string,
  path:string,
  icon: IconType
}

const links:Icons[] = [
  { id: 1, text: 'Trang chủ', path: '/', icon: AiOutlineHome },
  {id:2, text:'Quản lý vé', path:'/quan-ly-ve', icon:BsTicket},
  {id:3, text:'Đối soát vé', path:'/doi-soat-ve', icon:TbFileInvoice},
  {id:4, text:'Cài đặt', path:'/cai-dat', icon:AiOutlineSetting},
];

export default links;


