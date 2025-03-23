import styled from 'styled-components';
import theme from '@/styles/theme';
import FileIcon from '../../../assets/svgs/ic_file.svg?react';
import PhotoIcon from '../../../assets/svgs/ic_photo.svg?react';

export const StyledFrame = styled.div.attrs((props) => ({
  style: {
    width: props.width || '612px', // 기본값 612px
  },
}))`
  display: flex;
  align-items: center;
  height: 74px;
  padding: 17px 0 17px 32px;
  border-radius: 60px;
  background-color: ${theme.colors.white1};
`;

export const ButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
  position: relative;
`;

export const StyledButton = styled.button`
  height: 40px;
  width: 40px;
  position: relative;
`;

export const Photo = styled(PhotoIcon)`
  width: 35px;
  height: 30px;
`;

export const File = styled(FileIcon)`
  width: 35px;
  height: 30px;
`;

export const FileName = styled.span`
  margin-left: 16px;
  font-family: ${theme.font.family.popup};
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.size.medium};
  color: ${theme.colors.blue};
  max-width: 600px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
