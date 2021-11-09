import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import axios from 'axios'
import Link from 'next/link'
import { useGetPosts } from '@/actions'

export default function Portfolios() {
  const { posts, error, loading } = useGetPosts()

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link href={`/portfolios/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))
  }
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am portfolios page</h1>
        {loading && <p>Loading...</p>}
        {posts && <ul>{renderPosts(posts)}</ul>}
        {error && <div className="alert alert-danger">{error.message} </div>}
      </BasePage>
    </BaseLayout>
  )
}
