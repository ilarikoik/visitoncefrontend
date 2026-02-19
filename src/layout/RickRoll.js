import { use, useEffect } from "react";
import { useState } from "react";

export default function RickRoll() {
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    setMuted(false);
  }, []);
  return (
    <div className="bg-black min-h-screen w-full flex items-center justify-center">
      <div className="w-4/5" style={{ aspectRatio: "16/9" }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=${muted ? 1 : 0}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
