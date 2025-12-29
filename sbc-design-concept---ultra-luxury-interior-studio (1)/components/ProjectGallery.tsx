import React, { useEffect, useRef } from "react";

const items = [
  { video: "/videos/sbcproject1.mp4" },
  { video: "/videos/sbcproject2.mp4" },
  { video: "/videos/sbcproject3.mp4" },
  { video: "/videos/sbcproject4.mp4" },
  { video: "/videos/sbcproject5.mp4" },
  { video: "/videos/sbcproject6.mp4" },
];

const ProjectsVideoGrid: React.FC = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach(video => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[420px] rounded-[2rem] overflow-hidden"
          >
            <video
              ref={el => el && (videoRefs.current[index] = el)}
              src={item.video}
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsVideoGrid;
