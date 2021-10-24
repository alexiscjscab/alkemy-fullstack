import styled from 'styled-components'

const Nav = styled.div `
    
    .appbar{
        background: rgb(170,139,251);
        background: linear-gradient(90deg, rgba(170,139,251,1) 28%, rgba(98,88,173,1) 104%);
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
    };

    .toolbar{
        display: flex;
        justify-content:center;
        align-items: center;
    }

    a{
        text-decoration: none;
        color: #000;
        font-size: 24px;
        margin: 10px;
        &:hover{
            color: #333;
            border-bottom: 2px solid #333
        }
    }
`

export default Nav