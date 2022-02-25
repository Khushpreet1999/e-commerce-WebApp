import React from 'react';
import Itemcard from './Itemcard';
import data from "./data";

const Home = () => {
    console.warn(data.productData);
    return (
        <div>
            <br></br>
        
                    <h2 className="section-heading text-uppercase">Our Products</h2>
                    <h3 className="section-subheading text-services" style={{fontSize: '20px'}}>Available online</h3>
                
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index)=> {
                        return(
                            <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                        )

                    })}
                   
                </div>
            </section>
        </div>
    );
};

export default Home;