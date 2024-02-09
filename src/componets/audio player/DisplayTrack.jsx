import React from 'react'

import { BsMusicNoteBeamed } from 'react-icons/bs';

function DisplayTrack({ 
  currentTrackSrc, 
  currentTrackThumbnail, 
  currentTrackTitle, 
  currentTrackAuthor, 
  audioRef, 
  setDuration, 
  progressBarRef, 
  }){

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds)
    progressBarRef.current.max = seconds;
  };
  
  
  return (
    <div>
      <audio
        src={currentTrackSrc}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />
      <div className="audio-info">
      <div className="audio-image">  
          {currentTrackThumbnail ? (
            <img src={currentTrackThumbnail} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className="text">
          <p className="title">{currentTrackTitle}</p>
          <p>{currentTrackAuthor}</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayTrack