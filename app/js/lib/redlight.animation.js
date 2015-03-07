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
        $('#search-icon').click( function()
        {
            $('#search-overlay').addClass('active');
            $(this).addClass('active');
        });

        $('#search-overlay i.icon-close').click(function()
        {
            $('#search-overlay').removeClass('active');
            $('#search-icon').removeClass('active');
        });
    }
}