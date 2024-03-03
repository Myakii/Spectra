import React from "react";
import "./css/BlockImageText.css";

interface BlockImageTextProps {
  className?: string;
  children: React.ReactNode;
  img: string;
}

const BlockImageText: React.FC<BlockImageTextProps> = ({
  className,
  children,
  img,
}) => {
  return (
    <div className={`Block-image-text ${className}`}>
      <div className="Left-content">
        <img src={img} className="image" alt="" />
      </div>
      <div className="Right-content">{children}</div>
    </div>
  );
};

export default BlockImageText;
