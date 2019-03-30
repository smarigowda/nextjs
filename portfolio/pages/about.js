import Link from 'next/link';
export default () => {
    return (
        <div>
            <h1>About Page</h1>
            <Link href="/">
                <a>Home Link</a>
            </Link>
            <p>JS Programmer</p>
            <img src="static/js-logo.png" alt="Java Script Logo"></img>
        </div>
    )
}