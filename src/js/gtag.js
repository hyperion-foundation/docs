import Script from 'next/script';
export default function GoogleAnalytics() {
  return (
    <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2X01ZJH1LG"></Script>
    <Script id="google-analytics">{`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-2X01ZJH1LG');
    `}
    </Script>
    </>
  )
}
