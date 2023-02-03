import { gsap } from "gsap";
import { useEffect } from "react";
import { UilConstructor } from '@iconscout/react-unicons'

const IntroScreen = () => {
    useEffect(() => {
        gsap.to('#intro-resume', {delay: .5, opacity: 1})
        gsap.to('#intro-maker', {delay: 1, top: 0, opacity: 1})
        gsap.to('#intro-dev',  {delay: 1.5, right: 0, opacity: 1})
        gsap.to('#intro-icon',  {delay: 1.5, opacity: 1})

        gsap.to('#into-page',  {delay: 4, top: '-4rem', height: 0, duration: 2.5})
        gsap.to('#intro-text-container',  {delay: 4, top: '-12rem', height: 0, duration: 2.5})
        gsap.to('#into-page',  {delay: 6.6, opacity: 0})
    })

    return (
        <div id='into-page'>
            <div id='intro-text-container'>
                <span id='intro-resume'>Resume</span><span id='intro-maker'>Maker</span><span id='intro-dev'>.dev</span>
                <UilConstructor id='intro-icon'  color="#242526" />
            </div>

            <div id='intro-bottom-effect1'></div>
            <div id='intro-bottom-effect2'></div>
            <div id='intro-bottom-effect3'></div>
            <div id='intro-bottom-effect4'></div>
            <div id='intro-bottom-effect5'></div>
            <div id='intro-bottom-effect6'></div>
    
        </div>
    )
}

export default IntroScreen
