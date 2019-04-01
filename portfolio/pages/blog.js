import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title }) => {
    return (
        <li>
            <Link href={`/post?title=${title}`}>
                <a>{`${title}`}</a>
            </Link>
        </li>
    )
}

const Blog = () => {
    return (
        <Layout title="My Blog">
            <ul>
                <PostLink title="React Post"/>
                <PostLink title="Angular Post"/>
                <PostLink title="VUe Post"/>
            </ul>
        </Layout>
    )
}

export default Blog;