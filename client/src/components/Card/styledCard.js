import styled from "styled-components";

const CardCtn = styled.div`
    padding: 20px;
    width: 200px;
    height: 200px;
    margin: 20px;
    background: rgba(238,174,202,0.666);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .concept{
        margin: 5px 0 5px 0;
    }

    .amount{
        margin: 5px 0 5px 0;
    }
    .id{
        margin: 10px 0 10px 0;
    }
`

export default CardCtn