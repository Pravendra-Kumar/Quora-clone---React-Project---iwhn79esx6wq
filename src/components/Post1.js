import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './Post1.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RepeatIcon from '@material-ui/icons/Repeat';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Post() {
  const [vote, setVote]= useState(28);
  return (
    <div className='post'>
       <div className='post__info'>
           <Avatar sx={{ width: 30, height: 30 }}/>
           <h5>Sk Sharma</h5>
           <small>1.15PM 2Weaks ago </small>
       </div>
       <div className='post__body'>
            <div className='post__question'>
               <p>How to Apply ATM Card?</p>
               <button className='post__btnAnswer'>Answer</button>
            </div>
            <div className='post__answer'>
                <p></p>
            </div>
            <img src='https://qph.cf2.quoracdn.net/main-qimg-7fad531ab98513b4b9b4989814ebb520-pjlq' alt=''/>
       </div>
       <div className='post__footer'>
           <div className='post__footerAction'>
          
           
                <span onClick={()=>setVote(vote+1)}><ArrowUpwardIcon/></span>
                <span>{vote}</span>
                <span onClick={()=>setVote(vote-1)}><ArrowDownwardIcon/></span>
                
           </div>
           <RepeatIcon/>
           <ChatBubbleOutlineIcon/>
           <div className='post__footerLeft'>
               <ShareIcon/>
               <MoreHorizIcon/>
           </div>
       </div>
    </div>
  )
}

export default Post