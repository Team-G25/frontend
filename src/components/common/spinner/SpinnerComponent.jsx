import styled, { keyframes } from 'styled-components';

const Spinner = () => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
};

export default Spinner;

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Loader = styled.div`
  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, #ff4864 94%, #0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%, #ff4864);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: ${rotate} 1s infinite linear;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999; /* 다른 요소 위에 표시되도록 */
`;
