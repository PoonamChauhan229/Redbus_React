import React from 'react'
import Offer from './Offer'
import rbtravel from '../assets/rbtravel.png'
import rbsummer from '../assets/rbsummer.png'
import rbfirst from '../assets/rbfirst.png'
import rbslice from '../assets/rbslice.png'
import rbguidelines from '../assets/rbguidelines.png'

export default function DisplayOffer() {
    return (
        <>
            {/* <div className='d-flex justify-content-between'>
        <Offer offerUpdate={rbtravel} code="Use CodeRB Travel10"/>
        <Offer offerUpdate={rbsummer} code="Save up to Rs 100 on bus tickets"/>
        <Offer offerUpdate={rbfirst} code="Save up to Rs 300 on bus tickets"/>
        <Offer offerUpdate={rbguidelines} code="Statewise Guidelines"/>
        <Offer offerUpdate={rbslice} code="Flat Rs.300 cashback for first time slice users."/>
    </div> */}

            <div id="carouselExampleControls" class=" carouselHeader carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner carouselDiv">
                    <div class=" carouselSubitem carousel-item active">
                        <div className='d-flex'>
                            <Offer offerUpdate={rbtravel} code="Use CodeRB Travel10" />
                            <Offer offerUpdate={rbsummer} code="Save up to Rs 100 on bus tickets" />
                            <Offer offerUpdate={rbfirst} code="Save up to Rs 300 on bus tickets" />
                        </div>
                    </div>
                    <div class=" carouselSubitem carousel-item">
                        <div className='d-flex'>
                            <Offer offerUpdate={rbguidelines} code="Statewise Guidelines" />
                            <Offer offerUpdate={rbslice} code="Flat Rs.300 cashback for first time slice users." />
                        </div>
                    </div>
                </div>
                <button class="carouselbuttonleft carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>

    )
}
