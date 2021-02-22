import {ProductPod,ListPod,innersplitter} from "../styles"

 const SingleTimeline = (props) =>{
const timeline= props.product;
const key= props.key;
return(      
    
 
        
         <ListPod>
             <ProductPod>
             
            <img alt={timeline.time} src={timeline.image} />
         
            <h4>{timeline.time}</h4>
            <p>{timeline.paragraph} </p>
      
            </ProductPod>
         </ListPod>
        
         
       
)

}
export default SingleTimeline;
