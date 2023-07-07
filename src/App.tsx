import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import video from "/video.mp4";
import Head from './Header'
import RightMenu from "./Menu";
import Services from "./Services";
import CircleLoader from "react-spinners/CircleLoader";


const imgArray = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];

function App() {
  const [isOpen, setOpen] = useState<any>(false);
  const myDivRef = useRef<HTMLDivElement>(null);
  const [services, setServices] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timeoutID = setTimeout(()=> {
    setLoading(false)},900);

    return()=>{
      clearTimeout(timeoutID)
    }
  },[])


  const handleClick = () => {
    if (myDivRef.current) {
      myDivRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setOpen(false);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <Wrapper>
      <Head isOpen={isOpen} setOpen={setOpen}/>
      
      {isOpen && (
        <RightMenu  handleClick={handleClick}/>
      )}



        {loading ?
        <div className="load">
        <CircleLoader
        color='silver'
        loading={loading}
       
    

        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> 
      </div>
      :

 (    
  <>
  <video className="video" src={video} autoPlay loop muted playsInline />
      <div className="bg-overley"> </div>
      </>
 )
        }
        
    

   

      <Content ref={myDivRef}>

       <Services services={services} setServices={setServices}/>
        
        
      
      </Content>

      <div className="info">
        <motion.div
          className="s"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transform: "scale(1)" }}
        >
          <div className="ordersection">
            <h1> about us</h1>
          </div>

          <div className="inform">
            Attention all DJs in Tbilisi! Are you tired of practicing your sets
            at home, or struggling to find a suitable place to record your
            tracks? Look no further than “Newschool”, the newest and most state
            of the art DJ studio in town! Our studio is fully equipped with the
            latest gear including the top of the line CdJ 3000 & 2000 NXS2 x2 as
            well as the industry standard mixer Xone92 & Xone 96. We also have a
            powerful sound system KRK Rokit8 & Yamaha HS8 speakers to ensure
            your mixes sound crystal clear. Newschool is now available for
            rental, whether you’re a seasoned pro or just starting out in the
            world of DJing. Use our space to record your next mix, practice your
            sets before a big gig, or even host a listening party for your
            friends. Don’t miss out, take your DJing to the next level. Contact
            us to book your session at Newschool.
          </div>
        </motion.div>
      </div>

      <motion.div
        className="o"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1, transform: "scale(1)" }}
        transition={{ type: "spring" }}
      >
        <button className="order" onClick={handleClick}>
          Services
          </button>
      </motion.div>

      <div className="zina">
        <motion.div
          className="gallery"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring" }}
        >
          Gallery
        </motion.div>
        <motion.div
          className="ziniko"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: 1 }}
          transition={{ type: "spring" }}
        >
          <motion.div
            className="photos"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {imgArray.map((pic) => (
              <motion.div key={pic} className="item" variants={item}>
                <img  src={pic} alt="" className='galleryiimg'/>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="p"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          ALL RIGHT RESERVED
          <p className="bottomtext">
            © 2023 for
            <span className="logonottom"> NWSChool</span>
          </p>
        </motion.div>
      </div>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  transition: 0.5s;
`;




const Content = styled.div`
  background-color: #000000f3;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
