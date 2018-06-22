import React, { Component } from 'react';
import axios from 'axios';

import Post from './post';

class Posts extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.gojekengineering.com%2Ffeed`)
        .then(res => {
            const posts = res.data.items;

            this.setState({ posts });
        })
    }


    render() {
        const { posts} = this.state;
        const { count } = this.props;

        const heading = this.props.heading ? this.props.heading : '';

        return(
            <section className={count <= 3 ? 'py-3': 'py-5'}>
                <div className="container">
                    {
                        count <= 3 &&
                        <div className="text-center text-lg-left font-xl-l">
                            <h2 className="h2">{heading}</h2>
                        </div>
                    }
                    
                    <div id="jsonContent">
                        <Post 
                            count= { count }
                            posts = { posts }
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Posts;