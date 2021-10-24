import styled from "styled-components";

const BalanceCtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    flex-wrap: wrap;
    margin: 30px auto;
    width: 80vw;
    font-size: 32px;
    text-align: center;

    ul{
        display: flex;
        width: 100%;
        justify-content: space-between;
        list-style: none;
        padding: 4px;
    }

    span{
        color: #222;
        font-weight: 700
    }
`

export default BalanceCtn