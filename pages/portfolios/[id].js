import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function PortfolioDetail({ portfolio }) {
  return (
    <BaseLayout>
      <BasePage>
        <h1>{portfolio.title}</h1>
        <p>{portfolio.body}</p>
      </BasePage>
    </BaseLayout>
  )
}

PortfolioDetail.getInitialProps = async ({ query }) => {
  debugger
  let post = {}
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    )
    post = res.data
  } catch (err) {
    console.error(err.message)
  }

  return { portfolio: post }
}
