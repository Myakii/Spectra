import React from "react";

interface HeaderWithBorderProps {
  children: React.ReactNode;
  className?: string;
}

const HeaderWithBorder: React.FC<HeaderWithBorderProps> = ({
  className,
  children,
}) => {
  return (
    <div className={className}>
      <div className="border-line"></div>
      <h3>{children}</h3>
      <div className="border-line"></div>
    </div>
  );
};

export default HeaderWithBorder;
