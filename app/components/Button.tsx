"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { FaChevronRight } from "react-icons/fa6";

interface ButtonProps {
  route?: string; // Make route optional
  variant?: 'black' | 'white' | 'frost';
  text?: string;
  children?: React.ReactNode;
  icon?: boolean;
  type?: 'button' | 'submit' | 'reset'; // Add type prop
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Add custom onClick
}

const Button = ({ route, variant = 'black', text, children, icon = false, type = 'button', onClick }: ButtonProps) => {
  const buttonStyles = variant === 'black'
    ? 'text-white bg-black border-[1px] border-black'
    : variant === 'white'
    ? 'text-black bg-white border-[1px] border-white'
    : 'text-white/80 border-[1px] border-white/40 bg-white/20 backdrop-blur-lg'

  const router = useRouter();
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
    if (route) {
      const pathname = window.location.pathname;
      if (pathname !== route) {
        router.push(route);
      }
    }
  };

  return (
    <motion.button 
      type={type}
      className={`rounded-full text-md flex items-center justify-center px-5 py-2 ${buttonStyles} cursor-pointer`}
      whileTap={{ scale: 0.92 , transition: { duration: 0.2 }, transformOrigin: 'bottom'}}
      onClick={handleClick}
    >
      <>
        {text || children}
        {icon && <FaChevronRight className="ml-2 h-3 w-3" />}
      </>
    </motion.button>
  )
}

export default Button