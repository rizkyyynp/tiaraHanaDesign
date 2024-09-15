import { useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export default function Hero() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const handleMuteToggle = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="relative w-full h-[100vh]">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted={isMuted}
                    loop
                >
                    <source src="/tiarahana.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <button
                    onClick={handleMuteToggle}
                    className="absolute bottom-4 right-4 bg-white bg-opacity-75 p-2 rounded-full shadow-lg hover:bg-opacity-100 transition 
                    w-10 h-10 md:w-12 md:h-12"
                >
                    {isMuted ? (
                        <FaVolumeMute className="text-gray-800 w-full h-full" />
                    ) : (
                        <FaVolumeUp className="text-gray-800 w-full h-full" />
                    )}
                </button>
            </div>
        </div>
    );
}
