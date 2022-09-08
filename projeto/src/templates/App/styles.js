import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
    //background: red;

    /* ${({ background }) => css`
        background = ${background};
    `} */
    
    ${({ theme }) => css`
        background = ${theme.colors.secondaryBg};
    `}
`;