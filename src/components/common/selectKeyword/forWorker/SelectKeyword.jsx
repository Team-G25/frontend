import { useState } from 'react';
import {
  KeywordContainer,
  CustomSelect,
  SelectList,
  SelectItem,
} from './index.style';
import KEYWORDS from '@utils/constants/keyword';
import ArrowIcon from '@svgs/Polygon-down.svg?react';

const keywordLabels = {
  boss: '상사',
  coWorker: '동료',
};

const SelectKeyword = () => {
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [isKeywordOpen, setIsKeywordOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedDetailKeyword, setSelectedDetailKeyword] = useState('');

  const handleKeywordSelect = (value) => {
    setSelectedKeyword(value);
    setSelectedDetailKeyword('');
    setIsKeywordOpen(false);
  };

  const handleDetailSelect = (value) => {
    setSelectedDetailKeyword(value);
    setIsDetailOpen(false);
  };

  return (
    <>
      <KeywordContainer>
        <label htmlFor="keyword-select">키워드</label>
        <CustomSelect onClick={() => setIsKeywordOpen(!isKeywordOpen)}>
          <span>
            {selectedKeyword ? keywordLabels[selectedKeyword] : '키워드 선택'}
          </span>
          <ArrowIcon />
        </CustomSelect>
        {isKeywordOpen && (
          <SelectList>
            {Object.keys(KEYWORDS.WORKER_KEYWORDS)
              .filter((key) => key !== '')
              .map((key, index, array) => (
                <>
                  <SelectItem
                    key={key}
                    onClick={() => handleKeywordSelect(key)}
                  >
                    {keywordLabels[key]}
                  </SelectItem>
                  {index < array.length - 1 && <div className="divider" />}
                </>
              ))}
          </SelectList>
        )}
      </KeywordContainer>
      <KeywordContainer>
        <label htmlFor="detail-keyword-select">세부 키워드</label>
        <CustomSelect onClick={() => setIsDetailOpen(!isDetailOpen)}>
          <span>
            {selectedDetailKeyword ? selectedDetailKeyword : '세부 키워드 선택'}
          </span>
          <ArrowIcon />
        </CustomSelect>
        {isDetailOpen && selectedKeyword && (
          <SelectList>
            {KEYWORDS.WORKER_KEYWORDS[selectedKeyword].map(
              (option, index, array) => (
                <>
                  <SelectItem
                    key={option.value}
                    onClick={() => handleDetailSelect(option.label)}
                  >
                    {option.label}
                  </SelectItem>
                  {index < array.length - 1 && <div className="divider" />}
                </>
              ),
            )}
          </SelectList>
        )}
      </KeywordContainer>
    </>
  );
};

export default SelectKeyword;
