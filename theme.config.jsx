/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import logo from './src/js/logo.js'
import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import googleAnalyticsScript from './src/js/gtag.js'
import googleAdSenseScript from './src/js/google-adsense.js'
import versionNumber from './package.json'

export default {
    logo: logo,
    head: () => {
      const { asPath } = useRouter()
      const { frontMatter } = useConfig()

      const hyperionProperty = {
        title: "Hyperion Foundation (Dev)",
        description: "A small community based on the internet dedicating for gaming and learning in programming & software developing."
      }
      const title = String(frontMatter.title || hyperionProperty.title)
      const description = String(frontMatter.description ||  hyperionProperty.description)

      const GoogleAnalytics = googleAnalyticsScript
      const GoogleAdSense = googleAdSenseScript

      return <>
        <meta property="og:url" content={`https://www.hyperfoundation.my.id${asPath}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="description" content={description} />
        
        <link rel="icon" href="/hyperion-favicon.png" type="image/png" />
        <GoogleAnalytics />
        <GoogleAdSense />
      </>
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
     text: <span>
      © 2022 - {new Date().getFullYear()} <a href="https://www.hyperfoundation.my.id">Hyperion Foundation</a> • Dev Version ({`v${versionNumber.version}`})
     </span> 
    }
}
