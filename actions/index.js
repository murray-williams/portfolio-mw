import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGetData = (url) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const res = await axios.get(url)
      const result = await res.data

      if (res.status !== 200) {
        setError(result)
      } else {
        setData(result)
      }
      setLoading(false)
    }

    url && getData()
  }, [url])

  return { data, error, loading }
}
