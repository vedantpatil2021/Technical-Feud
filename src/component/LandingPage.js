import React from 'react'
import '../App.css'

function LandingPage() {
    return (
        <div className='landing-page-div'>
            <div className='score'>
                <div className='score-subdiv'>8</div>
            </div>
            <div className='grid'>
                <div className='whole-section'>
                    <div className='answer'></div>
                    <div className='answer'></div>
                    <div className='answer'></div>
                    <div className='answer'></div>
                </div>
                <div className='whole-section'>
                    <div className='answer'></div>
                    <div className='answer'></div>
                    <div className='answer'></div>
                    <div className='answer'></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
