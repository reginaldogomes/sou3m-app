import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'

const Footer = () => (
    <FooterComponent>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper>xs=12</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper>xs=6 sm=3</Paper>
            </Grid>
        </Grid>
        <Typography component="p">
            © copyright {new Date().getFullYear()} - SOU 3M - todos os direitos reservados
        </Typography>
    </FooterComponent>
)

const FooterComponent = styled.footer`
  background: #cf7010;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export default Footer