import { motion} from 'framer-motion/dist/framer-motion'

const transition = { ease: [0.17, 0.67, 0.83, 0.67], type: "spring", stiffness: 70  };

const Parallax = ({ children, offset = 50, diff=0, current=0,duration=0.3 }) => {
    const animate = {
        x : -current + offset,
        skewX: diff,
        skewY: diff,
        opacity: 1,
        transition: {...transition, duration: duration}
    };

    return (
        <motion.div animate={animate}>
            {children}
        </motion.div>
    )
}

export default Parallax