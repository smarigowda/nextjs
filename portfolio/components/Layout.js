import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

const handleRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}

Router.events.on('routeChangeStart', handleRouteChangeStart);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);

// Router.onRouteChangeStart = url => {
//     console.log(url);
//     NProgress.start();
// }

// Router.onRouteChangeComplete = () => {
//     // setTimeout(() => {
//     //     NProgress.done();
//     // }, 500);
//     NProgress.done();

// }

// Router.onRouteChangeError = () => {
//     NProgress.done();
// }

const Layout = ({ children, title }) => (
    <div className="container">
        <Head>
            <title>Next Porifolio</title>
        </Head>
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>Hire Me</a></Link>
        </header>
        <h1>{title}</h1>
        {children}
        <footer>
            &copy; {new Date().getFullYear()}
        </footer>
    </div>
);

export default Layout;