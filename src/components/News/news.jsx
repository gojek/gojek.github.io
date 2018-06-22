import React, { Component } from 'react';

import data from './data.json';
import Card from './card';

class LatestNews extends Component {
    render() {
        const { news } = data;
        
        return(
            <section className="py-5 ">
                <div className="container">
                    <div className="row">
                        {news.data.map((latestNews, key) => 
                                <Card data={latestNews} key={key} />
                        )}
                    </div>
                </div>
            </section>
        )
    }
}

export default LatestNews;