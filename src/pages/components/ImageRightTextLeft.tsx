// blockImageText.tsx
import React from 'react';

interface BlockImageTextProps {
    className?: string;
    children: React.ReactNode;
    img: string;
}

const BlockImageText: React.FC<BlockImageTextProps> = ({ className, children, img }) => {
    return (
        <div className={`Block-image-text ${className}`}>
            <div className="Left-content">
                <img src={img} alt="Image" className="image" />
            </div>
            <div className="Right-content">
                {children}
            </div>
        </div>
    );
}

export default BlockImageText;
