import React from 'react';

const Heading = ({ size = 'M', color = 'black', tag = 'h3', title, className }) => {
  const getSizeProps = (size) => {
    switch (size) {
      case 'XL':
        return {
          fontSize: 'sm:text-[16.8vw]',
          lineHeight: 'sm:leading-[200px]',
          letterSpacing: 'tracking-[-5px]',
        };
      case 'L':
        return {
          fontSize: 'sm:text-[6.4vw]',
          lineHeight: 'leading-[55px] sm:leading-[90px]',
          letterSpacing: 'tracking-[-2px]',
        };
      case 'S':
        return {
          fontSize: 'sm:text-[2.1vw]',
          lineHeight: 'leading-[30px] sm:leading-[45px]',
          letterSpacing: 'tracking-0',
        };
      default:
        return {
          fontSize: 'sm:text-[4.8vw]',
          lineHeight: 'leading-[45px] sm:leading-[68px]',
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
            text-4xl
            leading-[40px]
            ${color}
            ${sizeProps.fontSize} 
            ${sizeProps.lineHeight}
            ${sizeProps.letterSpacing}
            ${className}
        `}
    >
      {title}
    </Tag>
  );
};

export default Heading;
