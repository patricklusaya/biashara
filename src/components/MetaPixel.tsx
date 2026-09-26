"use client";

import Script from "next/script";
import { useEffect } from "react";
import { META_PIXEL_ID } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

/**
 * Loads Meta Pixel only when NEXT_PUBLIC_META_PIXEL_ID is set.
 * Fires PageView + ViewContent on mount.
 */
export function MetaPixel() {
  const pixelId = META_PIXEL_ID;

  useEffect(() => {
    if (!pixelId) return;
    // PageView is fired by the pixel snippet below; only ViewContent here.
    trackEvent("ViewContent", {
      content_name: "Digital Product Sales System Landing",
      content_category: "course",
    });
  }, [pixelId]);

  if (!pixelId) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `}</Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
