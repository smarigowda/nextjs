import Link from 'next/link';
const Index = () => {
    return (<div>
        <h1>Home</h1>
        <Link href="/about">
            <a>About Link</a>
        </Link>
        <p>Welcome to my Home Page</p>
    </div>);
}

export default Index;