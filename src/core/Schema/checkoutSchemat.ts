import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
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
        .email("Niepoprawny format email")
        .required("Email jest wymagany"),
    phone: yup
        .string()
        .matches(/^[0-9]+$/, "Numer telefonu może zawierać tylko cyfry")
        .min(9, "Za krótki numer telefonu")
        .required("Numer telefonu jest wymagany"),
    cityZip: yup
        .string()
        .required("Miasto i kod pocztowy są wymagane")
        .matches(
            /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+(?:[\s\-][A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+)*,?\s*(\d{2}-\d{3})$/,
            "Miasto i kod pocztowy muszą mieć poprawny format (np. Kraków 30-001)"
        ), address: yup.string().required("Adres jest wymagany"),
});
