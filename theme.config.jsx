/* eslint-disable @next/next/no-before-interactive-script-outside-document */
// eslint-disable-next-line import/no-anonymous-default-export
import logo from './src/js/logo.js'
import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Script from 'next/script'
import versionNumber from './package.json'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    logo: logo,
    head: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { asPath } = useRouter()
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { frontMatter } = useConfig()
      // const title = useConfig().frontMatter
      return <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:url" content={`https://www.hyperfoundation.xyz${asPath}`} />
        <meta name="og:title" content={frontMatter.title || 'Hyperion Foundation'} />
        <meta name="og:description" content={frontMatter.description || 'A small community based on the internet dedicating for gaming and learning in programming & software developing.'} />
        <meta name="description" content={frontMatter.description || 'A small community based on the internet dedicating for gaming and learning in programming & software developing.'} />
        <meta name="google-adsense-account" content="ca-pub-6163526907517542" />

        <title>Hyperion Foundation</title>

        <link rel="icon" href="/hyperion-favicon.png" type="image/png" />
      </>
    },
    i18n: [
      { locale: 'en', text: '🇺🇸 English' },
      { locale: 'id', text: '🇮🇩 Bahasa Indonesia' }
    ],
    banner: {
      key: 'Teamspeak',
      text: (
        <a href="https://hyperionfoundation.statuspage.io/incidents/j05gv849vlps">⚠️ Our domain has been changed. Read more →</a>
      )
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
     text: (
        <span>
          © 2022 - {new Date().getFullYear()} <a href="https://www.hyperfoundation.xyz">Hyperion Foundation</a> &mdash; {`v${versionNumber.version}`}
        </span>
    )
    }
  }
