import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { Button } from './ui/button';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  thumbnail: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="w-full bg-black rounded-lg overflow-hidden shadow-lg">
      <div className="relative group">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={thumbnail}
          className="w-full aspect-video"
          onClick={togglePlayPause}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={togglePlayPause}
                className="text-white hover:bg-white/20"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="text-white hover:bg-white/20"
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="text-white hover:bg-white/20"
            >
              <Maximize className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="icon"
              onClick={togglePlayPause}
              className="rounded-full w-20 h-20 bg-white/90 hover:bg-white"
            >
              <Play className="w-10 h-10 text-black" />
            </Button>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-gray-900 text-white">
        <h3 className="font-semibold">{title}</h3>
      </div>
    </div>
  );
};
