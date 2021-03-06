import styled from 'styled-components';
import { RelSize } from '../mixins';

const Base = styled.button`
    border: 0;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.1);
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.black};
    cursor: pointer;
    display: inline-block;
    font-size: ${props => props.small ? RelSize(14, 16) : RelSize(16, 16)};
    font-weight: 400;
    line-height: ${props => props.small ? RelSize(14, 14) : RelSize(16, 16)};
    margin: 0;
    ${props => !props.small && `
        padding: ${RelSize(12, 14)} ${RelSize(32, 16)};
    `}
    ${props => props.small && `
        padding: ${RelSize(10, 14)} ${RelSize(10, 16)};
    `}
    position: relative;
    transition: all ease-in 0.2s;
    ${props => props.full && `
        width: 100%;
    `}
    &:hover{
        background-color: ${props => props.theme.blue};
    }
    &:active, &:focus {
        border: 0;
        box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2);
        outline: none;
    }
`;

export const StandardButton = styled(Base)`
    min-width: ${RelSize(17, 1)};
`;

export const SubmitButton = styled(Base)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: ${props => props.theme.green};
    padding: ${RelSize(12, 14)} ${RelSize(22, 16)};
    &:hover{
        background-color: ${props => props.theme.altGreen};
    }
    div {
        text-transform: uppercase;
    }
`;