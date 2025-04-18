"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../Button";
import { SignOutAction } from "@/app/Auth/authActions/signOutAction";
import { toast } from "react-toastify";
import { Loader } from "../../Loader/styled";

export function SignOutButton() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleSignOut = () => {
        startTransition(async () => {
            const { errorMessage } = await SignOutAction();
            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                router.push("/");
                toast.success("Wylogowano pomyślnie");
            }
        });
    };

    return (
        <Button onClick={handleSignOut} $background="main">
            {isPending ? <Loader /> : `Wyloguj`}
        </Button>
    );
}
