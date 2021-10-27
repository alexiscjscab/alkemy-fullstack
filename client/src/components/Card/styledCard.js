import styled from "styled-components";

const CardCtn = styled.div`
    padding: 10px;
    width: 200px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: rgb(170,139,251);
    background: linear-gradient(90deg, rgba(170,139,251,1) 28%, rgba(98,88,173,1) 104%);

    a{
        text-decoration: none
    }

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
            color: #222
        }
    }

    .date{
        margin: 5px 0 5px 0;
    }

    .type{
        margin: 5px 0 5px 0;
    }

    .category{
        margin: 5px 0 5px 0;
        p{
            margin-top: 5px;
            color : #222;
            font-weight: 600;
        }
    }
`

export default CardCtn

export const Button = styled.button`
    display: block;
    width: 180px;
    margin: 5px;
    padding: 5px;
    outline: 0;
    background: ${props => props.color ? 'rgba(243, 32, 19,1)' : 'rgba(7, 129, 255, 1)'};
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    border-radius: 50px;
    &:hover{
        border: 2px solid #fff;
        color: #fff;
        background: ${props => props.color ? 'rgba(243, 32, 19,0.5)' : 'rgba(7, 129, 255, 0.5)'};
    }

`