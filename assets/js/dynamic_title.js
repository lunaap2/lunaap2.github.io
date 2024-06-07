window.onload = function () {
    const favicon = document.getElementById("favicon");
    const pageTitle = document.title;
    const attentionMessage = "Come back | One Code";

    document.addEventListener("visibilitychange", function (e) {
        if (document.hidden) {
            toggle();
        } else {
            document.title = pageTitle;
            favicon.href = "./assets/img/dp_male.svg"
        }
    });


    function toggle() {
        if (document.title === attentionMessage) {
            document.title = pageTitle;
            favicon.href = "./assets/img/dp_male.svg";
        } else {
            document.title = attentionMessage;
            favicon.href = "./assets/img/folded.png";
        }
    }
};
