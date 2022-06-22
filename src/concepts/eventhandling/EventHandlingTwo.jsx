import React from "react";

function PlayVideo() {

    const [videoStatus, setVideoStatus] = React.useState('');

    return(
        <div>
            <p>Video {videoStatus}</p>
            <button onClick={() => setVideoStatus('Playing')}>Play</button>
            <button onClick={() => setVideoStatus('Paused')}>Pause</button>
        </div>
    )
}

export default PlayVideo;