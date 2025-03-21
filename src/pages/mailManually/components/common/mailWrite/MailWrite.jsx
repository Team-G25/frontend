import { StyledFrame } from "./index.style";

const MailWrite = ({label, id, name, value, onChange}) => {
    return(
        <StyledFrame label={label} id={id} name={name} value={value} onChange={onChange} />
    );
};

export default MailWrite