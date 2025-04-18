import { useTransition } from "react";
import { Button } from "../Button";
import { toast } from "react-toastify";
import { Loader } from "../../Loader/styled";
import { useNavigate } from "react-router-dom"; // Dodajemy hook z react-router-dom
import { SignOutAction } from "../../../auth/authActions/signOutAction";

export function SignOutButton() {
    const [isPending, startTransition] = useTransition();
    const navigate = useNavigate(); // Zamiast useRouter

    const handleSignOut = () => {
        startTransition(async () => {
            const { errorMessage } = await SignOutAction();
            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                navigate("/"); // Zamiast router.push("/")
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
