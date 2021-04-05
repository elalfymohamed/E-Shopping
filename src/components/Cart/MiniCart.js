import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
//image
import product_1 from '../../assets/product/product-1.png'

const MiniCart = () => {
    // const [openCart, setOpenCart] = useState(false)
    return (
        <>
            <div className={`mini-cart-wrap open`}>
                <div className='mini-cart__close'>
                    <button type='button' className='close-cart'>
                        close
                        <AiOutlineClose/>
                    </button>
                </div>
                <ul className='mini-cart__products'>
                    <li>
                        <Link to='/' className="image">
                            <img src={product_1} alt="Product"/>
                        </Link>
                        <div className="content">
                            <Link to="/" className="title">Waxon Note Book Pro 5</Link>
                            <span className="price">Price: $295</span>
                            <span className="qty">Qty: 02</span>
                        </div>
                        <button type='button' className="remove">
                            <BsTrash/>
                        </button>
                    </li>
                </ul>

            </div>
            <div className={`cart-overlay visible`} />
        </>
    )
}

export default MiniCart