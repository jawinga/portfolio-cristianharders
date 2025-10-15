import React from 'react'
import { motion } from 'motion/react'

const Button = ({label, icon = "", onClick}) => {
  return (
     <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileTap={{ scale: 0.95 }}
          href="#about"
          onClick={onClick}
          className="flex items-center justify-center gap-3 px-8 py-4 text-base font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-lg mx-auto"
        >
          {label}
          {icon}
        </motion.a>
  )
}

export default Button