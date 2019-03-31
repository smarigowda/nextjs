import Link from 'next/link';
import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

export default class About extends Component {
    // state = {
    //     user: null,
    // }
    // componentDidMount() {
    //     console.log('-- componentDidMount --');
    //     fetch('https://api.github.com/users/smarigowda')
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState( { user: data });
    //     });
    // }
    static async getInitialProps() {
        const result = await fetch('https://api.github.com/users/smarigowda')
        const data = await result.json();
        
        //     .then(res => res.json())
        //     .then(data => {
        //         return data;
        //     });
        return { user: data }
    }
    render() {
        return (
            <div>
                <Layout title="About Page">
                    <p>JS Programmer</p>
                    {JSON.stringify(this.props.user)}
                    <img src="static/js-logo.png" alt="Java Script Logo"></img>
                    {/* <img src={this.state.user ? this.state.user.avatar_url : ''} alt="Java Script Logo"></img> */}
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