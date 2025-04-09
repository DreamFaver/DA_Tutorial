// Language Switcher Functionality
document.getElementById('language-selector').addEventListener('change', function() {
    var language = this.value;
    document.querySelectorAll('[data-en]').forEach(function(element) {
        var key = element.getAttribute('data-' + language);
        if (key) {
            element.innerHTML = key;
        }
    });
});
