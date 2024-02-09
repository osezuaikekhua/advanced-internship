import React, { useRef, useState } from 'react'
import { tracks } from '../../data/tracks';

// import components
import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'


function AudioPlayer() {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    

    const audioRef = useRef();
    const progressBarRef = useRef();

  
    return (
    <div className='audio-player'>
        <div className='inner'>
            <DisplayTrack 
                currentTrackSrc={currentTrack.src} 
                currentTrackThumbnail={currentTrack.thumbnail}
                currentTrackTitle={currentTrack.title}
                currentTrackAuthor={currentTrack.author}
                {...{audioRef, setDuration, progressBarRef}}
            />
            <Controls {...{ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, }}/>
            <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }}/>
        </div>
    </div>
  )
}

export default AudioPlayer