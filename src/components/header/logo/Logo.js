import React from 'react';

import YouTubeLogoLight from './YouTube-logo.png'
import YouTubeLogoDark from "./YouTube-dark.png";


const Logo = () => {
    return (
        <div>
            <img src={YouTubeLogoDark} alt='youtube logo' style={{width:'150px'}}/>
        </div>
    )
}

export default Logo