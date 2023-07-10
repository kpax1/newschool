import { motion } from 'framer-motion'
interface AboutUsProp {
    aboutRef: React.RefObject<HTMLDivElement>;
  }
  
export default function Aboutus({aboutRef}:AboutUsProp) {
  return (

    <div className="info"
    ref={aboutRef}
>


<motion.div
className="s"
initial={{ opacity: 0 }}
whileInView={{ opacity: 1, transform: "scale(1)" }}
>
<div className="ordersection">
  <h1> about us</h1>
</div>

<div className="inform">
  <article>
 <span style={{color:'green', fontWeight:700}}>Attention</span>  all DJs in     Tbilisi!        Are you tired of practicing your sets
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
  </article>
 
</div>
</motion.div>
</div>
    )
}
