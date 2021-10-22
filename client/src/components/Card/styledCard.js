import styled from "styled-components";

const CardCtn = styled.div`
    padding: 10px;
    width: 220px;
    height: 320px;
    margin: 20px;
    background: #d1abd1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:hover{
        box-shadow: 2px 2px 20px rgba(30,50,170,0.66)
    }

    p{
        margin-top: 2px;
        font-weight: 400
    }
    .concept{
        margin: 5px 0 5px 0;
    }
    
    .amount{
        margin: 5px 0 5px 0;
        font-size: 18px;
        p{
            font-weight: 500;
            color: #fafafa
        }
    }

    .date{
        margin: 5px 0 5px 0;
        color: #000
    }

    .type{
        margin: 5px 0 5px 0;
    }

    .id{
        margin: 10px 0 10px 0;
    }
`

export default CardCtn

export const Button = styled.button`
    display: block;
    width: 220px;
    margin: 5px;
    padding: 5px;
    outline: none;
    background: ${props => props.color ? 'rgba(243, 32, 19,1)' : 'rgba(7, 129, 255, 1)'};
    font-size: 17px;
    font-weight: 700;
    &:hover{
        border: 2px solid #fff;
        color: #fff;
        background: ${props => props.color ? 'rgba(243, 32, 19,0.5)' : 'rgba(7, 129, 255, 0.5)'};
    }
`