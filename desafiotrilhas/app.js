
document.querySelector('form').addEventListener('submit', function(event) {
    
    event.preventDefault();

    var formData = {};

    var inputs = this.querySelectorAll('input');

    for (var i = 0; i < inputs.length; i++) {
        
        formData[inputs[i].name] = inputs[i].value;
    }

    console.log(formData);
});

document.querySelector('button[type="reset"]').addEventListener('click', function(event) {
    
    event.preventDefault();
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
});
