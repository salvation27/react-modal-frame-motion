import React,{useState,forwardRef,useImperativeHandle} from 'react'
import {motion,AnimatePresence} from 'framer-motion'

const Modal = forwardRef((props,ref) => {
  

const[open,setOpen]= useState(false)
useImperativeHandle(ref,()=>{
return {
  open: ()=>setOpen(true),
  close: ()=>setOpen(false),
}
})

  return (
    <AnimatePresence>
      {
        open && (
          <>
      <motion.div
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1,
        transition:{
          duration:.3
        }
      }}
      exit={{
        opacity:0,
        transition:{
          delay:.3
        }
      }}
      onClick={()=>setOpen(false)}
      className='modal_backdrop'></motion.div>
      <motion.div
      initial={{
        scale:0
      }}
      animate={{
        scale:1,
        transition:{
          duration:.3
        }
      }}
      exit={{
        scale:0,
        transition:{
          delay:.3,
        }
      }}
      className='modal_content_wrapper'>
         <motion.div
         initial={{
          opacity:0,
         x:100
         }}
         animate={{
          opacity:1,
          x: 0,
          transition:{
            delay:.6,
            duration:.6
          }
        }}
        exit={{
          opacity:0,
          x:100
        }}
         className="modal_content">
           <span onClick={()=>setOpen(false)}>X</span>
            {props.children}
         </motion.div>
      </motion.div>
    </>
        )
      }
    </AnimatePresence>
  )
})

export default Modal
