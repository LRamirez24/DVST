import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image'
import utilStyles from '../styles/Home.module.css';
import Nav from '../components/nav';
import Footer from '../components/footer';
import icon from '../public/images/icon4.svg'
import vector from '../public/images/bitcoin.svg'
import number from '../public/images/number2.svg'
import number2 from '../public/images/number3.svg'
import number3 from '../public/images/number4.svg'
import man from '../public/images/robot2.svg'

import { motion } from "framer-motion"

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
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
        
      
      <Nav />
      <section className="jumbo">
      
      <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}>  

      <div className='main-text'>
        <h1>Quantum<br></br> <span className='title-color'>Finance</span></h1>
        <p>
        The first decentralized, multi-chain, post-quantum secure<br></br>
        exchange ecosystem.
        </p>
        <div className='buttons-main'>
        <a href="#" className='button-main'>Join Us</a>
        <a href="#" className='button-main2'>More Info</a>
        </div>
        </div> 
        
        </motion.div>
      
        <motion.div
    initial="hidden"
    animate="visible"
    variants={variants3}> 
      {/* <div className='sub-heading'>
      <p>
        The first decentralized, multi-chain, post-quantum secure<br></br>
        exchange ecosystem.
        </p>
      </div> */}


<div className='main-image'>
<Image className='robot'
        src={man}
        alt="Picture of the Robot"
        width={700} 
        height={1000} 
        
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
</div>
  



        </motion.div>
      </section>
      <section>
      <motion.div
    initial="hidden"
    animate="visible"
    variants={variants2}>  
        <div className='middle-section'>
        <p>What is DVST?</p>
        <h2>The substrate for transacting in the<br></br> quantum age.</h2>
        </div>
        </motion.div>
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
            <h3>Cryptographic: Messaging Protocol</h3>
            <p>In our opinion, our top financial innovation is the creation and standardization of liquidity across collateralization markets. This is important because it extends well beyond distributed ledger assets (like cryptocurrency). This will allow us to produce extremely lucrative services to retail investors that fix many fiat onboarding problems.</p>
          <a href='#'>Learn More</a>
          </div>
          <div className='card2'>
          <Image
        src={icon}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>Decentralized order book exchange</h3>
            <p>In our opinion, our top financial innovation is the creation and standardization of liquidity across collateralization markets. This is important because it extends well beyond distributed ledger assets (like cryptocurrency). This will allow us to produce extremely lucrative services to retail investors that fix many fiat onboarding problems.</p>
            <a>Learn More</a>
          </div>
          <div className='card3'>
          <Image
        src={icon}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>DAO + revolutionary economics</h3>
            <p>In our opinion, our top financial innovation is the creation and standardization of liquidity across collateralization markets. This is important because it extends well beyond distributed ledger assets (like cryptocurrency). This will allow us to produce extremely lucrative services to retail investors that fix many fiat onboarding problems.</p>
            <a href='#'>Learn More</a>
          </div>
          <div className='card4'>
              <Image
        src={icon}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>DVST Trading Desk Alerts </h3>
            <p>In our opinion, our top financial innovation is the creation and standardization of liquidity across collateralization markets. This is important because it extends well beyond distributed ledger assets (like cryptocurrency). This will allow us to produce extremely lucrative services to retail investors that fix many fiat onboarding problems.</p>
            <a href='#'>Learn More</a>
          </div>
        </div>
      </section>
      <section>
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
          <h3 className='how-subtitle'>Exchange directly</h3>

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
      </section>
      <Footer />
      
      
    </Layout>
    
  );
}