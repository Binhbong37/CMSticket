import { StatusProps } from "../components/StatusTag"

export interface TicketsType {
id: string,
packageName:string,
statusMessage:StatusProps,
useDate:string,
applyDate:string,
gate:string
}