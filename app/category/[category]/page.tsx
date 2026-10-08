import { CategoryParams } from "@/app/types";

export default async function CategoryPage({params}: CategoryParams) {
    const {category} = await params;
    console.log(category);
    return (
        <div>page</div>
    )
}
