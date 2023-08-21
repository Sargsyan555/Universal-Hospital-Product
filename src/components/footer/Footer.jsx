import React from 'react'
import './Footer.scss'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FiInstagram} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import img from '../../assets/images/logoBG.png'
export default function Footer() {
  return (
    <footer>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <img src={img} alt="" />
        </div>
        <div className="footer__content__production">
          <h6>ԱՐՏԱԴՐԱՆՔ</h6>
          <ul>
            <li> ՀԵՂՈՒԿՆԵՐ</li>
            <li>ՔՍՈՒՔՆԵՐ</li>
            <li>ՅՈՒՂԵՐ</li>
            <li>ՈԳԵԹՈՒՐՄԵՐ</li>
            <li>ՓՈՇԻՆԵՐ</li>
            <li>ՄԱՇԿԻ ԽՆԱՄՔԻ ՄԻՋՈՑՆԵՐ</li>
          </ul>
        </div>
        <div className="footer__content__contact">
          <h6>ԿԱՊ ՄԵԶ ՀԵՏ</h6>
          <div>
            <p><BsTelephone /><span>Զանգահարեք մեզ: +374 90 000 000</span></p>
            <p><AiOutlineMail /><span> Էլ հասցե: @mail.ru</span></p>
            <p><HiOutlineLocationMarker /><span>Երևան</span></p>
          </div>
      </div>
      <div className="footer__content__networks">
        <h6>ՓՆՏՐԵՔ ՄԵԶ։</h6>
        <div>
          <span><FiInstagram /></span>
          <span><FiTwitter /></span>
          <span><FiFacebook /></span>
        </div>
      </div>
      </div>
      <div className="endline">
          <p>By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են</p>
      </div>
    </footer>
  )
}
