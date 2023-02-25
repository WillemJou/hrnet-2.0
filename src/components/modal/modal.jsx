import './modal.css'
import React from 'react'

export function Modal({ isOpen, onClose, title, subTitle, content }) {
  if (isOpen) {
    return (
      <div className="modal">
        <div className="content">
          <header className="header">
            <h1 className="title">{title}</h1>
            <span className="sub-title">{subTitle}</span>
            <button onClick={onClose} className="btn">
              X
            </button>
          </header>
          <div className="main-content">{content}</div>
          <footer className="footer"></footer>
        </div>
      </div>
    )
  }
}
