function openTabAboutMe(tabName) {

    var tab_titles = document.getElementsByClassName('tab-title');
    for (tab of tab_titles) {
        tab.classList.remove('active-tab-am');
    }
    document.getElementById('tab-' + tabName + '-am').classList.add('active-tab-am');

    var tab_aboutme = document.getElementsByClassName('tab-aboutme');
    for (tab of tab_aboutme) {
        tab.classList.remove('show');
    }
    document.getElementById(tabName).classList.add('show');
}

function openMenu() {
    document.getElementById('menu').style.transform = 'translateX(0)';
}

function closeMenu() {
    document.getElementById('menu').style.transform = 'translateX(100%)';
}

var triggerEl = document.querySelector('#navId a')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name
