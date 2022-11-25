import styled from 'styled-components';
import Button from './Button';

const PrimaryButton = styled(Button)`
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primaryText};

    :hover {
        color: #006148;
    }
`;

export default PrimaryButton;
