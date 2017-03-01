const ready = require("./ready");

ready(document, () => {
    document.getElementById("status").innerText = "Loaded";
});
