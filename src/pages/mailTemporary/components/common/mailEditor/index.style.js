import styled from 'styled-components';
import theme from '@styles/theme';

export const EditorContainer = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: ${theme.colors.white};
    gap: 30px;
    border-left: 2px solid ${theme.colors.gray1};
`;

export const TopArea = styled.div`
    display: flex:
    flex-direction: column;
    background-color: ${theme.colors.white1};
    border-radius: 12px;
    padding: 16px;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;
    gap: 10px;
    border-bottom: 1px solid ${theme.colors.gray3};

    &:last-child {
        border-bottom: none;
    }
`

export const Label = styled.label`
    font-family: ${theme.font.family.basic};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.size.medium};
    color: ${theme.colors.black2};
`;

export const Input = styled.input`
    flex: 1;
    font-family: ${theme.font.family.basic};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.size.medium};
    color: ${theme.colors.black2};
    border: none;
    background-color: transparent;
    outline: none;

    &::placeholder {
        color: ${theme.colors.gray2};
    }
`;

export const Separator = styled.hr`
    border: none;
    height: 2px;
    background-color: ${theme.colors.gray3};
    margin: 8px 0 16px;
`;

export const MainArea = styled.div`
    flex: 1;
    display: flex;
    gap: 16px;
    background-color: ${theme.colors.white};
    overflow: hidden;
`;

export const ContentBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white1};
    border-radius: 12px;
    padding: 24px;
    overflow: hidden;
`;

export const Textarea = styled.textarea`
    flex: 1;    
    width: 100%;
    height: 580px;
    border: none;
    border-radius: 12px;
    background-color: ${theme.colors.white1};
    padding: 24px;
    color: ${theme.colors.black1};
    font-family: ${theme.font.family.basic};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.sMedium};
    overflow-y: hidden;
    scroll: none;
    resize: none;
`;

export const Note = styled.p`
    font-size: 12px;
    color : ${theme.colors.gray2};
    margin-top: 8px;
`;

export const BottomArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const BottomLeft = styled.div`
    display: flex;
    align-items: center;
    margin-right: 52px;
`;

export const BottomRight = styled.div`
    display: flex;
`;
