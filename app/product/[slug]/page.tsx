import { getProducts } from "@/app/constants/fetch";
import { Product, ProductDetailsParams } from "@/app/types";

export default async function ProductDetailsPage({ params }: ProductDetailsParams) {
    const {slug} = await params;
    const data = await getProducts();
    const filteredProduct: Product[] = data.filter((product: Product) => product.slug === slug);
    const product: Product = filteredProduct[0];

    return (
        <div>{product.nameBn}</div>
    )
}
