import styled, { css, keyframes } from "styled-components";

const handleStatus = (status: any) => (status ? `grid` : `none`);

//display: ${({status}: any)=> handleStatus(status)};
//transition: display 3s ease-in-out;
//${({ status }) => status ? css`animation: ${fadeIn} 0.5s ease` : css`animation: none`};`

interface DropdownBoddyI {
  status?: boolean;
  ref?: any;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const DropdownContainer = styled.div<DropdownBoddyI>`
  display: flex;
  flex-direction: column;
  border: solid 0.5px #f6f6f6;
  border-radius: 10px;
  padding: 16px 30px;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease;
  min-width: 350px;

  .container-icons {
    position: relative;
    display: flex;
    align-items: center;
  }

  .remove {
    position: absolute;
    z-index: ${({ status }) => (status ? `1` : `0`)};

    opacity: ${({ status }) => (status ? `1` : `0`)};

    transition: all 0.5s ease;
  }

  .edit {
    position: absolute;
    z-index: ${({ status }) => (status ? `0` : `1`)};

    opacity: ${({ status }) => (status ? `0` : `1`)};

    transition: all 0.5s ease;
  }

  .DropdownBoddy{
    min-width: 400px;
    max-height: 0;
   
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0, 1, 0, 1);
  }

  .DropdownBoddy.open{
    height: auto;
   
    max-height: 9999px;
    transition: all 0.3s cubic-bezier(1, 0, 1, 0);

  }
`;

export const DropdownHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const DropdownBoddy = styled.div<DropdownBoddyI>`
  margin-top: 12px;
  max-width: 600px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  cursor: default;

  .check{
    grid-area: 3 / 1 / 3 / 3;
  }

 
`;

export const DropdownInfo = styled.div`
  width: 85%;
`;

export const DropdownTittle = styled.h3`
  color: #8395a7;
  font-size: 12px;
`;
export const DropdownDescription = styled.p`
  color: #425966;
  font-size: 12px;
`;

export const RemoveIcon = styled.div<DropdownBoddyI>``;
export const ArrowIcon = styled.div<DropdownBoddyI>`
display: flex;
align-items: center;

`;

