$(document).ready(function() {
	
	CKEDITOR.replace( 'story_body',  {
		toolbar: [
			[ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ], ['Link', 'Unlink'], [ 'Source'],
			'/',
			[ 'Bold', 'Italic', 'RemoveFormat'], ['JustifyLeft', 'JustifyCenter', 'JustifyRight'], [ 'NumberedList','BulletedList'], ['Outdent', 'Indent'], ['Maximize']
			], // end toolbar
			width: 'auto',
			height: 'auto'
	}); // end cke replace
	
	
	// INITIALIZE THE PAGE
	initialize();
	
	
	
	// THIS IS THE FUNCTION TO UPDATE THE TITLE
	$("#story_title").keyup(function(){
		$("#preview_story_title").html("&nbsp;" + $(this).val());
	}); // end title preview
	
	
	// THESE ARE THE FUNCTIONS TO UPDATE THE BODY
	CKEDITOR.instances["story_body"].on("instanceReady", function() {
		update_body();
		//set keyup event
		this.document.on("keyup", update_body);
		 // and paste event
		this.document.on("paste", update_body);
		});
		function update_body() {
			CKEDITOR.tools.setTimeout( function() { 
					var body = CKEDITOR.instances["story_body"].getData();
					$("#preview_story_body").html(body); 
			}, 0); // end setTimeout	
		} // end update_body
		
		
		// THESE ARE THE FUNCTIONS TO UPDATE THE CALL TO ACTION
		$("#story_call_to_action").keyup(function(){
			$("#preview_story_call_to_action").html($(this).val());
		});
		
		// THESE ARE THE FUNCTIONS TO UPDATE THE LINK
		$("#story_link").keyup(function(){
			$("#preview_story_call_to_action").attr('href', $(this).val());
		});
		
		
		// THESE ARE THE FUNCTIONS TO UPDATE THE IMAGE
	
	
	
	function initialize() {
		$("#preview_story_title").html("&nbsp;" + $("#story_title").val());
		update_body();
		$("#preview_story_call_to_action").html($("#story_call_to_action").val());
		$("#preview_story_call_to_action").attr('href', $("#story_link").val());
	}
	
	
	
}); // end ready