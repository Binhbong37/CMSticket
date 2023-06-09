import * as yup from 'yup'

export const ticketSchema = yup.object({
  packageName: yup.string().required('Vui lòng nhập trường này'),
  type: yup.string().required('Vui lòng nhập trường này'),
  gate: yup.string().required('Vui lòng nhập trường này'),
  statusMessage: yup.string().required('Vui lòng nhập trường này')
})

export const packageSchema = yup.object({
  name: yup.string().required('Vui lòng nhập trường này'),
  statusMessage: yup.string().required('Vui lòng nhập trường này')
})
