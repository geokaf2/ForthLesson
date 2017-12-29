import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router-dom';

class PostShow extends Component {   

    //When component appears on the screen
    componentDidMount(){

        ////////////////////////////////////////////////////////////////
        // NOTE ---- CACHING DATA IF WE DONT WANT TO DO THE QUERY AGAIN
        // CHECK IF const {post} = this.props EXISTS AND IF SO
        // DONT DO THE QUERY       
        ///////////////////////////////////////////////////////////////

        //This prop is provided by React Router
        const currentId = this.props.match.params.id;
        this.props.fetchPost(currentId);
    }

    onDeleteClick() {
        const {id} = this.props.match.params;        
        this.props.deletePost(id, ()=>{
            this.props.history.push('/'); // TO GO BACK TO MAIN PAGE
        });
        // or deletePost(this.props.post.id) 
        //but may the post is not yet available cause 
        //is loading for first time and not exists on state
    }

    render() {            
        const {post} = this.props;

        if(!post){
            return <div>Loading...</div>;
        }
        
        return(
            <div>
                <Link to="/">Go Back</Link>
                <button 
                    className = "btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p> 
            </div>
        );
    }
}

//ownProps is the props of the component
function mapStateToProps({posts}, ownProps){
    return {
        post: posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);