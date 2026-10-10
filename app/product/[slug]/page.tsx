import { getProducts } from "@/app/constants/fetch";
import { formatter, unitBn } from "@/app/constants/NumberAndUnits";
import { Market, Product, ProductDetailsParams, Unit } from "@/app/types";
import { Table } from "@heroui/react";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({ params }: ProductDetailsParams) {

    const { slug } = await params;
    const data = await getProducts();
    const product: Product = data.find((p: Product) => p.slug === slug);
    if(!product) notFound();

    //data
    const priceDifference = product.today - product.yesterday;
    const minPrice = Math.min(...product.markets.map(price => price.min));
    const maxPrice = Math.max(...product.markets.map(price => price.max));

    // adding average of all bazars first then finding true average
    const avgPrice = Math.round(product.markets.reduce((acc: number, curr: Market) =>
        (acc + (curr.min + curr.max) / 2), 0) / product.markets.length);

    return (
        // wrapper
        <div className="content-box flex flex-col gap-6">
            {/* top part */}
            <div className="flex flex-col gap-4 justify-between bg-base-100 border border-base-300 rounded-2xl p-5
            sm:flex-row">

                {/* left */}
                <div className="flex items-center gap-4">
                    <p className="text-4xl bg-base-200 rounded-2xl p-5">{product.image}</p>
                    <div>
                        <h1>{product.nameBn}</h1>
                        <p className="text-base-content/70">প্রতি {unitBn[product.unit as keyof Unit]} · {product.categoryNameBn}</p>
                        <p>গতকালের তুলনায় আজ দাম {priceDifference === 0 ? <span className="font-semibold">অপরিবর্তিত</span> : priceDifference > 0 ? <span className="font-semibold">বেড়েছে</span> : <span className="font-semibold">কমেছে</span>} · {formatter.format(Math.abs(priceDifference))} টাকা</p>
                    </div>
                </div>

                {/* right */}
                <div className="flex flex-col items-center px-5 py-4 bg-base-200 rounded-2xl text-base-content/70 text-sm">
                    <p>আজকের দাম</p>
                    <h2 className="text-base-content">{formatter.format(product.today)}</h2>
                    <p>টাকা / {unitBn[product.unit as keyof Unit]}</p>
                    <span className={`font-semibold text-xs bg-base-200 rounded-full px-2 py-1 ${product.change.pct === 0 ? "text-base-content" : product.change.pct < 0 ? "text-success" : "text-error"}`}>
                        {product.change.pct === 0 ? <span>-</span> :
                            product.change.pct < 0 ? <span>▼</span> : <span>▲</span>} {formatter.format(Math.abs(product.change.pct))}%
                    </span>
                </div>
            </div>

            {/* bottom details */}
            <div className="flex flex-col gap-4 justify-between bg-base-100 border border-base-300 rounded-2xl p-5 text-base-content">

                <h2>দামের সারসংক্ষেপ</h2>

                {/* standouts */}
                <div className="grid grid-cols-1  gap-3
                md:grid-cols-3">

                    <div className="detail-card">
                        <p>সর্বনিম্ন দাম</p>
                        <p className="text-primary"><span className="font-bold text-2xl">{formatter.format(minPrice)}</span> টাকা</p>
                        <p>সবচেয়ে কম দামের বাজার</p>
                    </div>

                    <div className="detail-card">
                        <p>সর্বাধিক দাম</p>
                        <p className="text-error"><span className="font-bold text-2xl">{formatter.format(maxPrice)}</span> টাকা</p>
                        <p>সবচেয়ে বেশি দামের বাজার</p>
                    </div>

                    <div className="detail-card">
                        <p>গড় দাম</p>
                        <p className="text-primary"><span className="font-bold text-2xl">{formatter.format(avgPrice)}</span> টাকা</p>
                        <p>প্রতি {unitBn[product.unit as keyof Unit]}-এর হিসাবে</p>
                    </div>
                </div>

                <h2>বাজারভিত্তিক আজকের দাম</h2>

                {/* Table */}
                <Table>
                    <Table.ScrollContainer>
                        <Table.Content aria-label="বাজারভিত্তিক আজকের দাম" className="">
                            <Table.Header>
                                <Table.Column isRowHeader>বাজার</Table.Column>
                                <Table.Column>বিভাগ</Table.Column>
                                <Table.Column>সর্বনিম্ন</Table.Column>
                                <Table.Column>সর্বাধিক</Table.Column>
                                <Table.Column>গড়</Table.Column>
                            </Table.Header>

                            <Table.Body>
                                {product.markets.map((market: Market, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell className={"font-medium"}>{market.market}</Table.Cell>
                                        <Table.Cell>{market.division}</Table.Cell>
                                        <Table.Cell>{formatter.format(market.min)}</Table.Cell>
                                        <Table.Cell>{formatter.format(market.max)}</Table.Cell>
                                        <Table.Cell>{formatter.format((market.min + market.max) / 2)}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </div>
        </div>
    )
}
