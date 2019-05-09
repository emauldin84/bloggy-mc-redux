import { connect } from 'react-redux';
import BlogList from '../components/BlogList'
import { selectPost } from '../actions'

// translate redux state in react props
const mapStateToProps = (state) => {
    return {
        // react-prop: redux-state
        posts: state.posts
    }
}
// if necessary, translate redux action dispatch into react props
const mapDispatchToProps = (dispatch) => {
    return{
        // react-prop: redux-dispatch
        handleClick: (id) => {
            dispatch(selectPost(id));
        }
    }
}




const makeBlogListSmart = connect(mapStateToProps, mapDispatchToProps);
const SmartBlogList = makeBlogListSmart(BlogList);

export default SmartBlogList;
