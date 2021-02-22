import styled, { createGlobalStyle} from "styled-components";


// Working on style here .. Danke schön
export const GlobalStyle= createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}

`


export const Navbar=styled.div`
top:0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 100px;
width: 100vw;
background-color: #17202A;
position: absolute;
box-sizing: border-box;


`;
export const AppHeader= styled.div`
background-color:${props => props.theme.backgroundColor};
  min-height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
  font-size: calc(5px + 2vmin);

  color: ${props => props.theme.mainColor};

 
`;



export const ListPod= styled.div`
align-items: left;
justify-content: left;
position: relative;
padding: 0;


background-color:#17202A


`;

export const ProductPod= styled.div`
margin: 20px;
height: 350px;
width: 100%;


cursor: pointer;
img {
    left: 50%;
    width: 200px;
    height: 200px;
    margin-left: -50px;

}

p {
    padding: 0 20px 20px 30px;
  right: auto;
  left: -14px;
  border-right-width: 10px;
  border-left-width: 0;
}
`


