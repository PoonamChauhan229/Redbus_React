import React from 'react'
import rbfirst from '../assets/rbfirst.png'
export default function Searchbus() {
  return (
    <>
      <div className='banner'>
        <div className="input-group mb-3 container searchInput">
          <span class="input-group-text" id="basic-addon1">||</span>
          <input type="text" class="form-control" placeholder="FROM" aria-label="Username" />
          <span class="input-group-text">||</span>
          <input type="text" class="form-control" placeholder="TO" aria-label="Server" />
          <span class="input-group-text">||</span>
          <input type="date" class="form-control" placeholder="Server" aria-label="Server" />
          <button type="button" class="btn btn-primary" style={{ backgroundColor: "#d84f57", border: "none" }}>Search Buses</button>
        </div>

        <div className='Offer bannerOffer'>
          <div class="btn OfferDetails bannerOfferdetails">
            <div className='center'>
              <div className='firstDiv'>
                <img src={rbfirst} alt="" height="120" width="200" />
              </div>
              <div className='secondDiv'>
                <div>SAVE UPTO RS 300* ON YOUR BUS TICKETS.</div>
                <div>Book your favourite seat now.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
