import { gsap } from "gsap";
import { useEffect } from "react";
import { UilConstructor } from '@iconscout/react-unicons'

const IntroScreen = () => {
    useEffect(() => {
        console.log('start')
        const tl = gsap.timeline({repeat: 0});
        tl.to('#intro-resume', {delay: .5, duration: 1, opacity: 1})
        tl.to('#intro-maker', {duration: 1, top: 0, opacity: 1})
        tl.to('#intro-dev',  {duration: 1, right: 0, opacity: 1})
        tl.to('#intro-icon',  {duration: 1, opacity: 1})

        tl.to('#into-page',  {duration: 1, delay: 1, top: '-4rem', height: 0})
        tl.to('#into-page',  {opacity: 0})
        gsap.to('#intro-text-container',  {delay: 5.5, duration: 1, y: '-20rem', height: 0})
    }, [])

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
