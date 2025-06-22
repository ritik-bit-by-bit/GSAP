
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Box from './box';

gsap.registerPlugin(useGSAP);

const GsapfromTo = () => {
    useGSAP(()=>{
        gsap.fromTo('#blue-box',{x:0,
            y:0,
            rotation:0,
            borderRadius:'0%'
        },{
            x:500,
                y:0,
                duration:2,
                borderRadius:'100%',
                repeat:-1, 
                yoyo:true,
                rotation:360,
                ease:'bounce.out',
        },
    )},[])
  return (
    <div>
        <Box/>
    </div>
  )
}

export default GsapfromTo