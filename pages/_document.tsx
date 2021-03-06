import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-38JBMSQGC4"></script>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=G-38JBMSQGC4`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-38JBMSQGC4', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <style>{`
html
{
background: rgb(255,255,255);
font-size: 100%;
-webkit-text-size-adjust: 100%;
}
body
{
color: rgb(136,136,136);
font: normal normal normal 1rem/normal Lato ;
margin: 0;
padding: 0;
font-family: 'Lato', sans-serif;
}

abbr
{
cursor: help;
}

audio:not([controls])
{
display: none;
height: 0;
}

a {
color: #0c7bc6;
}

a:focus
{
outline: thin dotted;
}

blockquote, q
{
quotes: none;
}

details
{
display: block;
}

dl, form, h1, h2, h3, h4, h5, h6, ol, p, ul
{
margin: 0;
padding: 0;
}

h2 {
color: rgb(51,51,51);
    font-family: Lato, sans-serif;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 1.125rem;
}

form label
{
cursor: pointer;
}

form button, form input[type='button'], form input[type='submit'], form input[type='reset']
{
-webkit-appearance: button;
cursor: pointer;
margin: 0;
overflow: visible;
padding: 0;
text-transform: none;
}

form button[disabled], form input[disabled]
{
cursor: default;
}

form button::-moz-focus-inner, form input:not([type='checkbox']):not([type='radio'])::-moz-focus-inner
{
border: 0;
padding: 0;
}

form input:not([type='checkbox']):not([type='radio']), form select
{
margin: 0;
}

form input [type='checkbox'], form input [type='radio']
{
box-sizing: border-box;
padding: 0;
}

form input[type='number']::-webkit-inner-spin-button, form input[type='number']::-webkit-outer-spin-button
{
height: auto;
}

form input[type='search']
{
-webkit-appearance: textfield;
outline-offset: -2px;
}

form input[type='search']::-webkit-search-cancel-button, form input[type='search']::-webkit-search-decoration
{
-webkit-appearance: none;
}

form [type='search']::-webkit-search-decoration
{
-webkit-appearance: none;
}

::-webkit-file-upload-button
{
-webkit-appearance: button;
font: inherit;
}

form textarea
{
margin: 0;
overflow: auto;
resize: vertical;
vertical-align: top;
}

[hidden]
{
display: none;
}

hr
{
border: none;
box-sizing: content-box;
margin: 0;
overflow: visible;
}

img
{
border: none;
display: inline-block;
vertical-align: middle;
}

ol li
{
list-style-type: decimal;
}

ul li
{
list-style-type: none;
}

pre
{
white-space: pre-wrap;
}

progress
{
vertical-align: baseline;
}

summary
{
display: list-item;
}

svg:not(:root)
{
overflow: hidden;
}

table
{
margin: 0;
}

template
{
display: none;
}
  `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
