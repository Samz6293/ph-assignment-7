"use client";
import ProductCard from "@/app/components/ProductCard";
import { formatter } from "@/app/constants/NumberAndUnits";
import { Product } from "@/app/types";
import { Select, ListBox, Key, Label } from "@heroui/react";
import { useState } from "react";

export default function ProductGrid({ products }: { products: Product[] }) {
    const [sort, setSort] = useState<Key | null>("default");
    const sorted = [...products];
    if (sort === "asc") sorted.sort((a, b) => a.today - b.today);
    if (sort === "desc") sorted.sort((a, b) => b.today - a.today);
    return (
        <div className="space-y-10">

            {/* total and sort */}
            <div className="flex flex-col gap-4 justify-between items-start
            sm:flex-row sm:items-center">
                <p className="text-base-content/70">মোট {formatter.format(products.length)}টি পণ্য দেখানো হচ্ছে</p>
                 <Select
                    className="flex-row-reverse items-center gap-4 
                    sm:flex-row"
                    value={sort}
                    onChange={(value) => setSort(value as Key | null)}
                >
                    <Label className="text-base-content/70">সাজান</Label>
                    <Select.Trigger className={" border border-base-content/70 w-45"}>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox className="">
                            <ListBox.Item id="default" textValue="ডিফল্ট">
                                ডিফল্ট
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="asc" textValue="দাম: কম থেকে বেশি">
                                দাম: কম থেকে বেশি
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="desc" textValue="দাম: বেশি থেকে কম">
                                দাম: বেশি থেকে কম
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>
            </div>

            {/* products */}
            <div className="grid grid-cols-1 gap-4
            md:grid-cols-2 lg:grid-cols-3">
                {sorted.map((product: Product) => <ProductCard key={product.id} product={product}></ProductCard>)}
            </div>
        </div>
    )
}
