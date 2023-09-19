import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';


interface Dropdown{
	isOpen?: boolean;

}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div<Dropdown>`
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  
   ${({ isOpen }) => isOpen ? css`animation: ${fadeIn} 0.5s ease` : css`animation: none`};`;

const ToggleButton = styled.button``;

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

const ContainerToggle = styled.div`

border: solid 1px red;

`

  return (
    <>
      <ContainerToggle>
      <ToggleButton onClick={toggleOpen}>Toggle</ToggleButton>
      <Container isOpen={isOpen}>Contenido que se muestra/oculta con transición</Container>
      </ContainerToggle>
      
    </>
  );
};

export default MyComponent;