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
        border: none;
        /* background: rgb(170,139,251);
        background: linear-gradient(90deg, rgba(170,139,251,1) 28%, rgba(98,88,173,1) ); */
        /* border: thin solid #000; */
        border-bottom: 1px solid #000;
        margin-right: 20px;
        margin-left: 20px;
        outline: 0px;
        font-size: 18px;
        font-weight: bold;
        font-family: 'Georama', sans-serif;
    }
    select{
        border-radius: 10px;
        padding: 5px;
    }

    option{
        font-weight: bold;
        background: #6189aa;
        border: none;
        border-radius: 100px;
        margin: 100px;
        
        
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