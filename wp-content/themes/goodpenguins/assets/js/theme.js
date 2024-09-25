
/**
 * Highlights post archive menu items when viewing a single post page.
 * 
 * Adds 'current-menu-ancestor' class to the parent menu item 
 * if the current page's URL matches the beginning of the menu item's URL.
 */
document.addEventListener('DOMContentLoaded', function() {
    var currentUrlPath = window.location.pathname;
    var menuItems = document.querySelectorAll('.wp-block-navigation-item a');

    menuItems.forEach(function(menuItem) {
        var linkUrlPath = new URL(menuItem.href).pathname;

        if (currentUrlPath.startsWith(linkUrlPath) && linkUrlPath !== '/') {
            menuItem.parentElement.classList.add('current-menu-ancestor');
        }
    });
});

