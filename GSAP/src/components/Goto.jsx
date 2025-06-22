import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Box from './box';

gsap.registerPlugin(useGSAP);
const Goto = () => {
  useGSAP(()=>{
    gsap.to('#blue-box',{x:0,
        y:0,
        duration:2,
        repeat:-1, 
        yoyo:true,
        rotationY:360,
        ease:'elastic'
    })
  },[])
  return (
       <div>
        <Box/>
       </div>
  )
}

export default Goto;