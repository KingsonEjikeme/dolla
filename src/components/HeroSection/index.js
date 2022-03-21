import React from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements';
import Video from '../../videos/video1.mp4'
import { useState } from 'react';
import {Button} from '../../components/Sidebar/ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover)
    }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
                Create an account in 1 minute and receive N30,000 credit bonus towards your next payment.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                primary="true" dark="true">
                    Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;