var listItems = document.querySelectorAll("a");
var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].href = `?url=${listItems[i].href}`;
}

listItems = document.querySelectorAll("link");
for (i = 0; i < listItems.length; i++) {
    listItems[i].href = `?url=${listItems[i].href}`;
}

document.title = "Squilt"; // Shitty name but what else you got