import React from "react";

const GiftCardsPage = () => { 
    return (
        <section className="giftcards">
            <h1>Shop Gift Cards</h1>
            <div className="container">
                <div className="row">
                    <h3>Birthdays</h3>
                    <div className="col-md-4">
                        <div className="image-container">
                            <img src="/gift_card_images/21fa6215-27c5-422a-aa63-20cefd83ea4b_1.d84d0c260542c65ec4aead7dc03cfc39.png" alt="Birthday-gift-card-image" />
                        </div>
                        <button className="btn_giftCard">Get your gift card</button>
                    </div>
                    <div className="col-md-4">
                        <div className="image-container">
                            <img src="/gift_card_images/bday-image2.png" alt="Birthday-gift-card-image" />
                        </div>
                        <button className="btn_giftCard">Get your gift card</button>
                    </div>
                    <div className="col-md-4">
                        <div className="image-container">
                            <img src="/gift_card_images/bday-image3.png" alt="Birthday-gift-card-image" />
                        </div>
                        <button className="btn_giftCard">Get your gift card</button>
                    </div>
                </div>
               
                <div className="row">
                    <h3>Appreciations</h3>
                    <div className="col-md-4">
                        <div className="image-container">
                            <img src="/gift_card_images/thanks_black.jpg" alt="Thank_you-gift-card-image" />
                        </div>
                        <button className="btn_giftCard">Get your gift card</button>
                    </div>
                    <div className="col-md-4">
                        <div className="image-container">
                            <img src="/gift_card_images/thanks-red.jpg" alt="Thank_you-gift-card-image" />
                        </div>
                        <button className="btn_giftCard">Get your gift card</button>
                    </div>
                    <div className="col-md-4">
                        <div className="image-container">
                            <img src="/gift_card_images/thanks_blue.jpg" alt="Thank_you-gift-card-image" />
                        </div>
                        <button className="btn_giftCard">Get your gift card</button>
                    </div>
                </div>
            </div>
        </section>
     
    )
}

export default GiftCardsPage;