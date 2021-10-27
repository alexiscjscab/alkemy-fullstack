import styled from "styled-components";




const Select = styled.div`
    display: flex;
    flex-direction: row ;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 10px;


    .selects{
        background-color: transparent;
        color: #000;
        border: thin solid #000;
        margin-right: 20px;
        margin-left: 20px;
        outline: 0px;
        font-size: 18px;
        font-weight: bold;
        font-family: 'Georama', sans-serif;
    }

    .selects  option{
        background-color: #666;
        font-weight: bold;
    }

    span{
        cursor: alias;
    }
    
    .delete{
        color : red;
        margin-left: 10px;
        cursor: pointer;
        transform:scale(1.2)
    }

`;

export default Select;