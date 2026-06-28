import { useState } from 'react'

const ImageWithSkeleton = ({ src, alt, className, containerClassName }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${!loaded ? 'shimmer' : ''} ${containerClassName || ''}`}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${className} ${!loaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      />
    </div>
  );
};

export default ImageWithSkeleton;