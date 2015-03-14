$(function()
{
    new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ), 
    {
        type : 'cover'
    });
    redlight.misc.changeListType();
    redlight.misc.duplicateAddress();
    redlight.misc.changeQuantity();
    redlight.misc.scrollHelper();
    redlight.misc.escapeSearch();
    redlight.animation.imageGallery();
    redlight.animation.displaySearch();
    // redlight.animation.cartPopup();
});