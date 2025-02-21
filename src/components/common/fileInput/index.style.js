import styled from "styled-components";
import theme from "@/styles/theme";
import FileIcon from '../../../assets/svgs/ic_file.svg?react'
import PhotoIcon from '../../../assets/svgs/ic_photo.svg?react'


export const StyledFrame = styled.div`
    display: flex;
    flex-direction: column;
    height: 74px;
    width: 612px;
    padding: 17px;
    border-radius: 60px;
    background-color: ${theme.colors.white1}
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