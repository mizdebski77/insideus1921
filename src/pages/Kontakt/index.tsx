import { GridLayout } from "../../components/Layout/Grid";
import { Wrapper } from "../../components/Layout/PageWrapper";
import { FormComponent } from "./Form";
import { InsideUsData } from "./Data";

export default function Contact() {
    return (
        <Wrapper>
            <GridLayout columns="1fr 1fr" gap="40px">
                <FormComponent />
                <InsideUsData/>
            </GridLayout>
        </Wrapper>
    );
}
