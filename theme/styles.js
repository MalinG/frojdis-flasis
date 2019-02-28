import css from 'styled-jsx/css'
import { colors } from '../theme'

export const globalStyles = css.global`
  @font-face {
    font-family: 'sofia_pro';
    src: url('/static/fonts/sofiapro-light-webfont.woff2') format('woff2'),
        url('/static/fonts/sofiapro-light-webfont.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'sofia_pro';
    src: url('/static/fonts/sofiapro-lightit-webfont.woff2') format('woff2'),
        url('/static/fonts/sofiapro-lightit-webfont.woff') format('woff');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'sofia_pro';
    src: url('/static/fonts/sofiapro-bold-webfont.woff2') format('woff2'),
        url('/static/fonts/sofiapro-bold-webfont.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'sofia_pro';
    src: url('/static/fonts/sofiapro-black-webfont.woff2') format('woff2'),
        url('/static/fonts/sofiapro-black-webfont.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
  body { 
    background-color: ${colors.grays[86]};
    color: white;
    font-family: sofia_pro;
    box-sizing: border-box;
  }

  h1, h2, h3 {
    font-weight: bold;
    line-height: 1.1;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 28px; 
  }

  h3 {
    font-size: 20px;
  }

  button {
    display: inline-block;
    border: none;
    padding: 8px 16px 10px;
    border-radius: 4px;
    min-width: 100px;
    font-family: sofia_pro;
    font-weight: bold;
    font-size: 16px;
  }
`