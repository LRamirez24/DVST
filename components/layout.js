import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/Home.module.css';
import Link from 'next/link';
import ball from '../public/images/ball.jpg';

const name = 'Luis Ramirez';
export const siteTitle = 'DVST Quantum Finance';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/logo2.svg" />
        <meta
          name="description"
          content="DVST Quantum Finance
          A Decentralized, Cross-Chain, Post Quantum
          Secure Exchange Ecosystem. Learn More Here"
        />

        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        

        {/* <meta property="og:url" content="your url" />
        <meta property="og:type" content="website" /> */}
      
   
        <meta
          property="og:description"
          content="DVST Quantum Finance
          A Decentralized, Cross-Chain, Post Quantum
          Secure Exchange Ecosystem. Learn More Here"
        />

        <meta property="og:image" content={ball}  />

        <meta property="og:image" content={href="https://images.unsplash.com/photo-1627645812426-67ce7b0a7a81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"}  />


      </Head>

      
      <main>{children}</main>
    </div>
  );
}