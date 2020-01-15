import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import theme from '../src/theme'

import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer'

export default class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>Sou 3M - Ecoturismo em Três Marias / MG.</title>
                    <meta 
                        name="viewport" 
                        content="minimum-scale=1, initial-scale=1, width=device-width" 
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <NavBar />
                    <Component {...pageProps} />
                    <Drawer />
                    <Footer />
                </ThemeProvider>
            </React.Fragment>
        )
    }
}