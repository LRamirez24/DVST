
import { motion } from "framer-motion"
import Link from 'next/link'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Background() {
  
  
    const variants = {
    hidden: { 
      scale: 1,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
    transition: {
      delay: .9,
      duration: 0.5
    }
    },
  }

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


  return (
      <section className='animations-back'>
       <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}>  

    <div>
    <Particles
    className="particles"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 0.9,
            },
          },
        },
        particles: {
          color: {
            value: "#F2F2F2",
          },
          links: {
            color: "#F2F2F2",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
    </div>
    </motion.div>
    
      </section>

  );
}