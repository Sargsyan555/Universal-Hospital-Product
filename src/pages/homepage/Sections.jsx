import React from 'react'
import './Section.scss'
export default function Section({data}) {
  return (
    <section className='presentation'>
        <div className='presentation__written'>
            <h3>{data.header}</h3>
            <p className='presentation__written__text'>{data.text}</p>
            <button><p className='btn_text'>{data.buttonText}</p></button>
        </div>
        <div className='presentation__image'>
            <div className='presentation__image__employee'>
              <img src={data.img} alt="" />
            </div>
        </div>
    </section>
  )
}
