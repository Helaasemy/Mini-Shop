/** @jsx jsx */
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { jsx, Styled } from "theme-ui";

import CardIcon from "../../images/cart.svg";
import Arrow from "../../images/arrow_up.svg";
import dumy from "../../images/products/dumy.svg";

import "./cart.css";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [open, setOpen] = useState(false);
    console.log(cart);
    return (
        <div>
            {open && <div className="blur" onClick={() => setOpen(prevOpen => !prevOpen)}></div>}
            <div className="cart" onClick={() => setOpen(prevOpen => !prevOpen)}>
                <img
                    src={CardIcon}
                    alt='cart'
                    className="icon_card"
                />
                <img src={Arrow} className={!open ? "arrow_up" : ""} />
                <span className="badge">{cart.length}</span>
            </div>
            {open &&
                <div className="items">
                    {cart.length == 0 ? <div> Your cart is Empty</div> :
                        cart.map((item) =>
                            <>
                                <div className="item">
                                    <img src={dumy} alt={item.data.frontmatter.name} className="cart_dumy" />
                                    <Styled.h6>{item.data.frontmatter.name}</Styled.h6>
                                    <Styled.h6>${item.data.frontmatter.price}</Styled.h6>
                                </div>
                            </>)
                    }
                    {cart.length != 0 &&  
                    <button sx={{ variant: "button.primary", mx: ["auto", null, 0], borderRadius: 0, }}>
                     Submit
                    </button>}

                </div>
            }
        </div>
    )
}
export default Cart