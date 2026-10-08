import Image from "next/image";
import logo from "@/app/assets/market.png"
import NavLinks from "./NavLinks";
import { dateToday } from "../constants/NumberAndUnits";
import Navigation from "./NavDrawer";
import AuthButtons from "./AuthButtons";
import Link from "next/link";


export default function Nav() {
    return (

        <nav className="sticky top-0 z-50 bg-base-100 border border-bg-base-300">

            <div className="content-box flex flex-col gap-3 py-3">

                {/* logo + buttons */}
                <div className="flex items-center justify-between ">
                    {/* logo name date */}
                    <Link href={"/"} className="hover:bg-base-200">
                    <div className="flex items-center gap-2">
                        <div>
                            <Image src={logo} alt="bazar dor logo" width={40} height={40} className="bg-primary rounded-lg" />
                        </div>
                        <div>
                            <h2 className=" font-bold text-xl">বাজার দর</h2>
                            <p>{dateToday}</p>
                        </div>
                    </div>
                    </Link>

                    {/* buttons */}
                    <AuthButtons className="hidden gap-2 lg:flex" />
                    <Navigation/>
                </div>

                {/* links */}
                <NavLinks className="hidden gap-4 justify-center
        lg:flex"/>
            </div>
        </nav>
    )
}
