export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  url?: string;
}

import { asset } from "fresh/runtime"; // see the new version immediately instead of an old one cached in their browser.

export function ProductCard({data}: {data: Product}){
    return (
        <div class="border-2 border-gray-500 rounded-sm p-4 mb-4">
            <img src={asset(data.url || "/placeholder.png")} alt={data.name} width={200} height={200} class="mb-4" />
            <h3 class="text-xl font-bold">{data.name}</h3>
            <p>{data.description}</p>
            <p class="text-lg font-semibold">${data.price.toFixed(2)}</p>
        </div>
    )
}