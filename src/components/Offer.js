import React from 'react'

export default function Offer(props) {
  return (
    <div className='Offer'>
        <div class="btn OfferDetails ">
          <div>{props.code}</div>
          <img src={props.offerUpdate} alt="" />
        </div>
      </div>   
  )
}
