import { useRef, useState } from 'react';
import {
  StyledButton,
  ButtonContainer,
  StyledFrame,
  File,
  Photo,
  FileName,
} from './index.style';

const FileInput = ({ width, onFileSelect }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setFileName(selectedFile.name);
      onFileSelect([selectedFile]);
    }
  };

  return (
    <StyledFrame width={width}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <ButtonContainer>
        <StyledButton onClick={handleClick}>
          <Photo />
        </StyledButton>
        <StyledButton onClick={handleClick}>
          <File />
        </StyledButton>
      </ButtonContainer>
      <FileName>{fileName}</FileName>
    </StyledFrame>
  );
};

export default FileInput;
