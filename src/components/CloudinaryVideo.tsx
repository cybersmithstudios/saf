import { useEffect, useRef } from "react";

type CloudinaryVideoProps = {
  cloudName?: string;
  publicId: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
};

// Lightweight Cloudinary player using native video tag and HLS manifest
// Requires HLS source delivery to be enabled on the Cloudinary account
const CloudinaryVideo = ({
  cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string,
  publicId,
  className,
  autoPlay = false,
  controls = true,
}: CloudinaryVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Build HLS URL, fallback to mp4 if HLS not supported
  const hlsUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${publicId}.m3u8`;
  const mp4Url = `https://res.cloudinary.com/${cloudName}/video/upload/${publicId}.mp4`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const canPlayHls = video.canPlayType("application/vnd.apple.mpegurl");
    if (canPlayHls) {
      video.src = hlsUrl;
    } else {
      video.src = mp4Url;
    }
  }, [hlsUrl, mp4Url]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      muted={autoPlay}
      playsInline
      controls={controls}
      preload="metadata"
    />
  );
};

export default CloudinaryVideo;



