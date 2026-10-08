import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

import { formatter } from "../constants/banglaConverter";
import { Product } from "../types";

export default async function Marquee() {
  const response = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const data = await response.json();
  const fluctuatedProducts = data.filter((product: Product) => product.change.dir !== "flat");
  return (
    <div className="py-2 bg-base-100 border border-base-300">
        <MarqueeText direction="right" duration={8}>
        {fluctuatedProducts.map((product: Product) =>
            <span key={product.id} className="px-3 space-x-2">
                <span>{product.image}</span>
                <span className="font-medium">{product.nameBn}</span>
                <span> {formatter.format(product.today)} টাকা/কেজি</span>
                <span className={`font-semibold ${product.change.pct < 0 ? "text-success" : "text-error"}`}>
                    {product.change.pct < 0 ? <span>▼</span> : <span>▲</span>}{Math.abs(product.change.pct)}%
                </span>
            </span>
        )}
        </MarqueeText>
    </div>
  )
}
