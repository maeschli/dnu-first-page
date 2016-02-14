rotate = function (current) 
{
	current++;
	if (current == banners) current = 0;
	
	prev = (current>0) ? current-1 : banners-1;
	
	$('.imageheader-image[num="'+prev+'"]').fadeOut(300, function () 
	{
		$('.imageheader-image[num="'+current+'"]').fadeIn(1000);
	});
	$('.imageheader-desc[num="'+prev+'"]').fadeOut(300, function ()
	{
		$('.imageheader-desc[num="'+current+'"]').fadeIn(1000);
	});
	
	setTimeout('rotate('+current+')', 6000);
}

$(function()
{
	if (banners > 1) rotate(-1);
});