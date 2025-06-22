import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Box from './box';

gsap.registerPlugin(useGSAP);

const Gsapfrom = () => {
    useGSAP(()=>{
        gsap.from('#blue-box',{x:100,
            y:250,
            duration:2,
            repeat:-1,
            yoyo:true,
            rotationY:360,
            ease:'power1.inOut'
        })
    },[])
  return (
    <div>
        <Box/>
    </div>
  )
}

export default Gsapfrom