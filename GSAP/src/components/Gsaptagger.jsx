import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Box from './box';

gsap.registerPlugin(useGSAP);

const GsapStagger = () => {
    useGSAP(()=>{
        gsap.to('#blue-box',{x:0,
            y:300,
            duration:2,
            repeat:-1,
            yoyo:true,
            rotation:360,
            ease:'power1.inOut',
            stagger:{
                amount:1.5,
                grid:[3,1],
                axis:'y',
                ease:'circ.inOut',
                from:'center'
            }
        })
    },[])
  return (
    <div className='flex'>
        <div>
        <Box/>
    </div>
    <div>
        <Box/>
    </div>
    <div>
        <Box/>
    </div>
    <div>
        <Box/>
    </div>
    <div>
        <Box/>
    </div>
    </div>
    
  )
}

export default GsapStagger;