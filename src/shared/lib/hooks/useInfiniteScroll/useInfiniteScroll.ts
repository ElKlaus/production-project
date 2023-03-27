import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptinons {
    callback: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptinons) {
    useEffect(() => {
        const options = {
            root: wrapperRef.current,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(([entry]) => {
            console.log('intersected');
        }, options);

        observer.observe(triggerRef.current);

        return () => {
            if (observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerRef.current);
            }
        };
    }, [triggerRef, wrapperRef]);
}
