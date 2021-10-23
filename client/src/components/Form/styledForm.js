import styled from 'styled-components';

const FormCtn = styled.form`
    display: flex;
    flex-direction: column;
    background: rgb(34,137,195);
    background: linear-gradient(70deg, rgba(34,137,195,1) 10%, rgba(45,227,253,1) 60%);
    height: 70vh;
    width: 370px;
    padding: 10px;
    margin-top: 50px;

        h2{
            text-align: center;
            font-size: 32px;
            margin-top: 50px;
            margin-bottom:50px;
            cursor: alias;
        }

        h4{
            text-align:center;
            margin-top: 25px;
            font-size: 26px;
            color: rgba(200,0,0);
            font-weight: bold;
        }
    
        input{
            outline: 0px;
            font-size: 20px;
            background: transparent;
            border: none;
            border-bottom: 2px solid #000;
            color: #000;
            font-weight: 300;
            text-align: center;
            border-radius: 5px;
            &::placeholder{
                color: #000;
            }
        }
        
        label{
            font-size: 22px;
            border-bottom: 2px solid #000;
        }
        
    .concept{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0 30px 0;
    }
    .amount{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;
    }
    .date{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;
    }
    .type{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;
    }

    .send-button{
        text-align: center;
        margin-top: 50px;

        input{
            padding: 10px;
            width:50%;
            background: #000;
            border: 2px solid #fff;
            color: #fff;
            border-radius: 50px;
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.5s ease-in-out;
            &:hover{
                background: #fff;
                color: #000;
                border: 2px solid #000;
            }
        }
    }

`

export default FormCtn;