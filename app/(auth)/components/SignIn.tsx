"use client";

import { Icon } from "@iconify/react";
import {
    Button,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    TextField,
} from "@heroui/react";
import Link from "next/link";

export function SignIn() {
    // const onSubmit = (e: React<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     const data: Record<string, string> = {};

    //     // Convert FormData to plain object
    //     formData.forEach((value, key) => {
    //         data[key] = value.toString();
    //     });

    //     alert("Form submitted successfully!");
    // };
// onSubmit={onSubmit}
    return (
        <div className="flex items-center justify-center rounded-2xl bg-base-100 border border-base-300 p-6">
            <Surface className="w-full">
                <Form >
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
                <div className="flex items-center gap-3 my-6 text-sm text-base-content/70">
                    <div className="h-px flex-1 bg-base-300" />
                    <span>অথবা</span>
                    <div className="h-px flex-1 bg-base-300" />
                </div>
                <div className="flex flex-col justify-between items-center gap-2 mt-6 text-base-content
                sm:flex-row">
                    <Button className={"font-semibold"} variant="ghost">
                        <Icon icon="devicon:google" />
                        Google দিয়ে চালিয়ে যান
                    </Button>
                    <Button className={"font-semibold"} variant="ghost">
                        <Icon icon="mdi:github" />
                        GitHub দিয়ে চালিয়ে যান
                    </Button>
                </div>
                <p className="text-center mt-6">অ্যাকাউন্ট নেই? <Link href={"/sign-up"}><span className="text-primary underline hover:text-primary/80">সাইন আপ করুন</span></Link></p>
            </Surface>
        </div>
    );
}