import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import { formatter, unitBn } from "../constants/NumberAndUnits";
import { Product, Unit } from "../types";
import { getProducts } from "../constants/fetch";


export default async function Marquee() {
    const data = await getProducts();
    const fluctuatedProducts = data.filter((product: Product) => product.change.dir !== "flat");
    return (
        <div className="py-2 bg-base-100 border border-base-300">
            <MarqueeText direction="right" duration={8}>

                {fluctuatedProducts.map((product: Product) =>
                    <span key={product.id} className="px-3 space-x-2">
                        <span>{product.image}</span>
                        <span className="font-medium">{product.nameBn}</span>
                        <span> {formatter.format(product.today)} টাকা/{unitBn[product.unit as keyof Unit]}</span>
                        <span className={`font-semibold ${product.change.pct < 0 ? "text-success" : "text-error"}`}>
                            {product.change.pct < 0 ? <span>▼</span> : <span>▲</span>}{formatter.format(Math.abs(product.change.pct))}%
                        </span>
                    </span>
                )}

            </MarqueeText>
        </div>
    )
}
