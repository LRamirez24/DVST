import Image from 'next/image'
import logo from '../public/images/logo-mid.svg'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Nav() {
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
      <section className="nav">
         <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}>
        <header>
          <div className='logo'>
          <Link href="/">
            <a> 
            <Image
        src={logo}
        alt="Picture of the Logo"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
            </a>
            </Link>
     
          </div>
          
          
        <nav>
            <ul>
                <li><a href="#">Tokenomics</a></li>
                {/* <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li> */}
            </ul>
        </nav>
    </header>
    </motion.div>
      </section>

  );
}