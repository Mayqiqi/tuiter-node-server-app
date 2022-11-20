const NavigationItem = (navigation, active) => {
    return(`
         <a class="list-group-item wd-right-bg-color ${active===navigation.title? 'active':''}" href=${navigation.link}>
            <i class="${navigation.icon}"></i>
            <span class="wd-font-size d-none d-xl-inline">  ${navigation.title}</span>
         </a>
    `);
}

export default NavigationItem;