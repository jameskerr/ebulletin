//$(document).ready(function(){
	// EVERYTHING THAT NEEDS TO BE HIDDEN
	$("div.action").hide();
	
	// ALL THE EFFECTS FOR THE ALERTS AND NOTICES
	
	 
	 // SORTABLE OPTIONS
	$("#stories-table tbody:first").sortable({
				update: function(event, ui) {
					var ids = $(this).sortable('toArray');
					var load = {stories: ids};
					$.ajax({
						type: 'post',
						data: load,
						url: '/stories/sort'
					});// end Ajax
				}, // end update
				handle: ".content-title",
				placeholder: "sortable-placeholder",
				cursor: "move"
		}).disableSelection();; // end Story Sortable Options
		
	$("#jobs-list").sortable({
		update: function(event, ui) {
			var ids = $(this).sortable('toArray');
			var load = {jobs: ids};
			$.ajax({
				type: 'post',
				data: load,
				url: '/jobs/sort'
			}); // end ajax
		}// end update
	}); // end Job Sortable options

	 $("#stories-table tr").mouseover(
		function() { $(".action",this).show(); }
	).mouseout(
		function() { $(".action",this).hide(); }
	); // end mouseovers
	
	$(".posting").mouseover(
		function() { $(".action",this).show(); }
	).mouseout(
		function() { $(".action",this).hide(); }
	); // end mouseovers
//}); // end ready