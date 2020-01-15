import React from 'react'
import styled from 'styled-components'

const Contact = () => (
    <Container>
      <Heading>Fale Conosco</Heading>
    </Container>
)

const Container = styled.div`
  display: flex;
  width: 960px;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem;
  background: #f2f2f2;
`

const Heading = styled.h1``

export default Contact