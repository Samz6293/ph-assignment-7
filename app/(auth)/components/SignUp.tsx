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

export function SignUp() {
    const onSubmit = (e: React<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};

        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

    };

    return (
        <div className="flex items-center justify-center rounded-2xl bg-base-100 border border-base-300 p-6">
            <Surface className="w-full">
                <Form onSubmit={onSubmit}>
                    <Fieldset className="w-full">
                        <Fieldset.Group>
                            <TextField
                                isRequired
                                name="name"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return "নাম কমপক্ষে ৩টি অক্ষরের হতে হবে";
                                    }
                                    return null;
                                }}
                            >
                                <Label>নাম</Label>
                                <Input variant="secondary" placeholder="যেমন: রহিম উদ্দিন" />
                                <FieldError />
                            </TextField>
                            <TextField isRequired name="email" type="email">
                                <Label className="text-base-content">ইমেইল</Label>
                                <Input placeholder="you@example.com" variant="secondary" />
                                <FieldError>এই ঘরটি পূরণ করুন।</FieldError>
                            </TextField>
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "পাসওয়ার্ড কমপক্ষে ৮টি অক্ষরের হতে হবে";
                                    }
                                    if (!/[A-Z]/.test(value)) {
                                        return "পাসওয়ার্ডে অন্তত একটি বড় হাতের অক্ষর থাকতে হবে";
                                    }
                                    if (!/[0-9]/.test(value)) {
                                        return "পাসওয়ার্ডে অন্তত একটি সংখ্যা থাকতে হবে";
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
                <p className="text-center mt-6">অ্যাকাউন্ট আছে? <Link href={"/sign-in"}><span className="text-primary underline hover:text-primary/70">সাইন ইন  করুন</span></Link></p>
            </Surface>
        </div>
    );
}