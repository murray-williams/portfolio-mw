import BaseLayout from '../components/layouts/BaseLayout'
import { Container, Button } from 'reactstrap'

export default function Home() {
  return (
    <BaseLayout>
      <Container>
        <h1>I am index page</h1>
        <Button color="danger">Danger</Button>
      </Container>
    </BaseLayout>
  )
}
