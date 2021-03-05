import styled from 'styled-components'
import { RelSize } from '../mixins'
import theme from '../theme'

export const HomeContainer = styled.div`
    background-color: ${theme.white};
    margin: auto 0;
    padding: ${RelSize(20, 16)};
    width: 100%;
`;

export const PortalContainer = styled.div`
    background-color: ${theme.white};
    margin: auto 0;
    padding: ${RelSize(10, 15)};
    width: 100%;
`;