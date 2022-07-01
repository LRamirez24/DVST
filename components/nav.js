import Image from 'next/image'
import logo from '../public/images/logo-mid.svg'
import logo2 from '../public/images/logo-dvst-small.svg'
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
     
            <Image
        src={logo2}
        alt="Picture of the Logo"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          </div>


          <div className='logo-nav'>
      

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
          
          
        {/* <nav>
        <Image
        src={logo2}
        alt="Picture of the Logo2"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
            <ul>
                <li><a className='hover-underline-animation' href="#">Tokenomics</a></li>
              
            </ul>
        </nav> */}
    </header>
    {/* <div className='navline-section'>
    <hr className='nav-line'></hr>
    </div> */}
    
    </motion.div>
      </section>

  );
}