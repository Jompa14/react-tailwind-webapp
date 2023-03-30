import React from 'react';

const Heading = ({ size = 'M', color = 'black', tag = 'h1', title }) => {
  const getSizeProps = (size) => {
    switch (size) {
      case 'XL':
        return {
          fontSize: 'text-[250px]',
          lineHeight: 'leading-[200px]',
          letterSpacing: 'tracking-[-5px]',
        };
      case 'L':
        return {
          fontSize: 'text-[96px]',
          lineHeight: 'leading-[80px]',
          letterSpacing: 'tracking-[-2px]',
        };
      case 'S':
        return {
          fontSize: 'text-[32px]',
          lineHeight: 'leading-[40px]',
          letterSpacing: 'tracking-0',
        };
      default:
        return {
          fontSize: 'texxt-[72px]',
          lineHeight: 'leading-[64px]',
          letterSpacing: 'tracking-[-2px]',
        };
    }
  };

  const sizeProps = getSizeProps(size);

  const Tag = tag;

  return (
    <Tag
        className={`
            font-bold 
            ${color}
            ${sizeProps.fontSize} 
            ${sizeProps.lineHeight}
            ${sizeProps.letterSpacing}
        `}

    >
      {title}
    </Tag>
  );
};

export default Heading;
