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
                $('.copy-delivery').each(function() 
                {
                    fieldValue = $(this).val();
                    fieldAttribute = $(this).attr('data-field-name');
                    return $('input[data-field-name="billing-' + fieldAttribute + '"]').val(fieldValue);
                });
            } 
            else 
            {
                return $('input[data-field-name*="billing-"]').val('');
            }
        });
    },

    changeQuantity: function()
    {
        $('.decrease-quantity').click(function() 
        {
            if ($('#item-quantity').val() > 1) {
                return $('#item-quantity').val(parseInt($('#item-quantity').val()) - 1);
            }
        });
        $('.increase-quantity').click(function() {
            return $('#item-quantity').val(parseInt($('#item-quantity').val()) + 1);
        });
    },

    scrollHelper: function()
    {
        $scroller = $('.scroller');
        if ($scroller.length == 0)
        {
            return false
        } 
        else
        {
            $scroller.bind('scroll', function() 
            {
                if ($(this)[0].offsetHeight < $(this)[0].scrollHeight)    
                {
                    if ($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight) 
                    {
                        $('#cart-navigation .icon-arrow-down-2').css('display', 'none');
                        $('#cart-navigation .icon-arrow-up-2').css('display', 'inline-block');
                    }
                    else if($(this).scrollTop() == 0)
                    {
                        $('#cart-navigation .icon-arrow-up-2').css('display', 'none');
                        $('#cart-navigation .icon-arrow-down-2').css('display', 'inline-block');
                    }
                }
            });
            if (!($scroller[0].offsetHeight < $scroller[0].scrollHeight))    
            {
                $('#cart-navigation').css('display', 'none');
            }
        }
    },

    escapeSearch: function()
    {
        $(document).keyup(function (e)
        {
          if (e.keyCode == 27) $('#search-overlay i.icon-close').click();
        });  
    }
}