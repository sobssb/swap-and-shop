import axios from "axios";
import { useState, useEffect } from "react";

const useFetchData = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    const handleFetch = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          signal: controller.signal,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (error) {
        if (isMounted) {
          if (error.name === "CancelledError") {
            setFetchError("Request Cancelled");
          } else {
            setFetchError(error.message);
            setData([]);
          }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    handleFetch(dataUrl);

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useFetchData;
