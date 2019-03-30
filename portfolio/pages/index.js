import Link from 'next/link';
import Layout from '../components/Layout';
const Index = () => {
    return (<div>
        <Layout title="Home Page">
            <Link href="/about">
                <a>Go to About Page</a>
            </Link>
            <p>Welcome to my Home Page</p>
        </Layout>
    </div>);
}

export default Index;