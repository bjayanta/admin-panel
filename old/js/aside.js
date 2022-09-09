// Aside expand function
function expandFunction() {
    let pageAside = document.getElementById("page-aside")
    let asideLayer = document.getElementById("aside-layer")
    let mainBar = document.getElementById("main-bar")

    pageAside.classList.toggle("expand")
    asideLayer.classList.toggle("show")
    mainBar.classList.toggle("main-bar-expand")
}






// aside menu active function
function asideMenuActiveFanction() {
	// set variables 
    let menu = document.querySelectorAll('a.sigle-nav-link');

    let activeMenu = document.getElementById('is-menu-active');
    
    if (activeMenu) {
        let accordionCollapse = activeMenu.parentElement.parentElement;
        let accordionItem = accordionCollapse.parentElement;
        let accordionButton = accordionItem.children[0];
        let tabPane = accordionItem.parentElement.parentElement;
        let tabButtons = document.querySelectorAll('[data-bs-toggle="pill"]')
        
        // 
        tabButtons.forEach(tabButton => {
            if (tabButton.id == activeMenu.parentElement.parentElement.parentElement.id + "-tab" ) {
                tabButton.classList.add("active")
                activeMenu.parentElement.parentElement.parentElement.classList.add("active")
                activeMenu.parentElement.parentElement.parentElement.classList.add("show")
                
                if (activeMenu && activeMenu.className == 'sigle-nav-link') {
                    activeMenu.classList.add("active")
                }
            } else if (activeMenu || activeMenu.className == 'sigle-nav-link') {
                activeMenu.classList.add("active")
                accordionCollapse.classList.add("show")
                accordionButton.classList.add("active")
                accordionButton.classList.remove("collapsed")

                if (tabButton.id == tabPane.id + "-tab") {
                    tabButton.classList.add("active")
                    tabPane.classList.add("active")
                    tabPane.classList.add("show")
                }
            }
        });
    } else {
        document.getElementById('v-pills-pages').classList.add("active")
        document.getElementById('v-pills-pages').classList.add("show")
    }
}

asideMenuActiveFanction();