import { keyframes } from "styled-components";

export const AnimPopUp = keyframes`
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
`

export const AnimPopUpOpacity = keyframes`
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }

`

export const AnimSlideUp = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
`
export const AnimSlideDown = keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
`