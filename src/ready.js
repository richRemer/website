/**
 * Execute callback when document is ready.
 * @param {Document} document
 * @param {function} fn
 */
function ready(document, fn) {
    const onready = fn.bind(document);

    if (document.readyState !== "complete") {
        document.addEventListener("DOMContentLoaded", onready);
    } else {
        setTimeout(onready, 0);
    }
}

module.exports = ready;
