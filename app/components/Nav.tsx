
import Image from "next/image";
import logo from "@/app/assets/market.png"
import { Button } from "@heroui/react";
import Link from "next/link";
import NavLinks from "./NavLinks";


export default function Nav() {
    return (

        <nav className="text-base-content bg-base-100 border border-bg-base-300">

            <div className="content-box flex flex-col gap-3 py-3">

                {/* logo + buttons */}
                <div className="flex items-center justify-between ">
                    {/* logo name date */}
                    <div className="flex items-center gap-2">
                        <div>
                            <Image src={logo} alt="bazar dor logo" width={40} height={40} className="bg-primary rounded-lg" />
                        </div>
                        <div>
                            <h2 className=" font-bold text-xl">বাজার দর</h2>
                            <p>{new Date().toLocaleDateString("bn-BD", {
                                weekday: "long", day: "numeric",
                                month: "long", year: "numeric", timeZone: "Asia/Dhaka"
                            })}</p>
                        </div>
                    </div>

                    {/* buttons */}
                    <div className="flex gap-2">
                        <Button className={"bg-base-100 hover:bg-base-300"}>সাইন ইন</Button>
                        <Button className={" bg-primary border border-primary-strong text-primary-content shadow shadow-primary/70 hover:bg-hover-link-primary"}>
                            সাইন আপ
                        </Button>
                    </div>
                </div>

                {/* links */}
                <NavLinks/>
            </div>
        </nav>
    )
}
