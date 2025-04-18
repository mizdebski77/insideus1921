"use client";
import { Button } from "../../../components/Buttons/Button";
import { Input } from "../../../components/Input";
import { Textarea } from "../../../components/TextArea";
import { Title } from "../../../components/Typography/H1";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../../../core/Schema/contactSchema";
import { FlexLayout } from "../../../components/Layout/Flex";
import { Form } from "../../../components/Form";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const FormComponent = () => {
    const notifySuccess = () =>
        toast.success("Twoja wiadomość została wysłana!");
    const notifyError = () =>
        toast.error("Ups. Coś poszło nie tak spróbuj ponownie!");

    const handleSendEmailSuccess = () => {
        notifySuccess();
    };

    const handleSendEmailError = () => {
        notifyError();
    };

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = () => {
        const formElement = form.current;

        if (formElement) {
            emailjs
                .sendForm(
                    "service_vha1cak",
                    "template_fh5uspj",
                    formElement,
                    "Iw8bwASXgeaDQktEm"
                )
                .then((result) => {
                    if (result.text === "OK") {
                        formElement.reset();
                        handleSendEmailSuccess();
                    }
                })
                .catch(() => {
                    handleSendEmailError();
                });
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(contactFormSchema),
    });

    return (
        <FlexLayout
            direction="column"
            justify="center"
            maxWidth="800px"
            margin="0 auto"
            fullWidth
            gap="24px"
            border="1px solid #87774E"
            padding="40px"
            mediaPadding="20px"
        >
            <Title
                fontSize="24px"
                textAlign="center"
                fontWeight={500}
                mediaFontSize="24px"
            >
                Formularz kontaktowy
            </Title>
            <Form onSubmit={handleSubmit(sendEmail)} ref={form}>
                <FlexLayout gap="24px" mediaDirection="column">
                    <Input
                        placeholder="Imię"
                        name="firstName"
                        register={register}
                        error={errors.firstName?.message}
                    />
                    <Input
                        placeholder="Nazwisko"
                        name="lastName"
                        register={register}
                        error={errors.lastName?.message}
                    />
                </FlexLayout>
                <Input
                    placeholder="Temat"
                    name="subject"
                    register={register}
                    error={errors.subject?.message}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    register={register}
                    error={errors.email?.message}
                />
                <Textarea
                    placeholder="Wiadomość"
                    name="message"
                    register={register}
                    error={errors.message?.message}
                />
                <Button type="submit">Wyślij</Button>
            </Form>
        </FlexLayout>
    );
};
