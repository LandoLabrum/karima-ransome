import React, { useEffect } from 'react';
import Services from "../components/GridList"
import header from '../media/slider/1.jpeg';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion"


export default function Home() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    console.log(inView)
    return (<div className="secondary">
        <motion.div
            animate={{ x: "100%" }}
            transition={{ delay: 1 }}
        >
            <img className="responsive-img left-in" src={header} />
        </motion.div>
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
        >
            <Services />
        </motion.div>
    </div >
    );
}