document.getElementById('chk_cn').addEventListener('change', function() {
    var cnElements = document.getElementsByClassName('cn');
    for (var i = 0; i < cnElements.length; i++) {
        cnElements[i].style.display = this.checked ? 'none' : 'block';
    }
});

document.getElementById('chk_lang_cn').addEventListener('change', function() {
    var langCnElements = document.querySelectorAll('[lang="cn"]');
    for (var i = 0; i < langCnElements.length; i++) {
        langCnElements[i].style.display = this.checked ? 'none' : 'inline';
    }
});