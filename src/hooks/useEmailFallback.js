import { useEffect, useRef, useState } from 'react';

export default function useEmailFallback() {
  const [fallbackUrl, setFallbackUrl] = useState('');
  const pendingHint = useRef(null);

  useEffect(() => {
    function cancelWhenHidden() {
      if (document.hidden) window.clearTimeout(pendingHint.current);
    }
    document.addEventListener('visibilitychange', cancelWhenHidden);
    return () => {
      document.removeEventListener('visibilitychange', cancelWhenHidden);
      window.clearTimeout(pendingHint.current);
    };
  }, []);

  function resetHint() {
    window.clearTimeout(pendingHint.current);
    setFallbackUrl('');
  }

  function scheduleHint(url) {
    window.clearTimeout(pendingHint.current);
    pendingHint.current = window.setTimeout(() => {
      if (!document.hidden) setFallbackUrl(url);
    }, 1500);
  }

  return { fallbackUrl, scheduleHint, resetHint };
}
