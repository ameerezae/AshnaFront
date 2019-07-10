import React, { Component } from 'react';
import  './Seprator.css';
import { doWhileStatement } from '@babel/types';



// class Seprator extends Component {
//   render() {
//     return (
//       <div className="Seprator">
//         <hr id="hr1"></hr>
//         <div  id="septext">
//           آخرین خیریه ها
//         </div>
//         <hr id="hr2"></hr>

//       </div>
//     );
//   }
// }
// export default Seprator;

const Seprator = (props) => {
  return (
          <div className= {props.class}>
         <hr id="hr1"></hr>
         <div  id="septext">
           {props.text}
         </div>
         <hr id="hr2"></hr>

       </div>

  )
}
export default Seprator;