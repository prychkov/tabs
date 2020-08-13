window.addEventListener('DOMContentLoaded', function() {
    let tabs = document.querySelectorAll('.tabs-class'),
        parentTabs = document.querySelector('.parent-tabs-class'),
        tabContent = document.querySelectorAll('.tab-content-class');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show-class');
            tabContent[i].classList.add('hide-class');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide-class')) {
            tabContent[b].classList.remove('hide-class');
            tabContent[b].classList.add('show-class');
        }
    }

    parentTabs.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('tabs-class')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }                
            }
        }
    });
});