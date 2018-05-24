$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        $("ul#repos").empty();

        var username = $('input#username').val();

        // API endpoint
        var url = `https://api.github.com/users/${username}/repos`;

        $.getJSON(url)
        .done(function (data) {
            data.forEach(repo => {
                $("ul#repos").append(`
                    <li>${repo["name"]}</li>
                `);
            });
        });
    });
});
