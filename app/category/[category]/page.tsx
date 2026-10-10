import { getCategoryDetails } from "@/app/constants/fetch";
import { formatter } from "@/app/constants/NumberAndUnits";
import { CategoryParams, Product } from "@/app/types";
import ProductGrid from "../components/ProductGrid";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: CategoryParams) {
    const { category } = await params;
    const categoryDetails: Product[] = await getCategoryDetails(category);
    if (categoryDetails.length === 0 || !categoryDetails) {
        notFound();
    }
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

            <ProductGrid products={categoryDetails} />
        </div>
    )
}
