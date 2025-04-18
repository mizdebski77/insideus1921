// 'use server'
// import { createClient } from "../server";
// import { getErrorMessage } from "../utils";

// export async function SignOutAction() {
//     const supabase = await createClient();

//     try {
//         const { error } = await supabase.auth.signOut();
//         if (error) throw error;
//         return { errorMessage: null };
//     } catch (error) {
//         return { errorMessage: getErrorMessage(error) };
//     }
// };