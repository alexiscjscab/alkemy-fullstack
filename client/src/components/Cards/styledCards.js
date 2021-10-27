import styled from 'styled-components';

const CardsCtn = styled.div `
    display: flex;
    justify-content: center;

    .ctn-grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    
        

        @media(max-width: 1200px){
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media(max-width: 1000px){
            grid-template-columns: 1fr 1fr; 
        }

        @media (max-width: 700px){
            grid-template-columns: 1fr;
        }
    }
`

export default CardsCtn