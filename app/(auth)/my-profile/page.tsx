"use client"
import { authClient } from "@/app/lib/auth-client";
import { Avatar, Button, FieldError, Fieldset, Form, Input, Label, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function MyProfilePage() {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    const router = useRouter();
    const handleSignOut = async() => {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        router.push("/");
                    },
                },
            });
    }
    return (
        <div className="content-box flex flex-col justify-center items-center gap-6">

            <div className="flex flex-col text-center w-full">
                <h1>আমার প্রোফাইল</h1>
                <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>

            {/* profile details */}
            <div className="w-full max-w-110  bg-base-100 border border-base-300 p-6 rounded-2xl">
                <div className="flex flex-col gap-4 items-center justify-between
                sm:flex-row">
                    <div className="flex gap-2">
                        <Avatar size="sm">
                            <Avatar.Image alt="user profile avatar" src={user?.image as string} />
                            <Avatar.Fallback delayMs={600}>{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        <div className="flex flex-col gap-0">
                            <p className="text-sm leading-5 font-medium">{user?.name}</p>
                            <p className="text-xs leading-none text-muted">{user?.email}</p>
                        </div>
                    </div>
                    <Button onPress={handleSignOut} variant="outline" className={"text-error border border-error"}>↩ সাইন আউট</Button>
                </div>
            </div>

            <div className="w-full max-w-110 flex items-center justify-center rounded-2xl bg-base-100 border border-base-300 p-6">
                <Surface className="w-full">
                    <h2 className="mb-4">তথ্য</h2>
                    <Form onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const user = Object.fromEntries(formData.entries()) as { name: string }
                        console.log(user)
                        await authClient.updateUser({
                            name: user.name
                        })
                    }}>
                        <Fieldset className="w-full">
                            <Fieldset.Group>
                                <TextField isRequired name="name" validate={(value) => {
                                    if (value.length < 3) {
                                        return "নাম কমপক্ষে ৩টি অক্ষরের হতে হবে";
                                    }
                                    return null;
                                }}>
                                    <Label>নাম</Label>
                                    <Input variant="secondary" placeholder="যেমন: রহিম উদ্দিন" />
                                    <FieldError />
                                </TextField>

                            </Fieldset.Group>
                            <Fieldset.Actions>
                                <Button  fullWidth type="submit" className={"btn-primary"}>আপডেট </Button>
                            </Fieldset.Actions>
                        </Fieldset>
                    </Form>
                </Surface>
            </div>
        </div>
    )
}
