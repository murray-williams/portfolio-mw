import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

export const useGetPosts = () => {
  return useSWR('/api/v1/posts', fetcher)
}
