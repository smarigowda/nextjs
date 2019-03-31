import Link from 'next/link';
import Layout from '../components/Layout';
import { Component } from 'react';

export default class About extends Component {
    state = {
        user: null,
    }
    componentDidMount() {
        console.log('-- componentDidMount --');
        fetch('https://api.github.com/users/smarigowda')
        .then(res => res.json())
        .then(data => {
            this.setState( { user: data });
        });
    }
    render() {
        return (
            <div>
                <Layout title="About Page">
                    <p>JS Programmer</p>
                    {JSON.stringify(this.state.user)}
                    <img src="static/js-logo.png" alt="Java Script Logo"></img>
                </Layout>
            </div >
        )
    }
}
// const About = () => {
//     return (
//         <div>
//             <Layout title="About Page">
//                 <p>JS Programmer</p>
//                 <img src="static/js-logo.png" alt="Java Script Logo"></img>
//             </Layout>
//         </div>
//     )
// };

// export default About;