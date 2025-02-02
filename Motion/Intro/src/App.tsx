import './App.css'
import { motion } from "motion/react"


const squareVariants = {
  init: {
    y: -100,
    scale: 1,
    rotate: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    scale: 2,
    opacity: 1,
  },
  hover:{
    scale: 0.5,
    rotate: 180,
    opacity: 0.5,
  },
  tap:{
    scale: 0.5,
    opacity: 0.5,
  }
}


function App() {
  return (
    <>
      <div className="flex flex-col w-screen overflow-x-hidden">

        <div className='flex w-screen h-[600px] justify-center items-center overflow-x-hidden p-2 '>
          <motion.div
            className='w-20 h-20 bg-[#ffff00]'
            variants={squareVariants}
            initial='init'
            animate='animate'
            whileHover='hover'
            whileTap="tap"
            transition={{ duration: 2}}
          >
          </motion.div>
        </div>
        <div className='flex bg-black w-screen  overflow-x-hidden p-2 '>
          <motion.div
            className='w-20 h-20 bg-[#ffff00]'
            drag='x'
            dragConstraints={{ left: 0, right: 300 }}
            dragElastic={0.1}

            dragMomentum={true}
          >
          </motion.div>
        </div>
        <div className='flex flex-col w-screen  overflow-x-hidden p-2 '>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.circle
              cx="12"
              cy="12"
              r="10"
              animate={{ stroke: '#ffff00', r: 5, pathLength: 1 }}
              initial={{ pathLength: 0, r: 5 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", repeatDelay: 1 }}
            />
          </motion.svg>
        </div>
      </div>
    </>
  )
}

export default App
