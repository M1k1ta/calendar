import styled from '@emotion/styled';

export const BackgroundModal = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  background-color: #00000055;
`;

export const ModalBox = styled('article')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 40vw;
  height: 40vh;
  padding: 30px 40px;
  background-color: #fff;

  animation: creating 400ms;

  @keyframes creating {
    from {
      transform: translate(-50%, -50%) scale(0);
    }
    to {
      transform: translate(-50%, -50%) scale(100%);
    }
  }
`;

export const Title = styled('h2')`
  font-size: 30px;
  font-weight: 400;
`;

export const Form = styled('form')`
  padding: 0 10px;
`;

export const TextInput = styled('input')`
  height: 35px;
  width: 100%;
  outline: none;
  padding: 0 10px;
`;

export const ColorInput = styled('input')`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;

  width: 30px;
  height: 30px;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border-radius: 25px;
    border: none;
  }
`;

export const Button = styled('button')`
  width: 100%;
  height: 50px;
  border: none;
  background-color: #fd8701;
  color: #fff;

  cursor: pointer;
  transition: background-color 400ms;

  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #ff9e2f;
  }
`;

export const Label = styled('label')`
  position: relative;
  display: block;
  margin-bottom: 30px;
`;

export const ColorLabel = styled('label')`
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
`;

export const ResetButton = styled('button')`
  position: absolute;
  left: 25px;
  bottom: 25px;
  width: 22px;
  height: 22px;
  border: none;
  padding: none;
  border-radius: 25px;
  background-color: inherit;
  cursor: pointer;

  &:hover {
  }
`;
