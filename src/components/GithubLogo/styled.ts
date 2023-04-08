import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: flex-start;
    height: 100%;
    column-gap: 1.375rem;

    & span { /** (/) */
        font-size:1.5rem;
        color: ${props => props.theme.GRAY_100};
        font-weight: bold;
    }
    & h1 { /** Profile name */
        color: ${props => props.theme.GRAY_100};
        font-weight: 300;
    }

    & img { /** Logo (imagem) Github  */
        max-height: 100%;
    }

`