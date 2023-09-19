import styled from "styled-components"

interface DropdownColapseI {
    ref?: any;
  }

export const ButtonExpandContent = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: end;
    

`

export const ExpandContentIcons = styled.div`
    display: flex;
    gap: 10px    ;
    align-items: center;
    cursor: pointer;

`

export const ExpandContentIcon = styled.div<DropdownColapseI>`
    
    display: flex;
    gap: 10px    ;
    align-items: center;
    
    p{
        display: flex;
    gap: 10px    ;
    align-items: center;
        font-size: 12px;
        color: #06A1C6;
    }
    

`

