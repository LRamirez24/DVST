import Image from 'next/image'
import logo from '../public/images/logo-mid.svg'
import discord from '../public/images/discord.svg'
import github from '../public/images/github.svg'
import twitter from '../public/images/twitter.svg'
import youtube from '../public/images/youtube.svg'
import instagram from '../public/images/instagram.svg'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Footer() {
  const variants = {
    hidden: { 
      scale: 1,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
    transition: {
      delay: .4,
      duration: 0.5
    }
    },
  }
  return (
      <section className='footer-main'>
         <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}>
        <footer>
        <div className='footer-section'>
        <p className='footer-title'>Experience the future of peer to peer finance.</p>
        <a href="#" className='button-footer'>Link Button</a>
        
        </div>
        <hr></hr>

        <div className='footer-section2'>
    <div>
      <div className='footer-logo'>
      <Image
        src={logo}
        alt="Picture of the Logo"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      </div>
   
<p className='footer-text1'>© 2022 DVST
All rights reserved</p>
<ul className='social-icons'>
  <li>   <Image
        src={discord}
        alt="Picture of the Logo"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /></li>
       <li>   <Image
        src={github}
        alt="Picture of the Logo"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /></li>
       <li>   <Image
        src={twitter}
        alt="Picture of the Logo"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /></li>
          <li>   
        <a target="_blank" href="https://www.youtube.com/" rel="noopener noreferrer">
        <Image
        src={youtube}
        alt="Picture of the Logo"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      </a>
          
          
        </li>
        
        <li>   
        <a target="_blank" href="https://www.instagram.com/" rel="noopener noreferrer">
        <Image
        src={instagram}
        alt="Picture of the Logo"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      </a>
          
          
        </li>
      
</ul>

    </div>
    <div>
    <p className='footer-text'>Get in Touch</p>
    <p className='footer-text2'>info@dvst.io</p>
      
      </div>
      <div>
      <p className='footer-text'>Learn More</p>
      <ul className='learn-section'>
        <li>About DVST</li>
        <li>Tokenomics</li>
        <li>Terms of use</li>
        <li>Privacy policy</li>
      </ul>    
      </div>
      <div className='newsletter'>
      <p  className='footer-text'>Our Newsletter</p>
      <p className='footer-text2'>Subscribe to our newsletter to get<br></br> our news & deals delivered to you.</p>
      </div>
        </div>

        </footer>
       
  
    </motion.div>
      </section>

  );
}