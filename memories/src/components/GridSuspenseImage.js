import React, { Suspense } from "react";
import PropTypes from "prop-types";

export default function GridSuspenseImage(props) {
  const { src, height, alt } = props;
  return (
    <Suspense
      delay={`1ms`}
      fallback={<img src={src} height="4rem" width="4rem" alt={alt} />}
    >
      <img
        src={src}
        height={height}
        width="100%"
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </Suspense>
  );
}

GridSuspenseImage.propTypes = {
  src: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string,
};

GridSuspenseImage.defaultProps = {
  src: "",
  height: "100%",
  alt: "",
};
