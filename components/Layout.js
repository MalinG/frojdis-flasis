import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>Fröjdis och flåsis</title>
        </Head>
        <Navbar />
        {props.children}
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