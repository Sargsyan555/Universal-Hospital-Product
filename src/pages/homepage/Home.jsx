import React from 'react'
import Section from './Sections'
import data from '../../data.json'
import imageFirstSection from '../../assets/images/sectionOne.png'
import imageSecondSection from '../../assets/images/rectangle.png'
import bacgroundImage from '../../assets/images/sectionOneC.png'
import Products from './Products'
import Friends from '../friends/Friends'
import ContactUs from '../contactUs/ContactUs'
import { FaUserFriends } from 'react-icons/fa'
export default function Home() {
  const firstInArmenia  = {
    header : 'ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ',
    text:  'Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;',
    buttonText:'ԿԱՐԴԱԼ ԱՎԵԼԻՆ',
    img:imageFirstSection,
    imgC: bacgroundImage
  }
  const medicalSupplies  = {
    header : 'ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ',
    text:  'Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ',
    buttonText:'ԿԱՐԴԱԼ ԱՎԵԼԻՆ',
    img:imageSecondSection,
    imgC: bacgroundImage
  }
  return (
    <div className='container Home'>
        <Section data={firstInArmenia} /> 
        <Products />
        <Section data={medicalSupplies} />
        <Friends />
        <ContactUs />
    </div>
  )
}
