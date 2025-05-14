import { useState } from 'react';
import {
  Container,
  Title,
  SubTitle,
  InputArea,
  Textarea,
  Counter,
  SubmitButtonWrapper,
} from './index.style';

import AISubmitBtn from '@components/common/aiSubmitButton/AISubmitBtn';

const MAX_LENGTH = 200;

const AIGenerationInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      setInput(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (!input.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    // AI 생성 로직 필요

    // 상위 컴포넌트에 입력 전달
    onSubmit?.(input); // optional chaining 사용
  };

  return (
    <Container>
      <Title>AI 생성</Title>
      <SubTitle>
        생성하고자 하는 메일의 상황을 <br />
        작성해주세요.
      </SubTitle>
      <InputArea>
        <Textarea
          value={input}
          onChange={handleChange}
          placeholder="예: 교수님께 내일 수업에 참석할 수 없어서 병결 처리 해달라고 요청하기  / 팀장님께 연차 사용 승인 요청하기"
        />
        <Counter>
          {input.length}/{MAX_LENGTH}자
        </Counter>

        {/* 입력이 있을 때만 버튼 노출 */}
        {input.trim() && (
          <SubmitButtonWrapper>
            <AISubmitBtn onClick={handleSubmit} />
          </SubmitButtonWrapper>
        )}
      </InputArea>
    </Container>
  );
};

export default AIGenerationInput;
