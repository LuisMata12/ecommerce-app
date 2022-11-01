import { useFetch } from "../hooks/useFetch"
import { Card } from "../layauts/card"

import '../css/styles.css'
import { Carusel } from "../layauts/Carusel"
import { Category } from "../layauts/Category"




export const Main = () => {
  const { products,hasError,isLoading }= useFetch('https://ecomerce-master.herokuapp.com/api/v1/item')
  const{isActive}=!!products && products[1];
  console.log(products)
  return (
    <>
        <div className="d-flex justify-content-center" >
            <div style={{width:'93%'}}>
                <Carusel/>
                <div className="d-flex justify-content-center">
                    <h1>Buy for category</h1>
                </div>
                <Category img_category='https://media.admagazine.com/photos/618a668ab94700461d6213eb/master/w_1600%2Cc_limit/68287.jpg'/>
                <div className="d-flex justify-content-center ">
                    <h2>Ofertas del dia</h2>
                </div>
                {isLoading
                    ?<h1>Loading...</h1>
                    :<Card products={products}/>}
            </div>
        </div>
    </>
  )
}
