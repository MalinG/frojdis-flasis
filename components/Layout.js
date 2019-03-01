import Head from 'next/head'
import Navbar from './Navbar'

import { globalStyles } from '../theme/styles'

const Layout = (props) => (
  <div className="wrapper">
    <Head>
        <title>Fröjdis och flåsis</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"/>
    </Head>
    <Navbar />
    {props.children}
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
  return (
    <Layout class={Component.name}>
      <Component {...props} />
    </Layout>
  );
};

export default Layout