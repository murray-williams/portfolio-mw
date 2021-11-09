import React from 'react'
import { BiRightArrow } from 'react-icons/bi'
import BaseLayout from '@/components/layouts/BaseLayout'
import { Container, Row, Col, Button } from 'reactstrap'
import Typed from 'react-typed'

const roles = [
  'Product Owner',
  'Developer',
  'Designer',
  'Digital Enthusiast',
  'Team Player',
  'React JS Developer',
]

class Index extends React.Component {
  render() {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Designer & Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Built with NextJS & MongoDB.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1.png" />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>Welcome to my portfolio.</h1>
                </div>
                <div className="hero-welcome-exp">
                  <h2>I wear many hats...</h2>
                </div>
                <Typed
                  loop
                  typeSpeed={30}
                  backSpeed={70}
                  strings={roles}
                  backDelay={2000}
                  loopCount={0}
                  showCursor
                  shuffle
                  className="self-typed"
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h1>Let's take a look around.</h1>
                  <Button className="hero-welcome-btn">
                    View Projects <BiRightArrow size="1rem" />
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }
}

export default Index
