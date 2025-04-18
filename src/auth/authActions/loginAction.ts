'use server'
import { createClient } from "../server"
import { getErrorMessage } from "../utils";

export async function LogInAction(formData: FormData) {
    const supabase = await createClient();

    try {
        const data = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };

        const { error } = await supabase.auth.signInWithPassword(data);
        if (error) throw error;

        return { errorMessage: null };
    } catch (error) {
        return { errorMessage: getErrorMessage(error) }
    }
};
