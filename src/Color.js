import React from "react";
import { useState } from "react";




export default function AddColor(){
   const [color, setColor] = useState("pink")
   
   const styles = {
       background : color,
      }
      const [colorList, setColorList] = useState( ["pink","yellow","gold","green"])
   
    return(
        <div>
          <input
          value={color}
          style={styles}
          onChange={(event)=>{
               setColor(event.target.value)
          }}
          >
          </input>


          <button 
          onClick={() =>  setColorList([...colorList, color]) }
            >
              Click Me
          </button>

{colorList.map((clr)=>(
    <ColorBox color = {clr} />
    ))}

            </div>
    )
}

function ColorBox(props){

var styles = {background: props.color,
    marginTop : "25px",
    width : "750px",
    height : "35px"
}

    return(
        <div
        style={styles}
        > </div>
    )
}



//     export default function Colorbox(){
//    const [color, setColor] = useState("yellow")
//       var styles = {background: color}
//       return(
//           <div>
//   <input
//   style={styles}
//   onChange={(event)=>{
//       setColor(event.target.value)
//   }}
//   placeholder=""
//   >
//   </input>
//           </div>
//       )
//   }






