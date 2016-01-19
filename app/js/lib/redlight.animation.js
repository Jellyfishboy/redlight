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

    displayCart: function()
    {
        $('body').on('click', '#basket-icon.active-basket', function()
        {
            $('#cart-container').toggleClass('active');
        });
    }
}