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
    }
}