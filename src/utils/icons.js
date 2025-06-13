// Configuración de iconos para tecnologías
export const getIcon = (tech) => {
    const icons = {
        // Inline SVGs
        javascript: {
            type: "svg",
            content: `<svg class="fill-primary h-8 w-8" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>
      </svg>`,
        },
        typescript: {
            type: "svg",
            content: `<svg class="fill-primary h-8 w-8" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="typescript">
        <path d="M0,12v12h24V0H0V12z M14.563,19.626c0.108-0.061,0.511-0.294,0.892-0.515l0.69-0.4l0.145,0.214c0.202,0.308,0.643,0.731,0.91,0.872c0.766,0.404,1.817,0.347,2.335-0.118c0.193-0.163,0.314-0.405,0.314-0.675c0-0.016,0-0.031-0.001-0.047v0.002c0-0.278-0.035-0.4-0.18-0.61c-0.186-0.266-0.567-0.49-1.649-0.96c-1.238-0.533-1.771-0.864-2.259-1.39c-0.294-0.334-0.521-0.736-0.653-1.178l-0.006-0.022c-0.091-0.339-0.114-1.189-0.042-1.531c0.255-1.197,1.158-2.03,2.461-2.278c0.423-0.08,1.406-0.05,1.821,0.053v0.001c0.61,0.152,1.074,0.423,1.501,0.865c0.221,0.236,0.549,0.666,0.575,0.77c0.008,0.03-1.036,0.73-1.668,1.123c-0.023,0.015-0.115-0.084-0.217-0.236c-0.31-0.45-0.633-0.644-1.128-0.678c-0.728-0.05-1.196,0.331-1.192,0.967c0,0.011-0.001,0.024-0.001,0.037c0,0.151,0.038,0.293,0.105,0.417l-0.002-0.005c0.16,0.331,0.458,0.53,1.39,0.933c1.719,0.74,2.454,1.227,2.911,1.92c0.51,0.773,0.625,2.008,0.278,2.926c-0.38,0.998-1.325,1.676-2.655,1.9c-0.411,0.073-1.386,0.062-1.828-0.018c-0.964-0.172-1.878-0.648-2.442-1.273c-0.221-0.243-0.652-0.88-0.625-0.925C14.354,19.751,14.453,19.69,14.563,19.626z M5.258,12.065c0-0.534,0.011-0.98,0.026-0.99c0.012-0.016,1.913-0.024,4.217-0.02l4.195,0.012l0.011,0.979l0.008,0.983H10.59v8.876H8.38v-8.876H5.258V12.065z"></path>
      </svg>`,
        },
        nodejs: {
            type: "svg",
            content: `<svg class="fill-primary h-8 w-8" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
         <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2z"></path>
       </svg>`,
        },
        react: {
            type: "svg",
            content: `<svg class="fill-primary h-8 w-8" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
        <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4.2 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
      </svg>`,
        },
        css: {
            type: "svg",
            content: `<svg class="fill-primary h-8 w-8" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
        <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2l-4.4 47.7z"></path>
      </svg>`,
        },
        html: {
            type: "svg",
            content: `<svg class="fill-primary h-8 w-8" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
        <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112h241.1l-4.4 47.7z"></path>
      </svg>`,
        },
        astro: {
            type: "svg",
            content: `<svg class="fill-primary h-8 w-8 brightness-[500]" height="1em" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.00032" transform="matrix(1, 0, 0, 1, 0, 0)">
        <path d="M5.9,18.847a7.507,7.507,0,0,0-.572,2.624,3.265,3.265,0,0,0,.551,1.553,7.427,7.427,0,0,0,2.093,1.681L13.1,28.119A7.332,7.332,0,0,0,15.2,29.287a3.239,3.239,0,0,0,1.5,0,7.381,7.381,0,0,0,2.117-1.16L24,24.711a7.512,7.512,0,0,0,2.117-1.688,3.241,3.241,0,0,0,.55-1.563,7.515,7.515,0,0,0-.587-2.643L21.547,4.551a3.973,3.973,0,0,0-.54-1.3,1.733,1.733,0,0,0-.7-.51,3.972,3.972,0,0,0-1.4-.122H13.005a3.932,3.932,0,0,0-1.4.125,1.713,1.713,0,0,0-.7.512,3.94,3.94,0,0,0-.535,1.3L5.9,18.848Zm13.24-13.2a3.329,3.329,0,0,1,.441,1.093l3.892,12.784a16.168,16.168,0,0,0-4.653-1.573L16.291,9.391a.331.331,0,0,0-.513-.169.323.323,0,0,0-.119.169l-2.5,8.557a16.14,16.14,0,0,0-4.674,1.579L12.393,6.743a3.281,3.281,0,0,1,.442-1.094,1.458,1.458,0,0,1,.582-.43,3.31,3.31,0,0,1,1.175-.1h2.793a3.314,3.314,0,0,1,1.176.1,1.454,1.454,0,0,1,.583.432ZM16.127,21.06a5.551,5.551,0,0,0,3.4-.923,2.8,2.8,0,0,1-.207,2.182A3.938,3.938,0,0,1,17.773,23.8c-.674.428-1.254.8-1.254,1.787a2.079,2.079,0,0,0,.209.914,2.49,2.49,0,0,1-1.535-2.3v-.061c0-.683,0-1.524-.962-1.524a1.028,1.028,0,0,0-.391.077,1.021,1.021,0,0,0-.552.551,1.03,1.03,0,0,0-.079.391,3.769,3.769,0,0,1-.988-2.644,4.206,4.206,0,0,1,.175-1.248c.4.757,1.92,1.32,3.731,1.32Z" style="fill-rule:evenodd"></path>
      </svg>`,
        },
        tailwind: {
            type: "svg",
            content: `<svg class="fill-primary h-8 w-8" fill="#000000" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path>
       </svg>`,
        },
        vscode: {
            type: "svg",
            content: `<svg class="fill-primary h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>`,
        },
        figma: {
            type: "svg",
            content: `<svg class="fill-primary h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
        <path d="M8.5 8.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
        <path d="M8.5 15.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
        <path d="M5 8.5a3.5 3.5 0 1 1 7 0v7a3.5 3.5 0 1 1-7 0v-7z"/>
        <path d="M15.5 5A3.5 3.5 0 1 1 12 8.5 3.5 3.5 0 0 1 15.5 5z"/>
      </svg>`,
        },
        nginx: {
            type: "svg",
            content: `<svg class="fill-primary h-8 w-8 brightness-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
         <path d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z"></path>
       </svg>`,
        },
        // Local images (nuevos iconos)
        "next.js": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/nextjs-icon.svg",
            classes: "h-8 w-auto",
        },
        "tailwind css": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/tailwind-css-seeklogo.png",
            classes: "h-8 w-auto",
        },
        "stripe": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/stripe.png",
            classes: "h-8 w-auto brightness-200",
        },
        "shadcn ui": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/shadcnui.png",
            classes: "h-8 w-auto brightness-150",
        },
        "seo": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/seo.png",
            classes: "h-8 w-auto brightness-150",
        },
        "responsive design": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/responsivedesign.png",
            classes: "h-8 w-auto brightness-150",
        },
        "paypal": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/paypal.png",
            classes: "h-8 w-auto brightness-150",
        },
        "openai": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/openai.png",
            classes: "h-8 w-auto brightness-150",
        },
        "nodemailer": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/nodemailer.png",
            classes: "h-8 w-auto brightness-150",
        },
        "nextauth.js": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/nextauth.png",
            classes: "h-8 w-auto brightness-150",
        },
        "next-intl": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/next-intl.svg",
            classes: "h-8 w-auto brightness-150",
        },
        "i18n": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/i18n.png",
            classes: "h-8 w-auto brightness-150",
        },
        "framer motion": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/framermotion.svg",
            classes: "h-8 w-auto brightness-150",
        },
        "express js": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/expressjs.png",
            classes: "h-8 w-auto brightness-150",
        },
        "vps": {
            type: "img",
            src: "/src/assets/images/newlanguagesicons/vps.png",
            classes: "h-8 w-auto brightness-150",
        },
        // External images (del language-icons.json)
        "react native": {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/React-Native-Logo.png",
            classes: "h-8 w-auto brightness-[500]",
        },
        prisma: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/prismalogo.png",
            classes: "h-8 w-auto brightness-[500]",
        },
        nextjs: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/nextjs-logo.png",
            classes: "h-8 w-auto",
        },
        php: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/PHP-logo.svg.png",
            classes: "h-8 w-auto",
        },
        mongodb: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/mongodb-icon-1.svg",
            classes: "h-8 w-auto brightness-150",
        },
        mysql: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/mysql-logo.png",
            classes: "h-8 w-auto brightness-200",
        },
        postgresql: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/POSTGRESQL-LOGO.png",
            classes: "h-8 w-auto brightness-200",
        },
        go: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/go-logo.png",
            classes: "h-8 w-auto brightness-200",
        },
        flutter: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/flutter-logo.png",
            classes: "h-8 w-auto brightness-200",
        },
        vercel: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/logo-vercel-svgrepo-com.svg",
            classes: "h-8 w-auto",
        },
        netlify: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/netlify-original.svg",
            classes: "h-8 w-auto brightness-200",
        },
        postman: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/postman.svg",
            classes: "h-8 w-auto",
        },
        api: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/api-logo.png",
            classes: "h-8 w-auto brightness-200",
        },
        htmx: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/htmx-logo-png_seeklogo-554504.png",
            classes: "h-8 w-auto brightness-200",
        },
        remix: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/remix-letter-glowing.svg",
            classes: "h-8 w-auto brightness-200",
        },
        pm2: {
            type: "img",
            src: "https://jaimedigitalstudio.com/assets/images/pm2-logo-1-1.png",
            classes: "h-8 w-auto brightness-200",
        },
    };

    // Primero intentar con el nombre exacto (case-insensitive)
    const techLower = tech.toLowerCase();
    if (icons[techLower]) {
        return icons[techLower];
    }

    // Luego intentar normalizando (sin espacios, puntos)
    const techNormalized = techLower.replace(/\s+/g, "").replace(/\./g, "");
    if (icons[techNormalized]) {
        return icons[techNormalized];
    }

    // Buscar coincidencias parciales para casos como "Node.js" vs "nodejs"
    const foundKey = Object.keys(icons).find(key => {
        const keyNormalized = key.toLowerCase().replace(/\s+/g, "").replace(/\./g, "");
        return keyNormalized === techNormalized;
    });

    return foundKey ? icons[foundKey] : null;
}; 