function setDate(params) {
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth()+1;
    d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
}


















// ********************************* MAIN *************************************************

setDate();