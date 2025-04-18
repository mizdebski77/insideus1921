import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup
        .string()
        .required("Email jest wymagany")
        .email("Wprowadź poprawny adres email"),

    password: yup
        .string()
        .required("Hasło jest wymagane")
        .min(6, "Hasło musi mieć minimum 6 znaków")
        .matches(/[A-Z]/, "Hasło musi zawierać przynajmniej jedną wielką literę")
        .matches(/[a-z]/, "Hasło musi zawierać przynajmniej jedną małą literę")
        .matches(/[0-9]/, "Hasło musi zawierać przynajmniej jedną cyfrę"),
});
