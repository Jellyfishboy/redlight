redlight.misc =
{
    changeListType: function()
    {
        $("#get-list").click(function() {
            $(this).find('span').addClass('selected');
            $("#get-grid span").removeClass('selected');
            $("#grid-list").hide();
            $("#horz-list").show();
        });
        $("#get-grid").click(function() {
            $(this).find('span').addClass('selected');
            $("#get-list span").removeClass('selected');
            $("#grid-list").show();
            $("#horz-list").hide();
        });
    }
}