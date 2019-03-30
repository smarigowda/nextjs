import Link from 'next/link';
import Layout from '../components/Layout';
const About = () => {
    return (
        <div>
            <Layout title="About Page">
                <Link href="/">
                    <a>Go to Home Page</a>
                </Link>
                <p>JS Programmer</p>
                <img src="static/js-logo.png" alt="Java Script Logo"></img>
            </Layout>
        </div>
    )
};

export default About;