import styled from "styled-components";

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    /* background: lightblue; */
`

export const InfoLinks = styled.nav`
    display:flex;
    align-items: center;
    flex-direction: column;
    gap:1rem;
    width:100%;
`

export const InfoLink = styled.a`
    color: ${props => props.theme.PRIMARY_500};
    display: flex;
    align-items: center;
    gap:10px;
    width:100%;
    cursor: pointer;
`

export const UserInfo = styled.div`
    text-align: center;

    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme.GRAY_800}
    }
    p {
        color: ${props => props.theme.GRAY_300}
    }
`

export const Avatar = styled.div`
    width:max-content;
    height:max-content;
    position: relative;

    img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
    }
    ::after {
        height:40px;
        width:40px;
        position: absolute;
        content: '😎';
        background: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        right:0;
        bottom:0;
        box-shadow: 0 5px 16px ${props => props.theme.GRAY_200}
    }
`