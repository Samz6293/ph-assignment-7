"use client";
import { Avatar, Button, Dropdown, Key, Label, Spinner, toast } from '@heroui/react'
import Link from 'next/link'
import { authClient } from '../lib/auth-client'
import { useRouter } from 'next/navigation';

export default function AuthButtons({ className }: { className?: string }) {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    const name = user?.name.split(" ")[0];

    const router = useRouter();
    const handleAction = async (key: Key) => {
        if (key === "profile") router.push("/my-profile")
        if (key == "logout") {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        toast.danger("সাইন-আউট সফল হয়েছে");
                        router.push("/");
                    },
                },
            });
        }
    }
    return (
        <div className={className}>
            {isPending ? <Spinner color="success" />
                : user ?
                    <div className='flex items-center gap-2'>
                        {/* dropdown */}
                        <div>
                            <Dropdown className='min-w-30'>
                                <Dropdown.Trigger className="flex items-center gap-2 ">
                                    <p>{name}</p>
                                    <Avatar>
                                        <Avatar.Image alt="user profile avatar" src={user.image as string} />
                                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                    </Avatar>
                                </Dropdown.Trigger>
                                <Dropdown.Popover>
                                    <div className="px-3 pt-3 pb-1">
                                        <div className="flex items-center gap-2">
                                            <Avatar size="sm">
                                                <Avatar.Image alt="user profile avatar" src={user.image as string} />
                                                <Avatar.Fallback delayMs={600}>{user?.name.charAt(0)}</Avatar.Fallback>
                                            </Avatar>
                                            <div className="flex flex-col gap-0">
                                                <p className="text-sm leading-5 font-medium">{user?.name}</p>
                                                <p className="text-xs leading-none text-muted">{user?.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown.Menu onAction={handleAction}>
                                        <Dropdown.Item id="profile" textValue="Profile">
                                                <Label>👤 আমার প্রোফাইল</Label>
                                        </Dropdown.Item>
                                        <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                                            <div className="flex w-full items-center justify-between gap-2">
                                                    <Label>↩ সাইন আউট</Label>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>
                        </div>
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
        </div>
    )
}
