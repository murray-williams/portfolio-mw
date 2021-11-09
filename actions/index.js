import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGetPosts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get('/api/v1/posts')
      const result = await res.data

      if (res.status !== 200) {
        setError(result)
      } else {
        setPosts(result)
      }
      setLoading(false)
    }

    getPosts()
  }, [])

  return { posts, error, loading }
}
