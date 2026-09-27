import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

interface TechHeadingProps {
  text: string;
  highlight?: string;
  highlightClass?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'div' | 'span';
}

export const TechHeading: React.FC<TechHeadingProps> = ({
  text,
  highlight,
  highlightClass = 'text-cyan-400',
  className = '',
  as: Component = 'h2',
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [typedLength, setTypedLength] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const total = text.length;
    // Clean, natural typing speed
    const interval = setInterval(() => {
      index++;
      setTypedLength(index);
      if (index >= total) {
        setIsDone(true);
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [isInView, text]);

  // Current visible slice of the text
  const currentText = isInView ? text.slice(0, typedLength) : text;

  // Format highlighted word cleanly
  const renderFormattedText = (content: string) => {
    if (!highlight || !content.toLowerCase().includes(highlight.toLowerCase())) {
      return content;
    }

    const parts = content.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => {
      if (part.toLowerCase() === highlight.toLowerCase()) {
        return (
          <span key={i} className={highlightClass}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <Component
      ref={ref}
      aria-label={text}
      className={`relative inline-block ${className}`}
    >
      <span>{renderFormattedText(currentText)}</span>

      {/* Simple, clean blinking typing caret */}
      {!isDone && isInView && (
        <span className="inline-block w-[2px] h-[0.9em] align-middle ml-1 bg-cyan-400 animate-pulse" />
      )}
    </Component>
  );
};
