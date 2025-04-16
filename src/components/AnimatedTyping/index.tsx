import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const AnimatedTyping = ({
  text,
  className = '',
  highlight = '',
  highlightClassName = 'text-primary-500',
}: {
  text: string;
  className?: string;
  highlight?: string;
  highlightClassName?: string;
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    if (index < text.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
    }

    return () => clearTimeout(typingTimeout);
  }, [index, text]);

  useEffect(() => {
    const resetInterval = setInterval(() => {
      setDisplayedText('');
      setIndex(0);
    }, 10000);

    return () => clearInterval(resetInterval);
  }, [text]);

  // Divide em antes/destaque/depois
  const highlightStart = displayedText.indexOf(highlight);
  const beforeHighlight = displayedText.slice(0, highlightStart);
  const highlightText =
    highlightStart >= 0
      ? displayedText.slice(highlightStart, highlightStart + highlight.length)
      : '';
  const afterHighlight =
    highlightStart >= 0
      ? displayedText.slice(highlightStart + highlight.length)
      : displayedText;

  return (
    <span className={`inline-flex gap-1 ${className}`}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {highlightText ? (
          <>
            {beforeHighlight}
            <motion.span
              className={highlightClassName}
              initial={{ opacity: 0, scale: 0.95, y: 5, filter: 'blur(2px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1], // easeOutCubic
              }}
            >
              {highlightText}
            </motion.span>

            {afterHighlight}
          </>
        ) : (
          displayedText
        )}
      </motion.span>
      <motion.span
        className="text-primary-400"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        _
      </motion.span>
    </span>
  );
};
