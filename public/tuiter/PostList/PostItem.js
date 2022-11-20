const PostItem = (post) => {
  return(`
    <div class= "wd-grid-content">
      <div class='wd-grid-image'><img class="wd-avatar" src=${post.profile}></div>
    </div>

    <div class="wd-tuit">
      <div class="wd-tuit-heading">
          <div class="wd-tuit-author">
            ${post.userName} <i class="fa-solid fa-circle-check"></i><span class="wd-tuit-handle"> ${post.handle} ${post.time}</span>
          </div>

      </div>

      <div class="wd-tuit-content">
          <div class="wd-tuit-text">
            ${post.title}
          </div>


          <div class="wd-content-image wd-border-bottom">
              <div class="wd-tuit-content-image"><img class="wd-tuit-content-image" src=${post.image} /></div>
              <div class="wd-tuit-content-title">${post.topic}</div>
              <div class="wd-tuit-content-text">${post.text} </div>

          </div>


          <div class="wd-grid-icon">
            <div class="wd-grid-icon-each">
              <a style="text-decoration:none" href="#" ><i class="far fa-comment" style ="color:white"></i><span class="wd-grid-icon-number">${post.message}</span></a>
            </div>
            <div class="wd-grid-icon-each">
              <a style="text-decoration:none" href="#" ><i class="fa fa-retweet" style ="color:white"></i><span class="wd-grid-icon-number">${post.forward}</span></a>
            </div>
            <div class="wd-grid-icon-each">
              <a style="text-decoration:none" href="#" ><i class="fa fa-heart" style ="color:white"></i><span class="wd-grid-icon-like">${post.love}</span></a>
            </div>
            <div class="wd-grid-icon-each">
              <a style="text-decoration:none" href="#" ><i class="fa fa-share" style ="color:white"></i></a>
            </div>
          </div>


      </div>

    </div>




  `);

}
export default PostItem;