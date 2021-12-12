import React, { useEffect } from 'react'
import Services from "../components/GridList";
import header from '../media/slider/1.jpeg'
// import { useInView } from "react-intersection-observer";
// import { motion, useAnimation } from "framer-motion"
import logo from '../media/logo.png'


// export default function Home() {
//     const controls = useAnimation();
//     const [ref, inView] = useInView();

//     useEffect(() => {
//         if (inView) {
//             controls.start("visible");
//         }
//     }, [controls, inView]);
//     console.log(inView)
//     return (<div className="secondary">
//         <div className='containerb valign-wrapper'>
//             <img className="imgb" src={header} />
//             {/* <motion.div
//                 animate={{ x: "800px" }}
//                 transition={{ ease: "easeIn", duration: .8 }}
//             > */}
//                     <div className=''>
//                 <div className="overlayb">
//                         <img className="imga" src={logo} />
//                     </div>
//                 </div>
//             {/* </motion.div> */}
//         </div>
//         <Services />
//     </div >
//     );
// }
// import React from 'react';
// import Services from "../components/GridList"
// import header from '../media/slider/1.jpeg';
// import logo from '../media/logo.png';


export default function Home() {

    return (<div className="secondary ">

        <div className='containerb valign-wrapper'>
            <img className="imgb" src={header} />
            <div className="wrapper">
                <div id="slide" className='valign-wrapper'>
                    <img className="imga" src={logo} />
                    <small className='imga-text'><h5 className='imga-text-title'>Nu-Birth Home Care Services</h5>1293 Professional dr 
Myrtle Beach SC 29577</small>
                    
                </div>
            </div>
        </div>
        <Services />
    </div >
    );
}