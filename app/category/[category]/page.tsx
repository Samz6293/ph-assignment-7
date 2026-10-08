import ProductCard from "@/app/components/ProductCard";
import { formatter } from "@/app/constants/NumberAndUnits";
import { CategoryParams, Product } from "@/app/types";

const getCategoryDetails = async (category: string) => {
    const response = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${category}`);
    const data = await response.json();
    return data;
}

export default async function CategoryPage({ params }: CategoryParams) {
    const { category } = await params;
    const categoryDetails: Product[] = await getCategoryDetails(category);
    return (
        // wrapper
        <div className="content-box space-y-10">
            {/* top header */}
            <div className="flex items-center gap-3 bg-base-100 border border-base-300 rounded-2xl p-5">
                <p className="text-4xl">{categoryDetails[0].categoryIcon}</p>
                <div className="flex flex-col">
                    <h2 className="text-2xl">{categoryDetails[0].categoryNameBn}</h2>
                    <p className="text-base-content/70">{formatter.format(categoryDetails.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>

            {/* total and sort */}
            <div className="flex justify-between">
                <p className="text-base-content/70">মোট {formatter.format(categoryDetails.length)}টি পণ্য দেখানো হচ্ছে</p>
                <p>TODO: sort</p>
            </div>

            {/* products */}
            <div className="grid grid-cols-1 gap-4
            md:grid-cols-2 lg:grid-cols-3">
                {categoryDetails.map((product: Product) => <ProductCard key={product.id} product={product}></ProductCard>)}
            </div>

        </div>
    )
}
