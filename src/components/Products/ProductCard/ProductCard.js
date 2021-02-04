/** @jsx jsx */
import React, { useContext } from "react"
import { Link } from "gatsby"

import { jsx } from "theme-ui"
import { CartContext } from '../../../context/CartContext';

import dummy from "../../../images/products/dumy.svg"
import plus from "../../../images/products/plus.svg"

import "./ProductCard.css"


const ProductCard = ({ title, description, link, data }) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const product = { data };
    setCart(currentState => [...currentState, product]);
  }
  return (
    <>
      <div className="card" >
        <div className="img">
          <img src={dummy} alt="product" />
        </div>
        <Link className="container" to={link} >
          <h4 className="title">{title}</h4>
          <p className="description">{description}</p>
        </Link>
        <img src={plus} alt="add to card" className="icon" onClick={addToCart} />
      </div>
    </>
  )
}

export default ProductCard
