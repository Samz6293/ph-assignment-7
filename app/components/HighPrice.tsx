import { Suspense } from "react";
import { getProducts } from "../constants/fetch";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import { SingleShimmer } from "./ProductSkeleton";

export default async function HighPrice() {
    const data = await getProducts();
    const risers = data.filter((product: Product) => product.change.dir === "up")
    .sort((a: Product,b: Product) => b.change.pct - a.change.pct)
    .slice(0,6);

    return (
        <section className="content-box flex flex-col gap-2">
            <h2><span className="text-error">▲</span> আজ দাম বেড়েছে</h2>
            <Suspense fallback={<SingleShimmer/>}>
            <div className="grid grid-cols-1 gap-4
            md:grid-cols-2 lg:grid-cols-3">
                {risers.map((product: Product) => <ProductCard key={product.id} product={product}></ProductCard>)}
            </div>
            </Suspense>
        </section>
    )
}
