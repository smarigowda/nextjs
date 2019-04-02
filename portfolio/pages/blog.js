import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title, slug }) => {
    return (
        <li>
            <Link as={slug} href={`/post?title=${title}`}>
                <a>{`${title}`}</a>
            </Link>
        </li>
    )
}

const Blog = () => {
    return (
        <Layout title="My Blog">
            <ul>
                <PostLink slug="react-post" title="React Post"/>
                <PostLink slug="angular-post" title="Angular Post"/>
                <PostLink slug="vue-post" title="VUe Post"/>
            </ul>
        </Layout>
    )
}

export default Blog;