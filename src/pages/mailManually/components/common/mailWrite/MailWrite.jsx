import { StyledFrame, Textarea } from "./index.style";

const MailWrite = ({label, id, name, value, onChange}) => {
    return(
        <StyledFrame>
            <Textarea label={label} id={id} name={name} value={value} onChange={onChange} />
        </StyledFrame>
    );
};

export default MailWrite