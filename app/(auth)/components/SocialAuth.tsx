import { authClient } from "@/app/lib/auth-client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function SocialAuth() {
    const handleGithub = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        });
    };
    const handleGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
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
