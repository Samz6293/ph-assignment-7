import { formatter, unitBn } from "../constants/NumberAndUnits";
import { ProductCardProps, Unit } from "../types";

export default function ProductCard({ product }: ProductCardProps) {
    return (
        // wrapper
        <div className="bg-base-100 border border-base-300 rounded-2xl p-4 flex flex-col gap-3
        hover:border-primary">

            {/* image, name, unit */}
            <div className="flex gap-3 items-center">
                <span className="bg-base-200 rounded-2xl text-2xl p-2">{product.image}</span>

                <div className="flex flex-col">
                    <p className="font-semibold">{product.nameBn}</p>
                    <p className="tex-xs">প্রতি {unitBn[product.unit as keyof Unit]}</p>
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div>
                    <p className="text-xs">আজকের দাম</p>
                    <p className="font-medium text-sm"><span className="font-bold text-xl">{formatter.format(product.today)}</span> টাকা</p>
                </div>
                <span className={`font-semibold text-xs bg-base-200 rounded-full px-2 py-1 ${
                    product.change.pct === 0 ? "text-base-content" : product.change.pct < 0 ? "text-success" : "text-error"}`}>
                    {product.change.pct === 0 ? <span>-</span> :
                    product.change.pct < 0 ? <span>▼</span> : <span>▲</span>} {formatter.format(Math.abs(product.change.pct))}%
                </span>
            </div>
        </div>
    )
}
