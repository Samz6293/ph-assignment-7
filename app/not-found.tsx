import { Button } from "@heroui/react";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="content-box flex flex-col gap-3 items-center justify-center text-center bg-base-100 border border-base-300 rounded-2xl p-6">
            <p aria-hidden="true" className="text-6xl">🧺</p>
        <h1>পাতাটি খুঁজে পাওয়া যায়নি</h1>
        <p className="text-base-content/70">আপনি যে পণ্য বা পাতাটি খুঁজছেন সেটি সরানো হয়েছে বা কখনো ছিল না।</p>
        <div className="w-full max-w-110">
        <Link  href={"/"}>
            <Button fullWidth type="submit" className={"btn-primary"}>হোম পেজে যান</Button>
        </Link>
        </div>
    </div>
  )
}
