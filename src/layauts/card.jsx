import React from 'react'

import '../css/poduct.mudule.css'

export const Card = ({products}) => {
    const firsthThrePoducts  = products.slice(0, 20);
  return (
    <>
        <ul className='productsGrid'>
            {
                firsthThrePoducts.map((product)=>{
                    return(
                        <li key={product.product_name} className='productCard'>
                            <img src={product.image} className='imgProduct' alt={product.product_name} />
                            <div className='productTitle'>{product.product_name}</div>
                            <div className='price'>${product.price}</div>
                            <div className='productDescription'>{product.description}</div>
                        </li>
                    )
                })
            }
        </ul>
    </>
  )
}
