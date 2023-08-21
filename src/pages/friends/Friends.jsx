import React, { useState } from 'react'
import './Friends.scss'
import data from '../../friends.json'
import img from '../../assets/images/ogimage.png'
export default function Friends() {
    let firstShowCount = data.length > 6 ? 6 : data.length
  const [isShowBtn, setIsShowBtn] = useState(data.length > 6) 
  const [friends, setFriends] = useState(data.slice(0, firstShowCount))
  const showAllFriends = () => {
    setFriends(data)
    setIsShowBtn(false)
  }
  return (
    <div className='friends'>
        <div className="friends_header">
            <h3>ԳՈՐԾԸՆԿԵՐՆԵՐ</h3>
        </div>
        <ul className="friends_names">
            {friends.map((item) => {
                return(
                    <li key={item.id}><img src={img} alt="" /></li>
                )
            })}
        </ul>
        {isShowBtn && <div className="friends_button">
            <button onClick={showAllFriends}><p className='btn_text'>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</p></button>
        </div>}
    </div>
  )
}
