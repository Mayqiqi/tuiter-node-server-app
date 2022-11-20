import navigations from "./navigation.js";
import NavigationItem from "./NavigationItem.js";

const NavigationSidebar = (active) => {
    return(`
            <div class="list-group pt-2">
                <a class="list-group-item wd-right-bg-color" href="#"><i class="fab fa-twitter"></i></a>

                ${navigations.map(navigation=>{
                    return(NavigationItem(navigation, active))
    }).join('')}
            </div>

            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
