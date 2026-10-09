import Link from "next/link";
import { SignIn } from "../components/SignIn";

export default function SignInPage() {
    return (
        <div className="content-box flex flex-col items-center">
            <h2>সাইন ইন</h2>
            <p className="text-base-content/70 text-center">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            <div className="mt-6">
            <SignIn />
            </div>
            <Link href={"/"}>
                <p className="text-base-content/70 text-sm mt-6">← হোম পেজে ফিরে যান</p>
            </Link>
        </div>
    )
}
