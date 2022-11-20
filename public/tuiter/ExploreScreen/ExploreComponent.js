import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
              <div class="wd-margin-top position-relative">
                <i class="fa fa-search style='color: white wd-search-icon"></i>
                <input id="search-input" class="wd-search-input wd-rounded-corners-all-around " type="text" placeholder="Search Twitter">
                <a href="explore-settings.html id="search-input-icon"><i class="fa fa-cog fa-2x style='color: wd-cog"></i></a>
              </div>
              <ul class="nav nav-tabs wd-grid-heading-bar wd-padding-top">
                  <li class="nav-item">
                      <a class="nav-link active " href="for-you.html">For you</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="trending.html">Trending</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="news.html">News</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="sports.html" >Sports</a>
                  </li>
                  <li class="nav-item wd-border-bottom-line">
                      <a class="nav-link d-none d-md-block" href="entertainment.html" >Entertainment</a>
                  </li>
              </ul>
              <div class="position-relative pt-1">
                <div class="wd-image-text position-relative wd-border-bottom">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="wd-content-img">
                <div>
                    <span class="d-block d-sm-none wd-content-text-xs">SpaceX's Starship</span>
                    <span class="d-none d-sm-block d-md-none wd-content-text-sm">SpaceX's Starship</span>
                    <span class="d-none d-md-block d-lg-none wd-content-text-md">SpaceX's Starship</span>
                    <span class="d-none d-lg-block  d-xl-none wd-content-text-lg">SpaceX's Starship</span>
                    <span class="d-none d-xl-block  wd-content-text-xl">SpaceX's Starship</span>

                </div>
               </div>
              </div>

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;