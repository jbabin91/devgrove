import { useEffect } from 'react';

const defaultOptions = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

export function useMutationObserver(
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: MutationCallback,
  options = defaultOptions,
) {
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback);
      observer.observe(ref.current, options);
      return () => observer.disconnect();
    }
  }, []);
}
