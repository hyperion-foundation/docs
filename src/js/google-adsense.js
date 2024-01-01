/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from 'next/script'
// import { useEffect } from 'react'

export default function GoogleAdSenseFlexibleAd() {
    return (
        <>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6163526907517542"
        crossorigin="anonymous" />
        </>
    )
}
