import { authClient } from "@/app/lib/auth-client";
import { Button, toast } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function SocialAuth() {
   const handleGithub = async () => {
        try {
            const data = await authClient.signIn.social({
                provider: "github"
            });
            if (data) {
                toast.success("GitHub সাইন ইন সফল হয়েছে", {
                    description: "আপনি এখন বিস্তারিত দেখতে পারবেন",
                });
            }
        } catch (error: any) {
            toast.danger("GitHub এ সাইন ইন ব্যর্থ হয়েছে", {
                description: error.message || "অনুগ্রহ করে আবার চেষ্টা করুন",
            });
        }
    };

    const handleGoogle = async () => {
        try {
            const data = await authClient.signIn.social({
                provider: "google",
            });
            if (data) {
                toast.success("Google সাইন ইন সফল হয়েছে", {
                    description: "আপনি এখন বিস্তারিত দেখতে পারবেন",
                });
            }
        } catch (error: any) {
            toast.danger("Google এ সাইন ইন ব্যর্থ হয়েছে", {
                description: error.message || "অনুগ্রহ করে আবার চেষ্টা করুন",
            });
        }
    }; 
    return (
        <>
            <div className="flex items-center gap-3 my-6 text-sm text-base-content/70">
                <div className="h-px flex-1 bg-base-300" />
                <span>অথবা</span>
                <div className="h-px flex-1 bg-base-300" />
            </div>
            <div className="flex flex-col justify-between items-center gap-2 mt-6 text-base-content
                sm:flex-row">
                <Button onPress={handleGoogle} fullWidth className={"font-semibold"} variant="ghost">
                    <Icon icon="devicon:google" />
                    Google দিয়ে চালিয়ে যান
                </Button>
                <Button onPress={handleGithub} fullWidth className={"font-semibold"} variant="ghost">
                    <Icon icon="mdi:github" />
                    GitHub দিয়ে চালিয়ে যান
                </Button>
            </div>
        </>
    )
}
