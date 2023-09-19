import styled from "styled-components"

export const ToggleContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

border: solid .5px #06A1C641;
border-radius: 3px;
max-width: 180px;
padding: 1rem;
background-color: #F2F2F280;
`
export const ToggleTittle = styled.h3`
font-size: 12px;
color: #06A1C6;

`
export const ToggleStatusContainer = styled.div`
display: flex;
gap: 10px;
`

export const ToggleStatus = styled.p`
font-size: 12px;
color: ${({color})=>color};

`
