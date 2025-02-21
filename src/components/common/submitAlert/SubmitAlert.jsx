import { useNavigate } from "react-router-dom";
import { Title, StyledButton, SytledScreen} from "./index.style";

const SubmitAlert = () => {
    const navigate = useNavigate();
    return(
        <SytledScreen>
            <Title>메일이 정상적으로 전송되었습니다!</Title>
            <StyledButton 
                onClick = {() => { 
                    navigate('/');
                }}
            >
            메인 페이지로 돌아가기
            </StyledButton>
        </SytledScreen>
    );
};

export default SubmitAlert