import styled from 'styled-components';
import theme from '@/styles/theme';

export const KeywordContainer = styled.section`
  display: flex;
  width: 148px;
  height: 200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  position: relative;

  label {
    margin-bottom: 10px;
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.medium};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.black2};
  }
`;

export const CustomSelect = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 8px 10px;

  border-radius: 6px;
  border: 1px solid ${theme.colors.gray3};
  background-color: ${theme.colors.white};
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.weight.medium};
`;

export const SelectList = styled.ul`
  display: block;
  width: 100%;
  position: absolute;
  top: 34%;
  left: 0;
  max-height: 128px;

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray3};
  border-radius: 6px;

  .divider {
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.gray3};
  }
`;

export const SelectItem = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  padding: 8px 10px;

  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.weight.medium};
  color: ${theme.colors.black2};
  background-color: ${theme.colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.gray1};
  }
`;
