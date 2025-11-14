import React from 'react';

interface SectionDividerProps {
  fillColor: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ fillColor }) => {
  return (
    <div className="relative w-full h-16 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C50,0 50,0 100,100 L100,100 L0,100 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
