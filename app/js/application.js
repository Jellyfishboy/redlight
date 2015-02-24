$(function()
{
    new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ), 
    {
        type : 'cover'
    });
    redlight.misc.changeListType();
    redlight.misc.duplicateAddress();
    redlight.animation.imageGallery();
});