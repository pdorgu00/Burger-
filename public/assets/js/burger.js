$(function () {

    $('.finished').on('click', function (event) {
        let id = $(this).data('id');
        let eaten = {
            eaten: true
        };
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: eaten
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $('#addburger').on('click', function (event) {
        event.preventDefault();
        let newBurger = {
            name: $('#addburger').val()
        };
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            location.reload();
        });
    });

})