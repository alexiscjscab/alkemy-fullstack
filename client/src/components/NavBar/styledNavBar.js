import styled from 'styled-components'

const Nav = styled.div `
    
    .appbar{
        background-color: #000;
        top: 0;
        left: 0;
        right: 0;
        color:  #fff;
        height: 60px;
    };

    .toolbar{
        display: flex;
        justify-content:center;
        align-items: center;
    }

    a{
        text-decoration: none;
        color: #fff;
        font-size: 24px;
        margin: 10px;
        &:hover{
            color: #ddd;
            border-bottom: 2px solid #ddd
        }
    }
`

export default Nav