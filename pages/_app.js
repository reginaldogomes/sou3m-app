import React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'

import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

import NavBar from '../components/NavBar/NavBar'

const HeadScripts = () => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
    </Head>
)

export default class App extends NextApp {
    render() {

        const { Component, pageProps } = this.props

        return (
            <ThemeProvider theme={theme}>
                <HeadScripts />
                <NavBar />
                <Component {...pageProps} />
                <Drawer />
            </ThemeProvider>
        )
    }
}