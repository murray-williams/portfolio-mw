import Header from '../shared/Header'

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
