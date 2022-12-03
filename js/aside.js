function asideToggle(event) {
    if (event != undefined) {
        event.classList.toggle('active');
    }
    
    document.getElementById('wrapper').classList.toggle("aside-open");
}