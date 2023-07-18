import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.substring(1, str.length)
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }


    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e0c97f3b1bb240a98422b768ad162281&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let finalArticle = await fetch(url);
        let parsedArticle = await finalArticle.json();
        this.setState({
            articles: parsedArticle.articles,
            totalResults: parsedArticle.totalResults,
            loading: false
        });
        document.title = `NewsHeaders - ${this.capitalize(this.props.category)}`
    }

    async componentDidMount() {
        this.updateNews()
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e0c97f3b1bb240a98422b768ad162281&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        let finalArticle = await fetch(url);
        let parsedArticle = await finalArticle.json();
        this.setState({
            articles: this.state.articles.concat(parsedArticle.articles),
            totalResults: parsedArticle.totalResults
        });
    };

    render() {
        return (
            <>
                <h1 className='mb-4 text-center News-heading'>{`NewsHeaders - Top ${this.capitalize(this.props.category)} Headlines for Today`}</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.articles.length !== this.state.totalResults}
                    loader={<Spinner />}>
                    <div className='container my-3' >
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage ? element.urlToImage : "https://previews.123rf.com/images/alhovik/alhovik1709/alhovik170900030/86470279-breaking-news-background-world-global-tv-news-banner-design.jpg"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} on={element.publishedAt} source={element.source.name} />
                                </div>
                            })};
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News
