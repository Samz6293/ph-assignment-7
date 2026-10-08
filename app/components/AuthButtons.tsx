import { Button } from '@heroui/react'

export default function AuthButtons({ className }: { className?: string }) {
    return (
        <div className={className}>
            <Button slot={"close"} className={"bg-base-100 hover:bg-base-300"}>সাইন ইন</Button>
            <Button slot={"close"} className={"btn-primary"}>
                সাইন আপ
            </Button>
        </div>
    )
}
