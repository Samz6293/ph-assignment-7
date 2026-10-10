"use client";

import { Icon } from "@iconify/react";
import { Button, FieldError, Fieldset, Form, Input, Label, Surface, TextField, toast } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/app/lib/auth-client";
import SocialAuth from "./SocialAuth";

export function SignIn() {
    return (
        <div className="flex items-center justify-center rounded-2xl bg-base-100 border border-base-300 p-6">
            <Surface className="w-full">
                <Form onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const user = Object.fromEntries(formData.entries()) as
                        { name: string, email: string, password: string };
                    const { data, error } = await authClient.signIn.email({
                        ...user,
                        callbackURL: "/"
                    });
                    if (data) {
                        toast.success("সাইন-ইন সফল হয়েছে", {
                            description: "আপনি এখন বিস্তারিত দেখতে পারবেন",
                        });
                    }
                    if (error) {

                        toast.danger("সাইন-ইন সফল হয়নি", {
                            description: error.message
                        });
                    }
                }}>
                    <Fieldset className="w-full">
                        <Fieldset.Group>

                            <TextField isRequired name="email" type="email">
                                <Label className="text-base-content">ইমেইল</Label>
                                <Input placeholder="you@example.com" variant="secondary" />
                                <FieldError />
                            </TextField>
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "Password must be at least 8 characters";
                                    }
                                    if (!/[A-Z]/.test(value)) {
                                        return "Password must contain at least one uppercase letter";
                                    }
                                    if (!/[0-9]/.test(value)) {
                                        return "Password must contain at least one number";
                                    }
                                    return null;
                                }}
                            >
                                <Label>পাসওয়ার্ড</Label>
                                <Input variant="secondary" placeholder="কমপক্ষে ৮ অক্ষর" />
                                <FieldError />
                            </TextField>
                        </Fieldset.Group>
                        <Fieldset.Actions>
                            <Button fullWidth type="submit" className={"btn-primary"}>সাইন ইন</Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
                <SocialAuth />
                <p className="text-center mt-6">অ্যাকাউন্ট নেই? <Link href={"/sign-up"}><span className="text-primary underline hover:text-primary/80">সাইন আপ করুন</span></Link></p>
            </Surface>
        </div>
    );
}