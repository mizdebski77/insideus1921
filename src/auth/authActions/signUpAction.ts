'use server';
import { createClient } from "../server";
import { getErrorMessage } from "../utils";

export async function SignUp(formData: FormData) {
    const supabase = await createClient()
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const name = formData.get('name') as string;
        const surname = formData.get('surname') as string;

        const { auth } = supabase;

        const { error } = await auth.signUp({
            email,
            password,
            options: {
                data: {
                    name: name,
                    surname: surname,
                }
            }
        });

        if (error) throw error;

        return { errorMessage: null };
    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
};
