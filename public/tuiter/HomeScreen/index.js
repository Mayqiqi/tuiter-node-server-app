import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import PostList from "../PostList/PostList.js";

$('#wd-home').append(`
  <div class="row mt-2 justify-content-center">
    <div class="col-xl-2 col-lg-1 col-2">
        ${NavigationSidebar("Home")}
     </div>
    <div class="col-xl-6 col-lg-7 col-10">
       ${PostList()}
    </div>

    <div class="col-xl-4 col-lg-4 d-none d-lg-block mt-2 ">
       ${PostSummaryList()}
    </div>
  </div>
 `);