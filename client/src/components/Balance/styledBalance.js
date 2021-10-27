import styled from "styled-components";

const BalanceCtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 30px auto;
    width: 890px;
    font-size: 32px;
    text-align: center;
    
    @media (max-width:920px){
        font-size: 30px;
        width: 400px;
    };
    @media (max-width:380px){
        font-size: 26px;
        width: 350px;
    };
    ul{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
        list-style: none;
        padding: 4px;
        @media (max-width: 920px){
            justify-content: center;
        }
    }

    span{
        color: #222;
        font-weight: 700;
        
    }
    li{
        @media (max-width: 920px){
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }

    .red{
        color: rgba(200,30,30);
    }

    .blue{
        color: rgba(30,30,200);
    }

    .green{
        color: rgba(30,200,30);
    }
`

export default BalanceCtn