import Layout from '../components/Layout';
import { useState } from 'react';
const HireMe = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Layout title="Hire Me Page">
                <p className="my-email">santosharakere@gmail.com</p>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)} className="hook-button">
                    useState
                </button>
            </Layout>
        </div>
    )
};

export default HireMe;