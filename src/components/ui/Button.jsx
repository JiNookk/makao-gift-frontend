import styled from 'styled-components';

const Button = styled.button`
    font-size: 1em;
    width: 100%;
    /* width: ${(props) => props.theme.size.width}; */
    padding: 1em;
    margin-top: 1rem;
    border: 0;
    border-radius: .5rem;
    background: transparent;
    color: inherit;
    cursor: pointer;
`;

export default Button;
