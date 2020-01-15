import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Footer = () => (
    <footer>
        <Container>
            copyright - sou 3M2020 - todos os direitos reservados
        </Container>
    </footer>
)

const Container = styled.div`
  background: $primary;
`

export default Footer