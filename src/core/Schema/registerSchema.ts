import * as yup from "yup";

export const registerSchema = yup.object({
    firstName: yup
        .string()
        .required("Imię jest wymagane")
        .min(2, "Imię musi mieć przynajmniej 2 znaki")
        .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s-]+$/, "Imię może zawierać tylko litery"),

    lastName: yup
        .string()
        .required("Nazwisko jest wymagane")
        .min(2, "Nazwisko musi mieć przynajmniej 2 znaki")
        .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s-]+$/, "Nazwisko może zawierać tylko litery"),

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

    confirmPassword: yup
        .string()
        .required("Potwierdzenie hasła jest wymagane")
        .oneOf([yup.ref("password")], "Hasła muszą być identyczne"),
});
