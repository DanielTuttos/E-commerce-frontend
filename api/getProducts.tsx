import { useEffect, useState } from 'react';

export function useGetCategory() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
            setError(error.message);
          } else {
            setError('Ha ocurrido un error desconocido');
          }
      }
    })();
  }, [url]);

  return { result, loading, error };
}
