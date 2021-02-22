import Timeline from "./Timeline";
import SingleTimeline from "./SingleTimeline";


const TimelineList= () =>{

    
return(
     <>  
    {Timeline.map((timelines) =>   
    <SingleTimeline product={timelines} key={Timeline.id}/>
    

)}

   </>
)
}
export default TimelineList;

