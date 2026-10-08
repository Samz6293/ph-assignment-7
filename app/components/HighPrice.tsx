import { Product } from "../types";
import ProductCard from "./ProductCard";

export default async function HighPrice() {
    const response = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const data = await response.json();
    const risers = data.filter((product: Product) => product.change.dir === "up")
    .sort((a: Product,b: Product) => b.change.pct - a.change.pct)
    .slice(0,6);

    return (
        <section className="content-box flex flex-col gap-2">
            <h2><span className="text-error">▲</span> আজ দাম বেড়েছে</h2>
            <div className="grid grid-cols-1 gap-4
            md:grid-cols-2 lg:grid-cols-3">
                {risers.map((product: Product) => <ProductCard key={product.id} product={product}></ProductCard>)}
            </div>
        </section>
    )
}
