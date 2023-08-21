import React from 'react'
import './Servises.scss'
import servises1 from '../../assets/images/servises.png'
import servises2 from '../../assets/images/rectangle.png'
export default function About() {
  return (
    <section className='servises'>
    <div className='servisesPartOne'>
      <div className="text">
             <h3>ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ </h3>
              <p>
              Մենք կպատրաստենք արտադրանք ձեր իսկ լոգոյով։
                orem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, 
                 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                 sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing 
                  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                   1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
                   </p>
              <button><p className="btn_text">ՊԱՏՎԻՐԵԼ ԶԱՆԳ</p></button>
             </div>
            <div className="img">
                <img src={servises2} alt="" />
            </div>
            
      </div>
      <div className='servisesPartTwo'>
            <div className="img">
                <img src={servises1} alt="" />
            </div>
            <div className="text">
             <h3>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h3>
              <p>
              Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,               </p>
              <button><p className="btn_text">ՊԱՏՎԻՐԵԼ ԶԱՆԳ</p></button>
             </div>
      </div>

    </section>
  )
}
