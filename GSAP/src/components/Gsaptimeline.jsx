import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Box from './box';

gsap.registerPlugin(useGSAP);
const Gsaptimeline = () => {
  const timeline = gsap.timeline({
    repeat:-1,repeatDelay:1,yoyo:true,
  });
  useGSAP(()=>{
    timeline.to("#blue-box",{ 
        x:250,
        rotation:360,
        borderRadius:'100%',
        duration:2,
        ease:'back.inOut'
  })
  timeline.to("#blue-box",{
    y:250,
    scale:2,
    rotation:360,
    borderRadius:'100%',
    duration:2,
    ease:'back.inOut'
  })
  timeline.to("#blue-box",{
        x:500,
        scale:1,
        rotation:360,
        borderRadius:'0%',
        duration:2,
        ease:'back.inOut'

  })
})
  return (
       <div>
        <Box/>
        <div >
         <button className='bg-gray-200 rounded-2xl p-3 border-2' onClick={()=>{
            if(timeline.paused()){
                timeline.play()
            }else{
              timeline.pause()
            }
         }}>play/pause</button>
        </div>
       </div>
  )
}

export default Gsaptimeline;