// Copyright (c) 2020, Thorsten A. Weintz. All rights reserved.
// Licensed under the MIT license. See LICENSE in the project root for license information.

/**
 * Contains class name of default cookie layer.
 */
const COOKIE_LAYER_CLASS = 'lOPC8';

/**
 * Contains class name of default login layer.
 */
const LOGIN_LAYER_CLASS = 'ZcHy5';

/**
 * Contains body element of HTML document.
 */
var body = document.getElementsByTagName('body')[0];

/**
 * Detaches first element of HTML document by class name.
 * @param {*} className Contains class name of HTML element.
 */
var detachFirstElementByClassName = (className) => {
    var elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
        elements[0].remove();
    }
};

/**
 * Detaches popup login layer opened while profile content scrolling.
 */
var detachPopupLoginLayer = () => {
    body.style.overflow = 'auto';
    body.lastChild.remove();
};

/**
 * Initializes observer to watch for changes being made by DOM tree.
 */
var observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
        detachPopupLoginLayer();
        observer.disconnect();
    });    
});

/**
 * Applies body element observer.
 */
observer.observe(body, { 
    attributes : true, 
    attributeFilter : ['style'] 
});

/**
 * Initializes extension.
 */
function initialize() {
    let classNames = [ COOKIE_LAYER_CLASS, LOGIN_LAYER_CLASS ];
    for (var i = 0; i < classNames.length; i++) {
        detachFirstElementByClassName(classNames[i]);
    }
}

initialize();
