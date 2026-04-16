import axios from 'axios'
import {useState, useEffect} from 'react'

const useFetchData = (dataUrl) => {
  const [data, setData] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() =>{
    const controller = new AbortController();

    const handleFetch = async (url) =>{
      setIsLoading(true)
      try {
        const response = await axios.get(url, {
          signal : controller.signal
        })
        setData(response.data)
      } catch (error) {
        if (error.name === "CancelledError"){
          setFetchError("Request Cancelled")
        } else{
          setFetchError(error.message);
        }
      } finally {
        setIsLoading(false)
      }
    }

    handleFetch(dataUrl);

    return () => {
      controller.abort()
    }
    
  }, [dataUrl])

  return {data, fetchError, isLoading}
  
}

export default useFetchData
