/* eslint-disable @next/next/inline-script-id */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
import logo from './src/js/logo.js'
import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Script from 'next/script'
import versionNumber from './package.json'

export default {
    logo: logo,
    useNextSeoProps() {
      const { asPath } = useRouter()
      if (asPath !== '/') {
        return {
          titleTemplate: '%s - Hyperion Foundation'
        }
      }
    },
    head: () => {
      const { asPath } = useRouter()
      const { frontMatter } = useConfig()
      return (
        <>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='og:url' content={`https://www.hyperfoundation.xyz${asPath}`} />
          <meta name='og:title' content={frontMatter.title || 'Hyperion Foundation'} />
          <meta name='og:description' content={frontMatter.description || 'A small community based on the internet dedicating for gaming and learning in programming & software developing.'} />
          <meta name='description' content={frontMatter.description || 'A small community based on the internet dedicating for gaming and learning in programming & software developing.'} />
          <meta name='google-adsense-account' content='ca-pub-6163526907517542' />

          <title>Hyperion Foundation</title>

          <link rel='icon' href='/hyperion-favicon.png' type='image/png' />
          <Script 
          id='adsbygoogle-init'
          strategy='afterInteractive'
          crossOrigin='anonymous'
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6163526907517542' />

          <Script 
          src='https://fundingchoicesmessages.google.com/i/pub-6163526907517542?ers=1' 
          nonce='TbOKQcNbpUaI4kAzWwmw7A' />

          <Script 
          nonce='TbOKQcNbpUaI4kAzWwmw7A'>
            (function() {function signalGooglefcPresent() {
              if (!window.frames['googlefcPresent']) {
                if (document.body) {
                  const iframe = document.createElement('iframe'); 
                  iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; 
                  iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);
                  } else {
                    setTimeout(signalGooglefcPresent, 0);
                  }
              }
            }
          }
          signalGooglefcPresent();
          )();</Script>
        </>
      )
    },
    i18n: [
      { locale: 'en', text: '🇺🇸 English' },
      { locale: 'id', text: '🇮🇩 Bahasa Indonesia' }
    ],
    banner: {
      dismissible: false,
      key: 'HappyNewYear2024',
      text: 'Happy New Year 2024! 🥳 🎉'
    },
    search: {
      placeholder: 'Search something...'
    },
    project: {
      link: 'https://github.com/hyperion-foundation'
    },
    docsRepositoryBase: 'https://github.com/hyperion-foundation/landing',
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
    toc: {
      backToTop: true
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
          © 2022 - {new Date().getFullYear()} <a href='https://www.hyperfoundation.xyz'>Hyperion Foundation</a> &mdash; {`v${versionNumber.version}`}
        </span>
    )
    }
  }
