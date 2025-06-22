import React, { use } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Box from './box';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const GsapScrollTrigger = () => {
const scrollRef =React.useRef();
  
  useGSAP(()=>{
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    
    boxes.forEach((box)=>{
        gsap.to(box,{
            x:500,
            rotation:360,
            scale:1.5,
            duration:2,
            borderRadius:'100%',
            scrollTrigger:{
                trigger:box,
                start:'bottom bottom',
                end:'top 10%',
                scrub:true
            }
        })
    })
        gsap.to('#blue-box',{
            x:200,
            y:20,
            scale:1.5,
            duration:4,
            stagger:{
                amount:1.5,
                grid:[3,1],
                axis:'y',
                from:'center'
            },
            borderRadius:'100%',
            scrollTrigger:{
                trigger:'#blue-box',
                start:'bottom bottom',
                end:'bottom 10%',
                scrub:true
            },
            ease:'power1.Out'

    })
  },[scrollRef])
  return (
       <div className='min-h-screen min-w-screen '>
        <div id='blue-box' ref={scrollRef}>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        </div>
        <br/>
         jbfvjd
         <br/>
         vdfnbnf
         <br/>
         vfnvekf
         <br/>
         vfvkdfnb\
         <br/>
         vskfnvk
         <br/>
         vkdndd
         <br/>
         vdnejnbf
         <br/>
         fnefnejf
         \<br/>
         <br/>
         jbfvjd
         <br/>
         vdfnbnf
         <br/>
         vfnvekf
         <br/>
         vfvkdfnb\
         <br/>
         vskfnvk
         <br/>
         vkdndd
         <br/>
         vdnejnbf
         <br/>
         fnefnejf
         \<br/>
         <br/>
         jbfvjd
         <br/>
         vdfnbnf
         <br/>
         vfnvekf
         <br/>
         vfvkdfnb\
         <br/>
         vskfnvk
         <br/>
         vkdndd
         <br/>
         <div ref={scrollRef}>
         <Box/>
         <Box/>
         </div>
         vdnejnbf
         <br/>
         fnefnejf
         \<br/>
         <br/>
         jbfvjd
         <br/>
         vdfnbnf
         <br/>
         vfnvekf
         <br/>
         vfvkdfnb\
         <br/>
         vskfnvk
         <br/>
         vkdndd
         <br/>
         vdnejnbf
         <br/>
         fnefnejf
         \<br/>
         .
         .
         <br/>
         .\
       7
       <br/>
       7
       7
       7
       <br/>
       7
       7
       7
       7
       <br/>
       .\
       7
       <br/>
       7
       7
       7
       <br/>
       7
       7
       7
       7
       <br/>
       7
       .\
       7
       <br/>
       7
       7
       7
       <br/>
       7
       7
       7
       7
       <br/>
       7
       7
       7
       <br/>
       7
       7
       <br/>
       7
       7

       <br/>
       7
       <br/>
       7
       <br/>
       7
       <br/>
       7
       <br/>
       7
       <br/>
       7

       77

       7
        
       </div>
  )
}

export default GsapScrollTrigger;