import './Product.css'
import React from 'react'

const Product = (props) => {
    return (
        <div className='card'>
            <figure>
                <img className='disp' src={props.prod.image} alt="" />
            </figure>
            <h2 className='title'>{props.prod.title}</h2>
            <h1 className="price">{props.prod.price}&#36;</h1>
            <p className='desc'>{props.prod.description}</p>
            <p className='cat'>{props.prod.category}</p>
            <p className='rate'>Rating: {props.prod.rating.rate} <span>({props.prod.rating.count})</span> </p>
        </div>
    )
}

export default Product
