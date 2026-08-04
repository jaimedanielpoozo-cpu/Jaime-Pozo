import { useEffect, useRef, useState } from 'react';
import { marqueeRow1, marqueeRow2 } from '../data/marqueeImages';

function tripled(images: string[]) {
  return [...images, ...images, ...images];
}

const row1 = tripled(marqueeRow1);
const row2 = tripled(marqueeRow2);

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {row1.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] object-cover rounded-2xl flex-shrink-0"
            />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {row2.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] object-cover rounded-2xl flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
