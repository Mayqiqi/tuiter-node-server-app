import WhoToFollowListItem from "./WhoToFollowListItem.js"
import items from './who.js';

const WhoToFollowListPeople = () => {
    return(`
        <ul class="list-group wd-right-border-rounded mt-2">
         <li class="list-group-item wd-right-font-border wd-right-width wd-right-bg-color">Who to follow</li>
          ${items.map(item=>{
        return(WhoToFollowListItem(item));
        }).join('')
    }
        </ul>
    `);
}
export default WhoToFollowListPeople;