"use client";
import { Button, Spinner } from '@heroui/react'
import Link from 'next/link'
import { authClient } from '../lib/auth-client'

export default function AuthButtons({ className }: { className?: string }) {
    const {
        data: session,
        isPending,
        error,
        refetch
    } = authClient.useSession()
    const user = session?.user;
    console.log(user?.name);
    return (
        <>
            {isPending ? <Spinner color="success" />
            : user ? 
            <div className=''>
                <p className="rounded-2xl bg-base-200 px-3 py-1">{user?.name.charAt(0) as string | null}</p>
            </div>
            :
            <div className={className}>
                <Link href="/sign-in">
                    <Button slot={"close"} className={"bg-base-100 hover:bg-base-300"}>সাইন ইন</Button>
                </Link>

                <Link href="/sign-up">
                    <Button slot={"close"} className={"btn-primary"}>সাইন আপ</Button>
                </Link>
            </div>
            }
        </>
    )
}
