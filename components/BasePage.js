import { Container } from 'reactstrap'

const BasePage = ({ children, className }) => {
  return (
    <div className={`base-page ${className}`}>
      <Container>{children}</Container>
    </div>
  )
}

export default BasePage
