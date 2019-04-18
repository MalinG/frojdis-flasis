import Head from 'next/head'
import Navbar from './Navbar'

import { globalStyles } from '../theme/styles'

const Layout = (props) => (
  <div>
    {props.showNav && <Navbar />}
    <div className="wrapper">
      <Head>
          <meta name="viewport" content="width=device-width" />
          <title>Fröjdis och flåsis</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"/>
      </Head>
      {props.children} 
    </div>
    <style jsx global>{globalStyles}</style>
    <style jsx>{`
      .wrapper {
        padding: 16px;
        max-width: 680px;
        margin: auto;
      }
    `}
    </style>
  </div>
)

export const LayoutWrap = (Component) => (props) => {
  const showNav = Component.name !== 'Index'
  return (
    <Layout class={Component.name} showNav={showNav}>
      <Component {...props} />
    </Layout>
  );
};

export default Layout