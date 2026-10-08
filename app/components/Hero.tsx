import { Button } from "@heroui/react";
import { dateToday } from "../constants/NumberAndUnits";
import Image from "next/image";
import heroImage from "@/app/assets/bazar-hero.png"
import Link from "next/link";

export default function Hero() {
    return (
        <div className="content-box flex flex-col items-center justify-between bg-base-100 border border-base-300 p-4 rounded-3xl
        md:flex-row">
            <div className="flex flex-col gap-2">
                <p className="bg-primary/10 text-primary px-3 py-1 rounded-full w-fit font-medium">{dateToday}</p>
                <h1 className="font-bold text-4xl">আজকের বাজারের দাম এক নজরে</h1>
                <p className="text-base-content/70 mt-2 max-w-xl">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,
                    গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <Link href="#all-products">
                    <Button className={"btn-primary mt-2"}>সব পণ্য দেখুন</Button>
                </Link>
            </div>

            <div>
                <Image src={heroImage} alt="Fruits in a basket" />
            </div>
        </div>
    )
}
