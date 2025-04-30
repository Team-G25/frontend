import styled from 'styled-components';
import theme from '@styles/theme';

export const EditorContainer = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: ${theme.colors.white};
    gap: 30px;
`;

export const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white1};
    border-radius: 12px;
`;

export const Textarea = styled.textarea`
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
