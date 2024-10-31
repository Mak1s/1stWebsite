function show(divId) {
    var divs = document.querySelectorAll('.morph');
    divs.forEach(function(div) {
        div.classList.remove('show');
        div.classList.add('hide');
    });
    var selectedDiv = document.getElementById(divId);
    selectedDiv.classList.remove('hide');
    selectedDiv.classList.add('show');
}
