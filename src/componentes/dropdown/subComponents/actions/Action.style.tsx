import styled from "styled-components";

export const ActionsContainerBoddy = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1cm;
`

export const ActionsContainer = styled.div`
     grid-area: 3 / 1 / 3 / 3;

`

export const ActionsContainerHead = styled.div`
margin: 5px 0px;

    h3{
        color: #8395A7;
        font-size: 12px;
     }
     p{
        color: #425966;
        font-size: 12px;
     }

`