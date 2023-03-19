jQuery(function($){
	$('body').on('click', '.loadmore', function() {
 
		var button = $(this);
		var data = {
			'action': 'chic_lifestyle_loadmore',
			'page' : chic_lifestyle_loadmore_params.current_page,
			'cat' : chic_lifestyle_loadmore_params.cat
		};
 
		$.ajax({
			url : chic_lifestyle_loadmore_params.ajaxurl,
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				button.text('Loading...');
			},
			success : function( data ) {
				if( data ) { 
					$( 'div.blog-list-block' ).append(data);
					button.text( 'More Posts' );
					chic_lifestyle_loadmore_params.current_page++;
 
					if ( chic_lifestyle_loadmore_params.current_page == chic_lifestyle_loadmore_params.max_page ) { 
						button.remove();
					}
				} else {
					button.remove();
				}
			}
		});
	});
});