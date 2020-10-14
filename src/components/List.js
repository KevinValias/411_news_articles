import React, { Component } from 'react'

class List extends Component {
    componentDidMount () {
        return(
         this.props.fetchArticles()
            
        );
    }
    // write componentDidMount function
    // call "this.props.fetchArticles"

    render() {
        return (
            <div>
                {this.props.articles.map(a => {
                    return <p>{a.title}</p>
                })}
            </div>
        )
    }
}

export default List