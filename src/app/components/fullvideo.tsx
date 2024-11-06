import React, { useRef } from 'react';

type FullscreenVideoProps = {
    src: string,
    setImageCount: React.Dispatch<React.SetStateAction<number>>;
}

function FullscreenVideo({ src, setImageCount }: FullscreenVideoProps) {

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleVideoLoaded = () => {
        setImageCount(prevCount => prevCount + 1);
    }

    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                preload='auto'
                ref={videoRef}
                src={`${src}#t=0.001`}
                style={{ width: '100%', display: 'inline-block' }}
                onLoadedData={handleVideoLoaded}
            >
            </video>
        </div>
    );
}

export default FullscreenVideo;
