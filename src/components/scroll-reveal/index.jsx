import React from "react";
import { motion } from "framer-motion";

// scroll animation

const ScrollReveal = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
