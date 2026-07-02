import { useContext } from 'react';
import './ui/Cart.css';
import AppContext from '../../features/_context/AppContext';
import Counter from '../../widgets/counter/Counter';
import type ICartItem from '../../entities/cart/model/ICartItem';

export default function Cart() {
    const { cart } = useContext(AppContext);
    return <div className='row mx-3'>
        <div className='col col-8'>
            <h1>Shopping Cart</h1>
            {cart.length == 0 ? <p>Cart is empty</p> : cart.map(ci => <CartItemView key={ci.product.id} ci={ci} />)}
        </div>
        <div className='col col-4 bg-light'>
            <h2>Order summary</h2>
        </div>

    </div>
}

function CartItemView({ ci }: { ci: ICartItem }) {
    const { cart, setCart } = useContext(AppContext);
    const onQuantityChange = (quantity: number) => {
        if (quantity > 0) {
            ci.quantity = quantity;
            setCart([...cart]);
        }
        else {
            if (confirm("Delete?")) {

            }
        }
    }
    return <div className='row mb-3'>
        <div className='col col-2'><img src={ci.product.imageUrl} className='w-100' alt={ci.product.name} /></div>
        <div className='col col-5' >{ci.product.name}</div>
        <div className='col col-1' >{ci.product.price}</div>
        <div className='col col-3'>
            <Counter initialQuantity={ci.quantity} onChange={onQuantityChange} />
        </div>
        <div className='col col-1'>{ci.product.price * ci.quantity}</div>
    </div>
}