var siteName = document.getElementById("bname");
var siteUrl = document.getElementById("website");

var bookmark;
if (localStorage.getItem("bookmark") != null) {
    bookmark = JSON.parse(localStorage.getItem("bookmark"))
    displayBookmark()
} else {
    bookmark = [];
}
function submitBookmark() {
    var bookmarker = {
        siteName: bname.value,
        siteUrl: website.value
    }
    bookmark.push(bookmarker)
    localStorage.setItem("bookmark", JSON.stringify(bookmark))
}
function displayBookmark() {
    cartoona = "";
    for (var i = 0; i < bookmark.length; i++) {
        cartoona += `   <tr>
        <td>${i}</td>
        <td>${bookmark[i].siteName}</td>
        <td>${bookmark[i].siteUrl}</td>    
         <td><button onclick="visitUrl(${i})" class="btn btn-outline-primary">Visit</button></td>   
         <td><button onclick="deleteUrl(${i})" class="btn btn-outline-danger">Delete</button></td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}
function deleteUrl(index) {
    bookmark.splice(index, 1)
    displayBookmark()
    localStorage.setItem("bookmark", JSON.stringify(bookmark))
}
function visitUrl(index) {
    window.location.href = bookmark[index].siteUrl;
}