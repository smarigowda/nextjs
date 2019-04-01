import Layout from '../components/Layout';

const Post = ({ url }) => {
    return (
        <Layout title={url.query.title}>
            <p>About {url.query.title}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima facere voluptates enim nisi distinctio cumque voluptatem debitis quo! Laborum enim blanditiis assumenda culpa recusandae! Quis corporis inventore omnis similique.</p>
        </Layout>
    );
}

export default Post;