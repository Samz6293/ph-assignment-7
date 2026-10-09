import Link from "next/link";
import { SignUp } from "../components/SignUp";

export default function SignUpPage() {
    return (
        <div className="content-box flex flex-col items-center">
            <h2>অ্যাকাউন্ট তৈরি করুন</h2>
            <p className="text-base-content/70 text-center">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            <div className="mt-6 w-full max-w-110">
                {/* <SignUp /> */}
            </div>
            <Link href={"/"}>
                <p className="text-base-content/70 text-sm mt-6">← হোম পেজে ফিরে যান</p>
            </Link>
        </div>
    )
}
