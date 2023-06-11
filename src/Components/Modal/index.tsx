import classNames from 'classnames/bind'
import styles from '../../assets/css/components/Modal.module.css'
import React from 'react'

const cx = classNames.bind(styles)

interface Props {
  children: React.ReactElement
  title: string
  oncloseModal: () => void
}

function Modal({ children, title, oncloseModal }: Props) {

  const clickedModal = (e: any) => {
    if (e.target.className === "Modal_wrapper__6EjzC") {
      oncloseModal()
    }
  }

  return (
    <div className={cx('wrapper')}
      onClick={clickedModal}
    >
      <div className={cx('container')}

      >
        <div className={cx('title')}>{title}</div>
        {children}
      </div>
    </div>
  )
}

export default Modal