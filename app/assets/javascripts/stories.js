	// Initialize the CKEditor for the rich text body.
if ($("#story_body").length) {
	CKEDITOR.replace( 'story_body',  {
		toolbar: [
			[ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ], ['Link', 'Unlink'], [ 'Source'],
			'/',
			[ 'Bold', 'Italic', 'RemoveFormat'], ['JustifyLeft', 'JustifyCenter', 'JustifyRight'], [ 'NumberedList','BulletedList'], ['Outdent', 'Indent'], ['Maximize']
			], // end toolbar
			width: 'auto',
			height: 'auto'
	}); // end cke replace
	
	// Function called to update the preview modal reveal.
	function updateStoryPreview() {
		// Update the title
		$("#preview_story_title").html("&nbsp;" + $("#story_title").val());
		// Update the body.
		updateBody();
		// Update the call to action text.
		$("#preview_story_call_to_action").html($("#story_call_to_action").val());
		// Update the link under the call to action text.
		$("#preview_story_call_to_action").attr('href', $("#story_link").val());
		// Update the image.
		image_name = $('#story_image_name').val();
		if (image_name == "")
			$('.main-image').hide();
		else {
			$('.main-image').show();
			$('#preview_image').attr('src', 'https://law-chapman-csm.symplicity.com/tinyfiles/classifieds/' + image_name).load();
		}
	}
	
	// Function to update the body text.
	function updateBody() {
		CKEDITOR.tools.setTimeout( function() { 
				var body = CKEDITOR.instances["story_body"].getData();
				$("#preview_story_body").html(body); 
		}, 0); // end setTimeout	
	} // end update_body
	
	// Updates the preview modal with the current values.
	$('[data-reveal-id="preview_story_modal"]').click( function() {
		$('#preview_story_modal').css('width','660px');
		updateStoryPreview();
	});
}