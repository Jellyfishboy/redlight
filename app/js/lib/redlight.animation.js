redlight.animation =
{
    imageGallery: function()
    {
        $('.product-thumb img').click(function()
        {
            var $this       = $(this),
                srcTarget   = $this.attr('data-src');
            $('.product-main img').attr('src', srcTarget);
            $('.product-thumb img').removeClass('selected');
            return $this.addClass('selected');
        });
    },

    displaySearch: function()
    {
        $('#search-icon').click(function()
        {
            $('#search-overlay').addClass('active');
            $(this).addClass('active');
        });

        $('#search-overlay i.icon-close').click(function()
        {
            $('#search-overlay').removeClass('active');
            $('#search-icon').removeClass('active');
        });
    },

    cartPopup: function()
    {
        var $wrapper = $('#cart-container'),
            wrapperHeight = $wrapper.outerHeight(),
            navbarHeight = 60;
        $wrapper.css('top', -(wrapperHeight-navbarHeight));
    },

    temporaryCartPopup: function(milliseconds)
    {
        $('#cart-container').addClass('active temp');
        setTimeout(function()
        {
            $('#cart-container').removeClass('active temp');
        }, milliseconds);
    },

    autoHideCartPoup: function()
    {
        setInterval(function()
        {
            var elem = $('#cart-container');
            if(elem.hasClass('active') && !elem.hasClass('temp'))
            {
                elem.removeClass('active');
            }
        }, 10000);
    },

    displayCart: function()
    {
        $('body').on('click', '#basket-icon.active-basket', function()
        {
            $('#cart-container').toggleClass('active');
        });
    },

    selectDelivery: function()
    {
        $('body').on('click', '#delivery-services table tbody tr', function()
        {
            $('#delivery-services table tbody tr').removeClass('active');
            $(this).addClass('active');
            $(this).find('td:last-child input').prop("checked", true);
        });
    }
}