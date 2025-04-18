import { BiLoaderAlt } from "react-icons/bi";
import styled from "styled-components";

export const Loader = styled(BiLoaderAlt)`
    animation: spinner 1s linear infinite;

    @keyframes spinner {
        0% {
        transform: rotate(0deg);
    }
        100% {
        transform: rotate(360deg);
    };
}`;
