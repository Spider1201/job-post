import { useState, useEffect } from 'react'
import './styles/Toast.css'
import { MdClose, MdCheckCircle, MdError, MdInfo } from 'react-icons/md'

function Toast({ message, type = 'info', duration = 3000, onClose }) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <MdCheckCircle />
      case 'error':
        return <MdError />
      case 'info':
        return <MdInfo />
      default:
        return <MdInfo />
    }
  }

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-icon">{getIcon()}</div>
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={onClose}>
        <MdClose />
      </button>
    </div>
  )
}

export default Toast
