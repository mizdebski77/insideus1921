import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("Imię jest wymagane")
        .min(2, "Imię musi mieć co najmniej 2 znaki"),
    lastName: yup
        .string()
        .required("Nazwisko jest wymagane")
        .min(2, "Nazwisko musi mieć co najmniej 2 znaki"),
    subject: yup
        .string()
        .required("Temat jest wymagany")
        .min(3, "Temat musi mieć co najmniej 3 znaki"),
    email: yup
        .string()
        .required("Email jest wymagany")
        .email("Podaj poprawny email"),
    message: yup
        .string()
        .required("Wiadomość jest wymagana")
        .min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});
