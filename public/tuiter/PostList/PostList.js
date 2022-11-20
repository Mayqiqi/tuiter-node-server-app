import posts from './post.js'
import PostItem from "./PostItem.js"

const PostList = () => {
  return(`
      <div class="wd-grid-content">

       ${posts.map(post=>{
        return(PostItem(post));
         }).join('')}
      </div>


  `);
}
export default PostList;