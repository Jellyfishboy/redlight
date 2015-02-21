redlight.misc =
{
    changeListType: function()
    {
        $("#get-list").click(function() 
        {
            $(this).find('span').addClass('selected');
            $("#get-grid span").removeClass('selected');
            $("#grid-list").hide();
            $("#horz-list").show();
        });
        $("#get-grid").click(function() 
        {
            $(this).find('span').addClass('selected');
            $("#get-list span").removeClass('selected');
            $("#grid-list").show();
            $("#horz-list").hide();
        });
    },

    duplicateAddress: function()
    {
        $('#use-delivery-address').change(function() 
        {
            if (this.checked) 
            {
                $('.copy-billing').each(function() 
                {
                    fieldValue = $(this).val();
                    fieldAttribute = $(this).attr('data-field-name');
                    $('input[data-field-name="billing-' + fieldAttribute + '"]').val(fieldValue);
                });
            } 
            else 
            {
                return $('input[data-field-name*="billing-"').val('');
            }
        });
    }
}