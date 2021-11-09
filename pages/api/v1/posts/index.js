import { data } from '@/data.js'
import axios from 'axios'

export default async (req, res) => {
  try {
    const axiosRes = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    const posts = axiosRes.data
    res.status(200).json(posts.slice(0, 10))
  } catch (err) {
    console.error(err.message)
    res.status(err.status || 400).json({ message: 'Api error!' })
  }
}
