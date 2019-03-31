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
        return { user: data }
    }
    render() {
        const { bio,  avatar_url } = this.props.user;
        return (
            <div>
                <Layout title="About Page">
                    {/* <p>{JSON.stringify(this.props.user)}</p> */}
                    <p>{ bio }</p>
                    {/* <img src="static/js-logo.png" alt="Java Script Logo"></img> */}
                    <img src={avatar_url ? avatar_url : ''} alt="My Avatar" className="my-avatar"></img>
                </Layout>
            </div >
        )
    }
}