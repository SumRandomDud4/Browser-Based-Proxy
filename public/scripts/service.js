(function() {
    function loadPage(page) {
        fetch(`public/pages/${page}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
    }

    console.log("Imported 'service.js'");

    loadPage("search.html")
})