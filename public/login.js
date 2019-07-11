
$("#submitButton").on("click", function(){
    const username = $("#inputUsername").val();
    const password = $("#inputPassword3").val();
    $.post("/login",{username:username, password:password}).then(function(err, res) {
        console.log(res);
        location.replace('/diagram.html');

        if (res.status === 200) {
        } else if (res.status === 202) {
            location.replace('/loadDB');
        } else {
            console.log('invalid')
        }
    })
} )
