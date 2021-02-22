
// import './styles.js';
import { AppHeader,GlobalStyle} from './styles'
import Home from "./components/Home"

import { ThemeProvider } from "styled-components";



  //task 1
    //change the image and added my title

    //Task 2 
    //Added a list of product using the mapping method and changed css file to style.js

    //Task 3
    // Creating components with 

    
    const theme = {
      mainColor: "white", // main font color
      backgroundColor: " #273746 ", 
      // main background color
    
    };

function App() {
  return (
    
  <ThemeProvider theme={theme}>
       <GlobalStyle />
    <AppHeader>

     <>
        <Home/>
    </>
  
    </AppHeader>
    
    </ThemeProvider>

  );
}

export default App;
