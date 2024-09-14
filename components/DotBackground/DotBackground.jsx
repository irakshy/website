import React from "react";

const DotBackground = ({ children }) => {
  return (
    <div className="dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative w-full items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="dark:bg-black bg-white pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};

export default DotBackground;
