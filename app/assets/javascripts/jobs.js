$(document).ready(function () {
	function updateJobPreview() {
		// Update the title.
		$('.job-title a').html($('#job_title').val());
		// Update the employer.
		$('.employer').html($('#job_employer').val());
		// Update the practice area
		$('.practice-area').html($('#job_practice_area').val());
		// Update the link
		$('.job-title a').attr('href', $('#job_link').val());
	}

	$('[data-reveal-id="preview_job_modal"]').click( function() {
			updateJobPreview();
			console.log("I clicked the modal!");
	});
}); // end ready