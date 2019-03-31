import Link from 'next/link';
import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from './_error';

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
        const result = await fetch('https://api.github.com/users/smarigowda');
        console.log(result);
        const statusCode = result.status > 200 ? result.status : false;
        console.log(statusCode);
        const data = await result.json();
        return { user: data, statusCode }
    }
    render() {
        const { user,  statusCode } = this.props;
        if(statusCode) {
            return (
                <Error statusCode={statusCode}/>
            )
        }
        return (
            <div>
                <Layout title="About Page">
                    {/* <p>{JSON.stringify(this.props.user)}</p> */}
                    {/* <p>statusCode = { statusCode }</p> */}
                    <p>{ user.bio }</p>
                    {/* <img src="static/js-logo.png" alt="Java Script Logo"></img> */}
                    <img src={ user.avatar_url ? user.avatar_url : ''} alt="My Avatar" className="my-avatar"></img>
                </Layout>
            </div >
        )
    }
}