import { connect } from 'react-redux'
import BlogDetail from '../components/BlogDetail'
import { join } from 'path';

const mapStateToProps = (state) => {
    // we need to find the post whos id was selected
    const id = state.selectedid
    const post = state.posts[id]
    return {
        post
    }
}

const makeBlogDetailSmart = connect (
    mapStateToProps
)

const SmartBLogDetail = makeBlogDetailSmart(BlogDetail)
export default SmartBLogDetail