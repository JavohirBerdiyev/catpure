import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Images
import athlete from '../img/athlete-small.png';
import therecer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import { fade, photoAnim,lineAnim, slider, sliderContaner}  from '../animation';

const OurWork = () => {
  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <motion.div variants={sliderContaner}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Moive>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Moive>
      <Moive>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={therecer} alt="The Racer" />
        </Link>
      </Moive>
      <Moive>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="athlete" />
        </Link>
      </Moive>
    </Work>
  )
}

const Work = styled(motion.div)`
  background: #fff;
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`

const Moive = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
    background: #23d997;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
const Hide = styled.div`
  overflow: hidden;
`

// Frame Animation

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2
`

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;
`


export default OurWork;