import { useEffect, useState } from 'react';

export function useGetFeaturedProducts() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?featured[isFeatured][$eq]=true&populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
      } catch (error: any) {
        seterror(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return {
    loading,
    result,
    error,
  };
}
