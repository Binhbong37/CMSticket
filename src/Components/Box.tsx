import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode,
  [key: string]: any;
}

const Box = ({ children, ...props }: Props) => {
  return (
    <div className='box-container' {...props}>
      {children}
    </div>
  )
}

export default Box