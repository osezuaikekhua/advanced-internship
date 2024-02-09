import React, { useCallback, useEffect, useRef, useState } from 'react'

// icons
import {
    IoPlayBackSharp,
    IoPlayForwardSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPlaySharp,
    IoPauseSharp,
} from 'react-icons/io5';

function Controls({ 
    audioRef,
    progressBarRef,
    duration,
    setTimeProgress, 
    tracks,
    trackIndex,
    setTrackIndex,
    setCurrentTrack,}) {


    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };


    const playAnimationRef = useRef();


    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / duration) * 100}%`
        );
        playAnimationRef.current = requestAnimationFrame(repeat);
        
    }, [audioRef, duration, progressBarRef, setTimeProgress]);


    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat]);


    const skipForward = () => {
        audioRef.current.currentTime += 10;
    };

    const skipBackward = () => {
        audioRef.current.currentTime -= 10;
    };


      

    return (
        <div className="controls-wrapper">
            <div className="controls">
                
                <button onClick={skipBackward}>
                    <IoPlayBackSharp />
                </button>

                <button onClick={togglePlayPause}>
                    {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </button>

                <button onClick={skipForward}>
                    <IoPlayForwardSharp />
                </button>
                
            </div>
        </div>
    );
}

export default Controls