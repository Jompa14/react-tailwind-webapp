import React from 'react';

const Heading = ({ size = 'M', color = 'black', tag = 'h1', title }) => {
  const getSizeProps = (size) => {
    switch (size) {
      case 'XL':
        return {
          fontSize: '250px',
          lineHeight: '200px',
          letterSpacing: '-5px',
        };
      case 'L':
        return {
          fontSize: '96px',
          lineHeight: '80px',
          letterSpacing: '-2px',
        };
      case 'S':
        return {
          fontSize: '32px',
          lineHeight: '40px',
          letterSpacing: '0',
        };
      default:
        return {
          fontSize: '72px',
          lineHeight: '64px',
          letterSpacing: '-2px',
        };
    }
  };

  const sizeProps = getSizeProps(size);

  const Tag = tag;

  return (
    <Tag
        className={`
            font-bold 
            text-${color}
            text-[${sizeProps.fontSize}] 
            tracking-[${sizeProps.letterSpacing}]
        `}

    >
      {title}
    </Tag>
  );
};

export default Heading;
