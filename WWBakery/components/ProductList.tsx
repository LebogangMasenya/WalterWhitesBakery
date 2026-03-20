
import { ProductCard } from "./ProductCard";
import { type Product } from "./ProductCard";

export function ProductList() {

    const productImgs = [
        "/deva-williamson.jpg",
        "/heather-barnes.jpg",
        "/kilyan-sockalingum.jpg",
        "/kirsten-drew.jpg",
        "/lore-schodts.jpg",
        "/mae-mu.jpg",
        "/ulysse-pointcheval.jpg",
    ]
    const products: Product[] = productImgs.map((img, index) => ({
        id: crypto.randomUUID(),
        name: `Product ${index + 1}`,
        description: `Description for ${`Product ${index + 1}`}`,
        price: Math.floor(Math.random() * 100) + 1,
        url: img
    }));

    return (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
                <ProductCard key={product.id} data={product} />
            ))}
        </div>
    )
}