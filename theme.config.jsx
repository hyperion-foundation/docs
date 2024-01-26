/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import logo from './src/components/HeaderLogoTextAnimation.jsx'
import { Footer } from './src/components/Footer.jsx'
import React from 'react'
import Script from 'next/script.js'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - Hyperion Foundation (Dev)',
      }
    }
  },
  logo: logo,
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return ( 
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='google-adsense-account' content='ca-pub-6163526907517542' />
        <meta name='og:url' content={`https://www.hyperfoundation.xyz${asPath}`} />
        <meta name='og:title' content={frontMatter.title || 'Hyperion Foundation (Dev)'} />
        <meta name='og:description' content={frontMatter.description || 'A small community based on the internet dedicating for gaming and learning in programming & software developing.'} />
        <meta name='description' content={frontMatter.description || 'A small community based on the internet dedicating for gaming and learning in programming & software developing.'} />

        <link href='https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css' rel='stylesheet' />

        <title>Hyperion Foundation (Dev)</title>
        
        <link rel='icon' href='/hyperion-favicon.png' type='image/png' />

        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-2X01ZJH1LG' />
      </>
      )
  },
  i18n: [
    { locale: 'en', text: '🇺🇸 English' },
    { locale: 'id', text: '🇮🇩 Bahasa Indonesia' }
  ],
  banner: {
    dismissible: false,
    key: 'Testing Purposes',
    text: '👨‍🔧 This website version is hosted for testing purposes only 👨‍🔧'
  },
  search: {
    placeholder: 'Search something...'
  },
  project: {
    link: 'https://github.com/hyperion-foundation'
  },
  chat: {
    link: 'https://discord.gg/4U4k6bW'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div>{title}</div>
        )
      }
      return <> {title}</>
    },
    defaultMenuCollapseLevel: 1
  },
  navigation: {
    prev: true,
    next: true
  },
  editLink: {
    text: null
  },
  feedback: {
    content: null
  },
  footer: {
    component: Footer
  }
}
