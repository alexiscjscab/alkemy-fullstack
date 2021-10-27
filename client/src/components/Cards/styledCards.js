import styled from 'styled-components';

const CardsCtn = styled.div `
    display: flex;
    justify-content: center;

    .ctn-grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
    
        @media (max-width: 920px){
            grid-template-columns: 1fr;
        }
    }
`

export default CardsCtn