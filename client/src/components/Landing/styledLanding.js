import styled from 'styled-components';
import img from '../../img/dolar.jpg'

const LandingCtn = styled.div`
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${img});
    background-size: 100% 100%;
    position: fixed;
    background-attachment: fixed;
    width: 100%;
    height: 100%;



    .title{
        font-weight: 700;
        margin: 10rem auto;
        cursor: alias;
        color: #102;
        text-shadow: 2px 2px 2px rgba(98,88,173,1);
        h2{
            font-size: 30px;
            &:hover{
                transform:  scale(2)
            }
        }
        h4{
            font-size:26px;
            margin: 30px 0;
            &:hover{
                transform:  scale(2)
            }
        }
    }

    .home{
        a{
            text-decoration: none;
            font-size: 30px;
            color: #102;
            text-shadow: 2px 2px 2px rgba(98,88,173,1);
            font-weight:1000;
            
        }
        p{
            &:hover{
                transform:  scale(2)
            }
        }
    }

`

export default LandingCtn;