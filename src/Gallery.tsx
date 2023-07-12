import { motion } from "framer-motion";
import instagram from "/instagram.svg";
import facebook from "/facebook.svg";
import soundcloud from "/soundcloud.svg";

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
export default function Gallery({ galleryRef, imgArray }: any) {
  return (
    <div className="zina" ref={galleryRef}>
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
          {imgArray?.map((pic: any) => (
            <motion.div key={pic} className="item" variants={item}>
              <img src={pic} alt="" className="galleryiimg" />
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
          ©2023
          <span className="logonottom">𝔫𝔢𝔴𝔰𝔠𝔥𝔬𝔬𝔩</span>
        </p>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="social"
        >
                    <a href="https://www.instagram.com/n_w_s_c_/">

            {" "}
            <img className="socialimg" src={instagram} alt="fb" />
          </a>

          <a href="https://www.facebook.com/VakoTaktakishvili">
            {" "}
            <img className="socialimg" src={facebook} alt="fb" />
          </a>
          <a href="https://soundcloud.com/nwscrecords">
            {" "}
            <img className="socialimg" src={soundcloud} alt="insta" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
