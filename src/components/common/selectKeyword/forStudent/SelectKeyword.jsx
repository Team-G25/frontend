import { useState, Fragment } from 'react';
import {
  KeywordContainer,
  CustomSelect,
  SelectList,
  SelectItem,
} from './index.style';
import KEYWORDS from '@utils/constants/keyword';
import ArrowIcon from '@svgs/Polygon-down.svg?react';

const keywordLabels = {
  grade: '성적',
  attendance: '출석',
  assignment: '과제',
  class: '수강',
};

const SelectKeyword = ({
  selectedKeyword,
  setSelectedKeyword,
  selectedDetail,
  setSelectedDetail,
}) => {
  const [isKeywordOpen, setIsKeywordOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleKeywordSelect = (key) => {
    setSelectedKeyword(keywordLabels[key]);
    setSelectedDetail('');
    setIsKeywordOpen(false);
  };

  const handleDetailSelect = (value) => {
    setSelectedDetail(value);
    setIsDetailOpen(false);
  };

  const getKeywordKey = (label) =>
    Object.keys(keywordLabels).find((key) => keywordLabels[key] === label);

  return (
    <>
      <KeywordContainer>
        <label htmlFor="keyword-select">키워드</label>
        <CustomSelect onClick={() => setIsKeywordOpen(!isKeywordOpen)}>
          <span>{selectedKeyword || '키워드 선택'}</span>
          <ArrowIcon />
        </CustomSelect>
        {isKeywordOpen && (
          <SelectList>
            {Object.keys(KEYWORDS.STUDENT_KEYWORDS)
              .filter((key) => key !== '')
              .map((key, index, array) => (
                <Fragment key={key}>
                  <SelectItem onClick={() => handleKeywordSelect(key)}>
                    {keywordLabels[key]}
                  </SelectItem>
                  {index < array.length - 1 && <div className="divider" />}
                </Fragment>
              ))}
          </SelectList>
        )}
      </KeywordContainer>

      <KeywordContainer>
        <label htmlFor="detail-keyword-select">세부 키워드</label>
        <CustomSelect onClick={() => setIsDetailOpen(!isDetailOpen)}>
          <span>{selectedDetail || '세부 키워드 선택'}</span>
          <ArrowIcon />
        </CustomSelect>
        {isDetailOpen && selectedKeyword && (
          <SelectList>
            {KEYWORDS.STUDENT_KEYWORDS[getKeywordKey(selectedKeyword)]?.map(
              (option, index, array) => (
                <Fragment key={option.value}>
                  <SelectItem onClick={() => handleDetailSelect(option.label)}>
                    {option.label}
                  </SelectItem>
                  {index < array.length - 1 && <div className="divider" />}
                </Fragment>
              ),
            )}
          </SelectList>
        )}
      </KeywordContainer>
    </>
  );
};

export default SelectKeyword;
