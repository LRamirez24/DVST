import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image'
import utilStyles from '../styles/Home.module.css';
import Nav from '../components/nav';
import Footer from '../components/footer';
import icon from '../public/images/arrow.svg'
import icon2 from '../public/images/book.svg'
import icon3 from '../public/images/money.svg'
import icon4 from '../public/images/alert3.svg'
import icon5 from '../public/images/wallet.svg'
import vector from '../public/images/robot-sitting.svg'
import number from '../public/images/number-test.svg'
import number2 from '../public/images/number-test2.svg'
import number3 from '../public/images/number-test3.svg'
import man from '../public/images/robot2.svg'
import { motion } from "framer-motion"


import Link from 'next/link'

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
        <h1><span className='title-color'>Quantum</span><br></br> <span className='title-color2'>Finance</span></h1>
        <p>
        The first decentralized, cross-chain, post-quantum secure<br></br>
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
        // width={700} 
        // height={1000} 
        
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
        <h2>The best way to transact digitally <br></br> in the quantum age..</h2>
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
            <p>Most decentralized exchanges (DEX) are limited to a specific blockchain. DVST's cutting edge cryptographic messaging protocol allows for a truly decentralized cross-chain experience. This makes DVST your one-stop-shop for ALL cryptos.</p>
          <a href='#'>Learn More</a>
          </div>
          <div className='card2'>
          <Image
        src={icon2}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>Decentralized order book exchange</h3>
            <p>Hight gas fees got you down? Transfer your assets in a DVST Particle — on an open, auditable order book, powered by Solana. The DVST orderbook is fully functional and onchain using the fastest and cheapest blockchain technology available</p>
            <a href='#'>Learn More</a>
          </div>
          <div className='card3'>
          <Image
        src={icon3}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>DAO + revolutionary economics</h3>
            <p>Crypto prices can be more volatile than other assets. DVST has developed a self adjusting rewards & staking system to protect the value of all token holders. We built a minimum cost exchange and rebate fees are paid to users.</p>
            <a href='#'>Learn More</a>
          </div>
          {/* <div className='card4'>
              <Image
        src={icon4}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>DVST Trading Desk Alerts </h3>
            <p>With DVSTs Moonpay partnership, buying crypto is easy. Don’t have an existing wallet? New to crypto? Buy coins on DVST with your credit or debit card. Supports cross-chain token launches. Get started with our true multi-chain wallet </p>
            <a href='#'>Learn More</a>
          </div> */}

          <div className='center-card'>
            <div className='card5'>
              <Image
        src={icon4}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>DVST Trading Desk Alerts </h3>
            <p>With DVSTs Moonpay partnership, buying crypto is easy. Don’t have an existing wallet? New to crypto? Buy coins on DVST with your credit or debit card. Supports cross-chain token launches. Get started with our true multi-chain wallet </p>
            <a href='#'>Learn More</a>
          </div> 

          <div className='card6'>
              <Image
        src={icon5}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>DVST Multi-Chain Wallet</h3>
            <p>The DVST wallet is a comprehensive onboarding for users regardless of what they want to buy or which chain it is on.  It is a cross chain wallet that allows for the management of assets and multiple key sets. The world's first truly cross-chain decentralized exchange.</p>
            <a href='#'>Learn More</a>
          </div>

          {/* <div className='card6'>
              <Image
        src={icon5}
        alt="Picture of the Icon"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
          <h3>DVST Multi-Chain Wallet</h3>
            <p>The DVST wallet is a comprehensive onboarding for users regardless of what they want to buy or which chain it is on.  It is a cross chain wallet that allows for the management of assets and multiple key sets. No bridges, no wrapped tokens, and no additional blockchains. We are also introducing Supports multi-chain NFT drops. The world's first truly cross-chain decentralized exchange that facilitates interoperability.</p>
            <a href='#'>Learn More</a>
          </div> */}


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

          {/* <div className='last-section'>
        <p>How DVST FIXES THE HIGH TRANSACTION COSTS?</p>
        <h2>Our Solution & Innovations</h2>
        </div> */}

        

          

        </div>
      </section>
      <Footer />
      
      
    </Layout>
    
  );
}