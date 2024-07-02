
$(document).ready(function(){
    $('.ajax-link').click(function(e){
        e.preventDefault();
        var pageUrl = $(this).attr('href');
        $('#page-content').load(pageUrl);
    });
});