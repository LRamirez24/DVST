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

        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg&images=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1627389955800-4afab384df17%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1974%26q%3D80&widths=0&widths=1000&heights=0&heights=800`}
        />


       

        <meta name="og:title" content={siteTitle} />

       

        <meta property="og:type" content="website"/>

        <meta property="og:url" content="https://dvst.io"/>


        <meta name="twitter:card" content="summary_large_image" />

        

   
      
   
     

        {/* <meta property="og:image" content={"https://images.unsplash.com/photo-1627645812426-67ce7b0a7a81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"}/> */}

       



      </Head>

      
      <main>{children}</main>
    </div>
  );
}