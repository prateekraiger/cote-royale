import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Lazy } from "@/components/Lazy";

/**
 * Props for `Video`.
 */
export type VideoProps = SliceComponentProps<Content.VideoSlice>;

/**
 * Component for "Video" Slices.
 */
const Video: FC<VideoProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-neutral-900 py-12 md:py-20"
    >
      <h2 className="sr-only">Cote Royale Video Reel</h2>
      <Lazy
        rootMargin="1500px"
        className="relative overflow-hidden aspect-video max-w-6xl mx-auto"
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${slice.primary.youtube_video_id}?autoplay=1&mute=1&loop=1&playlist=${slice.primary.youtube_video_id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute inset-0 w-full h-full"
        />
      </Lazy>
    </section>
  );
};

export default Video;
