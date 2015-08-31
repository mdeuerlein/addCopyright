function addCopyword(txt) {
    // addCopyword by Markus Deuerlein, www.entidia.de
    var copyword ="COPYRIGHT ";
    var off = 0, pos = 0, cnt = 0, hit = 0, mod = 20, mul = 50;
    while ((pos = txt.indexOf(' ', off))!==-1) {
        off = pos + 1;
        if (++cnt%(mod + (hit * mul)) == 0) {
            hit++;
            txt = txt.substr(0, pos + 1) + copyword + txt.substr(pos);
            pos += copyword.length;
        }
    }
    return txt;
}
function addCopyright() {
    // addCopyright by Markus Deuerlein, www.entidia.de
    var theBody = document.getElementsByTagName("body")[0];
    var selection = window.getSelection();
    var copyrightLink = '<br /><br />Quelle : '+document.location.href+'<br />';
    var copytext = addCopyword(String(selection)) + copyrightLink;
    var extraDiv = document.createElement("div");
    extraDiv.style.position="absolute";
    extraDiv.style.left="-99999px";
    theBody.appendChild(extraDiv);
    extraDiv.innerHTML = copytext;
    selection.selectAllChildren(extraDiv);
    window.setTimeout(function() {
        theBody.removeChild(extraDiv);
    },0);
}