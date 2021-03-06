import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';     //it connects our components to redux
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {

//******************   All this state and fetching will now be done using reducer   *********************//

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         posts: []
    //     }
    // }

    componentWillMount(){
        this.props.fetchPosts();
        // fetch(`https://jsonplaceholder.typicode.com/posts`)
        //     .then(res => res.json())
        //     .then(data => this.setState({posts: data}))
        //console.log(this.state.posts)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }
    

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
              <h1>Posts</h1> 
              {postItems} 
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    //from root reducer we are getting posts. And in postReducer we have saved data in items
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
