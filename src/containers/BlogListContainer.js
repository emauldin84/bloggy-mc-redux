import { connect } from 'react-redux';
import BlogList from '../components/BlogList'

// translate redux state in react props
const mapStateToProps = (state) => {
    return {
        // react-prop: redux-state
        posts: state.posts
    }
}
// if necessary, translate redux action dispatch into react props

const makeBlogListSmart = connect(mapStateToProps);
const SmartBlogList = makeBlogListSmart(BlogList);

export default SmartBlogList;
