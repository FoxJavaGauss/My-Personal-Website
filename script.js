function b1() {
    document.body.style.background = "linear-gradient(to bottom, #33ccff 0%, #ff6600 100%)";
}
function b2() {
    document.body.style.background = "red";
}
function b3() {
    document.body.style.background = "orange";
}
function b4() {
    document.body.style.background = "yellow";
}
function b5() {
    document.body.style.background = "green";
}
function b6() {
    document.body.style.background = "blue";
}
function b7() {
    document.body.style.background = "purple";
}
function ParagraphCount() { 
    return document.getElementById("paragraphs").innerHTML = document.getElementsByTagName("p").length;
}
function Edit() {
    javascript:document.body.contentEditable = 'true';
    document.designMode = 'on';
    void 0
}