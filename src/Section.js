import React from 'react'
import Card from './Card'


export default function Section({refer,cartCount}) {
    return (
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    refer.map((item,index) =>(
                            <Card key={index} Image={item.img} Product={item.product} Badge={item.badge} Price={item.price} OldPrice={item.oldPrice} Star={item.star} cartCount={cartCount} />
                    ))
                }
            </div>
        </div>
    </section>
    )
}
