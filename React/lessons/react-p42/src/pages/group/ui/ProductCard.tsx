import { Link, useNavigate } from "react-router-dom";
import type IProductBrief from "../../../entities/group/model/IProductBrief";
import './GroupCard.css';
import AppContext from "../../../features/_context/AppContext";
import { useContext } from "react";

export default function ProductCard({ productBrief }: { productBrief: IProductBrief }) {
    const { cart, setCart } = useContext(AppContext);
    const navigate = useNavigate();

    const addToCartClick = () => {
       setCart({
        cartItems: [...cart.cartItems, {
            product: productBrief,
            quantity: 1,
            price: productBrief.price
        }],
        price: 0
       })
    };

    const isInCart = Boolean(cart.cartItems.find(ci => ci.product.id == productBrief.id))

    return <div className="col">
        <div className="card h-100">
            <Link to={`/group/${productBrief.slug}`} className="nav-link" >
                <div className="card-img-top bg-body d-flex justify-content-center p-3"
                    style={{ aspectRatio: 1.2, width: "100%" }} >
                    <img src={productBrief.imageUrl} className="card-img-top" alt={productBrief.name} />
                </div>
            </Link>
            <div className="card-body">
                <h5 className="card-title">{productBrief.name}</h5>
                <p className="card-text">{productBrief.description}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <div>{productBrief.actionPrice ?
                    <div>
                        <div><b className='strike-price'>₴{productBrief.price.toFixed(2)}</b></div>
                        <b>₴{productBrief.actionPrice.toFixed(2)}</b>
                    </div>
                    : <b>₴{productBrief.price.toFixed(2)}</b>}
                </div>
                {isInCart
                    ? < button className='btn btn-outline-success' onClick={() => navigate('/cart')}>
                        <i className="bi bi-cart-check"></i>
                    </button>
                    : < button className='btn btn-outline-success' onClick={addToCartClick}>
                        <i className="bi bi-cart"></i>
                    </button>
                }

            </div>
        </div>
    </div >
}