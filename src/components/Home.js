import {Navbar,AppHeader, ProductPod} from '../styles';
import TimelineList from './TimelineList';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home= () =>{

 
    
    return(
   <>
      
        <Navbar>
            <h2 class="section-heading text-uppercase">About</h2>
           
            </Navbar>
          
            <h3>Stevie Wonder's Timeline</h3>
        
        <ProductPod>
      <TimelineList/>
     
      </ProductPod>
    
    </>
     );
    };
    export default Home;