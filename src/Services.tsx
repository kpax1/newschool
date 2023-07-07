import { motion, Variants } from "framer-motion";

import back from '/prev.png'
export const item: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transform: "scale(1)" },
};

export default function Services({ services, setServices }: any) {
  console.log(services);
  return (
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transform: "scale(1)" }}
    >
      <div className="ordersection">
        {services === 0 && <h1>Our Services</h1>}
        {services === 1 && (<h1>Rent a studio</h1> )}
        {services === 2 && <h1>Rent equipment</h1>}
        <p>develop yourself</p>
        {(services === 1 || services===2)  && (
            <img src={back} className="back" alt="" 
            onClick={()=>setServices(0)}
            />
        )}

      </div>



      <motion.div className="text" variants={item}>
        Don't miss out, take your DJing to the next level keep in minde
        newSchool
      </motion.div>

      {services === 0 && (
        <div className="buttons">
          <motion.button className="bookstudio" onClick={() => setServices(1)}>
            <div>
              <p>Rent a</p>
              <p>studio</p>
            </div>
          </motion.button>

          <motion.button
            className="bookequipment"
            onClick={() => setServices(2)}
          >
            <div className="equipmenttext">
              <p>Rent</p>
              <p>equipment</p>
            </div>
          </motion.button>
        </div>
      )}

      {services === 1 && (
        <>
          <motion.button
            className="call"
            onClick={() => window.open("tel:+995511332212")}
            initial={{ y: 100, opacity: 0.1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            call
          </motion.button>

          <motion.button
            className="call"
            initial={{ y: 100, opacity: 0.1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <a href="https://calendar.google.com/calendar/u/0/embed?src=nwscrecords@gmail.com&ctz=Asia/Tbilisi&fbclid=IwAR2jCSWxhaQq0W0aqAftsvmFCuKrt67f8XCU7pweM4zemCMn2MsgpfsK-Kw">
              Book Online
            </a>
          </motion.button>

          <motion.button
            className="call"
            onClick={() => window.open("tel:+995511332212")}
            initial={{ y: 100, opacity: 0.1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            about us
          </motion.button>
        </>
      )}

      {services === 2 && <div>aoaooo</div>}
    </motion.div>
  );
}
