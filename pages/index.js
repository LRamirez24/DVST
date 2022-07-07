import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image'
import utilStyles from '../styles/Home.module.css';
import Nav from '../components/nav';
import Footer from '../components/footer';
import icon from '../public/images/arrow-brand.svg'
import arrow from '../public/images/arrow-large.svg'
import icon2 from '../public/images/book-brand.svg'
import icon3 from '../public/images/money-brand.svg'
import icon4 from '../public/images/alert-brand.svg'
import icon5 from '../public/images/wallet-brand.svg'
import vector from '../public/images/bitcoin.svg'
import number from '../public/images/number-purple1-2.svg'
import number2 from '../public/images/number-purple2-2.svg'
import number3 from '../public/images/number-purple3-2.svg'
import man from '../public/images/hand.png'
import { motion } from "framer-motion"
import Link from 'next/link'
import Background from '../components/background';



export default function Home() {
  const variants = {
    hidden: { 
      scale: 0.7,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
    transition: {
      delay: .7,
      duration: .7
    }
    },
  }

  const variants2 = {
    hidden: { 
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
    transition: {
      delay: .8,
      duration: .8
    }
    },
  }

  const variants3 = {
    hidden: { 
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1
    }
    },
  }

  const variants4 = {
    hidden: { 
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
    transition: {
      delay: 1.4,
      duration: 1.4
    }
    },
  }

  
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      
   
        
      {/* <Background /> */}
      <Nav />
      
     
      <section className="jumbo">
      
      <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}>  

      <div className='main-text'>
        <h1><span className='title-color'>Quantum </span><span className='title-color2'>Finance</span></h1>
        <p>
        A Decentralized, Cross-Chain, Post Quantum<br></br> Secure Exchange Ecosystem.
        </p>
        {/* <div className='buttons-main'>
        <a href="#" className='button-main'>Join Now</a>
        <a href="#" className='button-main2'>More Info</a>
        </div> */}
        {/* <div className='arrow'>
        <Image className='robot'
        src={arrow}
        alt="Picture of the arrow"
        // width={700} 
        // height={1000} 
        
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        </div> */}
        </div> 
        
        </motion.div>
      
        <motion.div
    initial="hidden"
    animate="visible"
    variants={variants3}> 
   


{/* <div className='main-image'>
<Image className='robot'
        src={man}
        alt="Picture of the Robot"
        // width={700} 
        // height={1000} 
        
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      
</div> */}

        </motion.div>

       
     
        <div className='skewed'></div>
        
      </section>

      



      


    
      
      <section>
      {/* <motion.div
    initial="hidden"
    animate="visible"
    variants={variants2}>  
        <div className='middle-section'>
        <p>What is DVST?</p>
        <h2 className='middle-heading'>The best way to transact digitally<br></br> in the quantum age..</h2>
        </div>

        </motion.div> */}
    <motion.div
    initial="hidden"
    animate="visible"
    variants={variants4}> 

<div className='core-products'>
<h2>Core Innovations:</h2>
</div>
</motion.div>


<motion.div
    initial="hidden"
    animate="visible"
    variants={variants4}> 

        <div className='cards'>
          <div className='card1'>
          <Image
        src={icon}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
            <h3>Cross-Chain Portability</h3>
            <p>The cryptographic primitives embedded into the SDK that allow for the non-custodial transfer of assets between parties regardless of their initial blockchains. No bridges, no wrapped tokens, and no additional blockchains.</p>
          {/* <a className='hover-underline-animation' href='#'>Learn More</a> */}
          </div>

      

          <div className='card2'>
          <Image
        src={icon3}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>Transaction Fee Rebate Mechanism</h3>
            <p>The tokenomic mechanism that creates a new fiduciary reserve instrument which is used to reimburse the value of a transaction fee and ultimately pay users back.</p>
            {/* <a className='hover-underline-animation' href='#'>Learn More</a> */}
          </div>

          <div className='card3'>
              <Image
        src={icon4}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>Post Quantum Secure</h3>
            <p>A cryptographic system protecting users from the coming regime of 320+ qubit quantum computing.</p>
            {/* <a className='hover-underline-animation' href='#'>Learn More</a> */}
          </div>
          



  

      


        

  
       

          <div className='center-card'>

          <div className='card4'>
          <Image
        src={icon2}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>The DVST Exchange</h3>
            <p>An on-chain decentralized exchange order book that utilizes the cryptographic primitives in a seamless way.</p>
            {/* <a className='hover-underline-animation' href='#'>Learn More</a> */}
          </div>

    

            <div className='card5'>
              <Image
        src={icon5}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>The DVST Wallet</h3>
            <p>A cross chain wallet allowing for comprehensive onboarding of users regardless of what they want to buy or which chain it is on.</p>
            {/* <a className='hover-underline-animation' href='#'>Learn More</a> */}
          </div> 

      

     

   


          </div>


        </div>
        </motion.div>
      </section>
      {/* <section>
        <div className='how-section'>
          <div className='vector-image'>
          <Image
        src={vector}
        alt="Picture of the Vector"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          </div>
        
          <div className='how-text'>
          <p className='how-title'>HOW DOES DVST WORK? </p>
          <h3 className='how-subtitle'>Exchange Directly</h3>

          <div className='info-section'>
            <div className='info-image'>
            <Image
        src={number}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
            </div>

            <div className='info-text2'>
              <h4>Commit funds</h4>
            <p className='section-text'>
Make funds visible in the marketplace by wrapping assets in the DVST protocol.</p>
            </div>
          </div>

          <div className='info-section'>
            <div className='info-image'>
            <Image
        src={number2}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
            </div>

            <div className='info-text2'>
              <h4>Place buy, sell, and trade orders</h4>
            <p className='section-text'>Review and select your pairs to exchange.</p>
            </div>
          </div>

          <div className='info-section'>
            <div className='info-image'>
            <Image
        src={number3}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
            </div>

            <div className='info-text2'>
              <h4>Fulfill transactions directly; peer-to-peer</h4>
            <p className='section-text'>Exchange assets directly, supported by an open orderbook</p>
            </div>
            

         
          </div>

        


       





          </div>

        

        

          

        </div>
      </section> */}
      <Footer />
      
      
    </Layout>
    
  );
}