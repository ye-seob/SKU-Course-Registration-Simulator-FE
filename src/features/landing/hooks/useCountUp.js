import {useEffect, useRef, useState} from 'react';

/**
 * @param {number} target   - 목표 숫자
 * @param {number} duration - 애니메이션 총 시간 (ms), 기본 1600
 * @param {number} delay    - 시작 지연 (ms), 기본 0
 * @returns {number}        - 현재 카운트 값
 */
const useCountUp = (target, duration = 1600, delay = 0) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    let startTime = null;

    const cubicEaseOut = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsed  = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCount(Math.floor(cubicEaseOut(progress) * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const delayTimer = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(delayTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, delay]);

  return count;
};

export default useCountUp;