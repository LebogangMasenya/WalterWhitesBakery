import { Product } from "../components/ProductCard"
interface CartProps {
    items: Product[];
}

export default function Cart({items}: {items: CartProps}) {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <p>Your cart is currently empty.</p>
        </div>
    )
}