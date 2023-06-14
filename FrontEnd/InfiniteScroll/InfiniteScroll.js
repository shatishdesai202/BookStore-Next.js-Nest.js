import { useState, useEffect } from 'react';

const InfiniteScroll = ({ loadMoreData, children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const scrollThreshold = 0.8;
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const isReachingEnd = scrollTop + clientHeight >= scrollThreshold * scrollHeight;

        if (isReachingEnd && !isLoading ) {
          setIsLoading(true);
          loadMoreData()
            .then(() => {
              setIsLoading(false);
              setIsLoaded(true);
            })
            .catch((error) => {
              console.error('Error loading more data:', error);
              setIsLoading(false);
            });
        }
      }, 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
};

export default InfiniteScroll;
