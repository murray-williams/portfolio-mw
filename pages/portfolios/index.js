import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import axios from 'axios'
import Link from 'next/link'
import { useGetData } from '@/actions'

export default function Portfolios() {
  const { data, error, loading } = useGetData('/api/v1/posts')

  const renderPosts = (data) => {
    return data.map((item) => (
      <li key={item.id}>
        <Link href={`/portfolios/${item.id}`}>
          <a>{item.title}</a>
        </Link>
      </li>
    ))
  }
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am portfolios page</h1>
        {loading && <p>Loading...</p>}
        {data && <ul>{renderPosts(data)}</ul>}
        {error && <div className="alert alert-danger">{error.message} </div>}
      </BasePage>
    </BaseLayout>
  )
}
