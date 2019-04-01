import Layout from '../components/Layout';
import Link from 'next/link';

const Blog = () => {
    return (
        <Layout title="My Blog">
            <ul>
                <li>
                    <Link href="/post?title=React Post">
                        <a>React Post</a>
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}

export default Blog;