import { Button } from '@heroui/react'
import Link from 'next/link'

export default function AuthButtons({ className }: { className?: string }) {
    return (
        <div className={className}>
            <Link href="/sign-in">
                <Button slot={"close"} className={"bg-base-100 hover:bg-base-300"}>সাইন ইন</Button>
            </Link>

            <Link href="/sign-up">
                <Button slot={"close"} className={"btn-primary"}>সাইন আপ</Button>
            </Link>
        </div>
    )
}
