import { useEffect, useState } from 'react'

const SiteFetcher = (url, properties) => {
    
    const [response, setResponse] = useState(properties);
    const [isFetching, setIsFetching] = useState(true)
    const [isDisplayable, setIsDisplayable] = useState(false)
  
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then((responseJson) => {
            setIsDisplayable(true)
            setIsFetching(false)
            setResponse(responseJson);
        })
        .catch((error) => {
            setIsFetching(false)
            console.log(error)
        })
    }, [url])
  
    return {
      response,
      isFetching,
      isDisplayable
    }
};

export default SiteFetcher