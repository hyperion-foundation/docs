/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from 'next/script'
import { useEffect } from 'react'

export default function GoogleAdSenseFlexibleAd() {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <>
        <Script
            data-ad-client="ca-pub-6163526907517542"
            async="true" 
            crossOrigin="anonymous" 
            strategy="beforeInteractive" 
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" 
        />
        <ins class="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6163526907517542"
            data-ad-slot="2392523148"
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
        </>
    )
}