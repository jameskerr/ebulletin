$(document).ready(function() {
	CKEDITOR.stylesSet.add( 'my_styles',
[
    // Block-level styles
    { name : 'Blue Title', element : 'h2', styles : { 'color' : 'Blue' } },
    { name : 'Red Title' , element : 'h3', styles : { 'color' : 'Red' } },
 
    // Inline styles
    { name : 'CSS Style', element : 'span', attributes : { 'class' : 'my_style' } },
    { name : 'Marker: Yellow', element : 'span', styles : { 'background-color' : 'Yellow' } }
]);
	
	
	
	
	CKEDITOR.replace( 'story_body',  {
		toolbar: [
			[ 'Bold', 'Italic', 'RemoveFormat'], ['Link', 'Unlink'] , 
			 // NEW LINE
			[ 'list', 'indent', 'blocks', 'align' ], [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ], [ 'Source'] , ['Maximize'],
			], // end toolbar
			width: '495px',
			height: '380px',
			stylesSet: 'my_styles'
	}); // end cke replace
}); // end ready