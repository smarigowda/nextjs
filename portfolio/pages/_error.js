import Layout from '../components/Layout';
import '../scss/styles.scss';

export default ({ statusCode }) => {
    return (
        <Layout title="Error !!!">
            { statusCode ? 
            <p>Could not load data. Status Code = ${statusCode}</p> : 
            <p>Could not get that page, sorry !</p> }
        </Layout>
    );
}