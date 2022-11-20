const WhoToFollowListItem = (who) =>{
  return(`
    <li class="list-group-item ps-2 wd-right-bg-color ps-0 ">
        <div class="wd-right-float-left">
              <img class="wd-right-logo"  src=${who.avatarIcon}/>
        </div>
        <div class="wd-right-float-left ">
             <div class="wd-right-title ps-2">${who.userName} <i class="fa fa-circle"></i></div>
             <div class="wd-right-author ps-2 ">@${who.handle} </div>
        </div>
        <div class="wd-right-float-right">
             <button  class="btn btn-primary wd-button-tweet-left">Follow</button>
        </div>
    </li>
  `);
}
export default WhoToFollowListItem;