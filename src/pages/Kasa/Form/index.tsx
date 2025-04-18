import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../components/Input";
import { Form } from "../../../components/Form";
import { checkoutSchema } from "../../../core/Schema/checkoutSchemat";
import { checkoutFields } from "../../../constants/FormFields/checkoutFields";
import { Paragraph } from "../../../components/Typography/Paragraph";

export const CheckoutForm = () => {
    // const { data: user } = useFetchUser();

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //     reset, // Dodajemy reset do wywołania hooka
    // } = useForm({
    //     resolver: yupResolver(checkoutSchema),
    //     mode: "onTouched",
    //     defaultValues: user
    //         ? {
    //               email: user.email,
    //               firstName: user.user_metadata.surname || "",
    //               lastName: user.user_metadata.name || "",
    //           }
    //         : {},
    // });

    // React.useEffect(() => {
    //     if (user) {
    //         reset({
    //             email: user.email,
    //             firstName: user.user_metadata.surname || "",
    //             lastName: user.user_metadata.name || "",
    //         });
    //     }
    // }, [user, reset]);

    // const onSubmit = (data: any) => {
    //     console.log("Wysłano formularz:", data);
    // };

    return (
        <Form
            onSubmit={alert}
            border="1px solid #87774E"
            padding="28px"
            background="#FFFCF9"
        >
            <Paragraph
                fontSize="24px"
                fontWeight={700}
                mediaFontSize="18px"
                mediaTextAlign="center"
            >
                Dane odbiorcy:
            </Paragraph>
            {checkoutFields.map(({ name, placeholder, type }) => (
                <Input
                    key={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    register={alert}
                />
            ))}
        </Form>
    );
};
