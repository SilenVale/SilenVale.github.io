import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const entriesMap = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    entriesMap.current.clear();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entriesMap.current.set(entry.target.id, entry.intersectionRatio);
        });

        let maxRatio = 0;
        let maxId = '';
        entriesMap.current.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        });

        if (maxId) {
          setActiveSection(`#${maxId}`);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '-80px 0px -40% 0px',
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observerRef.current?.observe(el);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}