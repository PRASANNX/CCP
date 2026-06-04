import { useState, useEffect } from 'react';

export function useInstagramThumbnail(shortcode: string) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        // Try using microlink API to get og:image from Instagram post
        const response = await fetch(
          `https://api.microlink.io/?url=https://www.instagram.com/reel/${shortcode}/&meta=false`,
          {
            headers: {
              'Accept': 'application/json',
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.data && data.data.image) {
            setThumbnail(data.data.image.url);
          }
        }
      } catch (error) {
        console.error('Failed to fetch Instagram thumbnail:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchThumbnail();
  }, [shortcode]);

  return { thumbnail, isLoading };
}
