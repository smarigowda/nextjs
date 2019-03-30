import Link from 'next/link';
const Layout = ({ children, title }) => (
    <>
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
    </>
);

export default Layout;