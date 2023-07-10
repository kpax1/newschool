import { RefObject, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import video from "/video.mp4";
import Head from "./Header";
import RightMenu from "./Menu";
import Services from "./Services";
import CircleLoader from "react-spinners/CircleLoader";
import Aboutus from "./Aboutus";
import Gallery from "./Gallery";

const imgArray = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];

function App() {
  const [isOpen, setOpen] = useState<any>(false);
  const myDivRef = useRef<HTMLDivElement>(null);
  const [services, setServices] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  const handleClick = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }

    setOpen(false);
  };


  
  return (
    <Wrapper>
      <Head isOpen={isOpen} setOpen={setOpen} />

      {isOpen && (
        <RightMenu
          myDivRef={myDivRef}
          aboutRef={aboutRef}
          handleClick={handleClick}
          galleryRef={galleryRef}
        />
      )}

      {loading ? (
        <div className="load">
          <CircleLoader
            color="silver"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <video
            className="video"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="bg-overley"> </div>
        </>
      )}

      <Content ref={myDivRef}>
        <Services services={services} setServices={setServices} />
      </Content>

      <Aboutus aboutRef={aboutRef} />

      <motion.div
        className="o"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1, transform: "scale(1)" }}
        transition={{ type: "spring" }}
      >
        <button className="order" onClick={() => handleClick(myDivRef)}>
          Services
        </button>
      </motion.div>



     <Gallery
     galleryRef={galleryRef}
     imgArray={imgArray}
     />
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
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
