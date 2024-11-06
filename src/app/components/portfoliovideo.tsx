import React, { useState, useRef } from 'react';
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import styles from '../styles/portfoliovideo.module.scss';

type PortfolioVideoProps = {
    src: string,
    setImageCount: React.Dispatch<React.SetStateAction<number>>,
    backgroundColor: string,
    playPauseColor: string,
}

function PortfolioVideo({ src, setImageCount, backgroundColor, playPauseColor }: PortfolioVideoProps) {

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [play, setPlay] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);

    const togglePlay = () => {
        if (videoRef.current) {
            const video = videoRef.current;
            if (play) {
                video.pause();
                setPlay(false);
            } else {
                if (loaded || video.readyState >= 3) { // Check if video is ready to play
                    video.play();
                    setPlay(true);
                } else {
                    video.load(); // Manually load the video
                    video.play(); // Start playing once loaded
                    setPlay(true);
                }
            }
        }
    }

    const handleCanPlayThrough = () => {
        setLoaded(true);
    }

    const handleVideoLoaded = () => {
        setImageCount(prevCount => prevCount + 1);
    }

    return (
        <div className={styles.padding} style={{ backgroundColor: backgroundColor, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div className={styles.absolutePadding} onClick={togglePlay} style={{position: 'absolute', zIndex:'999', cursor:'pointer' }}>
                { !play ?
                <IoPlayCircleOutline color={playPauseColor} fontSize={'3rem'}/> :
                <IoPauseCircleOutline color={playPauseColor} fontSize={'3rem'}/>
                }
            </div>
            <video
                playsInline
                preload='auto'
                ref={videoRef}
                src={`${src}#t=0.001`}
                style={{ width: '100%', display: 'inline-block' }}
                onLoadedData={handleVideoLoaded}
                onCanPlayThrough={handleCanPlayThrough}
            >
            </video>
        </div>
    );
}

export default PortfolioVideo;
