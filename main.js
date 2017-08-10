$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

function Selected(a) {
        var label = a.value;
        if (label==1) {
            document.getElementById("Block1").style.display='block';
           
                        
        } else if (label==2) {
            
            document.getElementById("Block2").style.display='block';
        } else {
            document.getElementById("Block1").style.display='none';
            document.getElementById("Block2").style.display='none';
        }
         
}
