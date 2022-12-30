// eslint-disable-next-line import/no-anonymous-default-export
import logo from './styles/style.js'
import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

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
        <meta property="og:url" content={`https://www.hyperfoundation.xyz${asPath}`} />
        <meta property="og:title" content={frontMatter.title || 'Hyperion Foundation'} />
        <meta property="og:description" content={frontMatter.description || 'A small community based on the internet dedicating for gaming and learning in programming & software developing.'} />
        <title>Hyperion Foundation</title>
      </>
    },
    i18n: [
      { locale: 'en', text: 'English' },
      { locale: 'id', text: 'Indonesian' }
    ],
    // banner: {
    //   dismissible: false,
    //   key: 'Under heavy development',
    //   text: '🚧 The website is under heavy development 🚧'
    // },
    search: {
      component: null
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
      defaultMenuCollapseLevel: 0
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
      © {new Date().getFullYear()} <a href="https://www.hyperfoundation.xyz">Hyperion Foundation</a> • 0.1.0-pre-release.0
     </span> 
    }
  }
