import { getProducts } from "../constants/fetch";
import { formatter } from "../constants/NumberAndUnits";
import { Product } from "../types";
import ProductCard from "./ProductCard";

export default async function AllProducts() {
    const data = await getProducts();

    return (
        <section id="all-products" className="content-box flex flex-col gap-2 scroll-mt-30">
            <h2>সব পণ্য</h2>
            <p className="text-base-content/70">মোট {formatter.format(data.length)}টি পণ্য দেখানো হচ্ছে</p>
            <div className="grid grid-cols-1 gap-4
            md:grid-cols-2 lg:grid-cols-3">
                {data.map((product: Product) => <ProductCard key={product.id} product={product}></ProductCard>)}
            </div>
        </section>
    )
}
