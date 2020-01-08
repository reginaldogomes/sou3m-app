import React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'
import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'

import NavBar from '../components/NavBar/NavBar'

export default class App extends NextApp {
    render() {

        const { Component, pageProps } = this.props

        return (
            <ThemeProvider theme={theme}>
                <NavBar />
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}