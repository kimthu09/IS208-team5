import React from "react";
import Image from "next/image";

interface ImageComponentProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
  className?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  width,
  height,
  alt,
  priority = false,
  className = "",
}) => {
  const [isImageLoading, setImageLoading] = React.useState(true);

  return (
    <div className={`relative ${className}`}>
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        onLoad={() => setImageLoading(false)}
        className={`transition-opacity duration-300 ${
          isImageLoading ? "blur-sm opacity-50" : "blur-0 opacity-100"
        }`}
        priority={priority} // Use the priority prop
      />
    </div>
  );
};

export default ImageComponent;
