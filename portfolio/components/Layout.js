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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
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
        <style jsx>{
            `
                .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                    height: 100vh;
                }
                header {
                    display: flex;
                    width: 100%;
                    justify-content: space-around;
                    padding: 1rem;
                    font-size: 1.2rem;
                    background-color: indigo;
                }
                header a {
                    color: white;
                    text-decoration: none;
                    text-transform: uppercase;
                }
                header a:hover {
                    color: green;
                }
                footer {
                    padding: 1rem;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    background-color: lightgray;
                }
            `
        }
        </style>
        <style jsx global>{
            `
            body {
                margin: 0;
                background-color: #f0f0f0;
            }
            `
        }</style>
    </div>
);

export default Layout;