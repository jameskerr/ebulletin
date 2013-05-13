$(document).ready(function(){
	 $("div.action").hide();
	 

	
	$("#stories-table tbody").sortable({
				update: function(event, ui) {
					$.ajax({
						type: 'post',
						data: $(this).sortable('serialize'),
						url: '/stories/sort'
					});// end Ajax
				},
				cancel: ".content" // end update
		}).disableSelection();; // end Story Sortable Options

	$("#jobs-list").sortable({
		update: function(event, ui) {
			$.ajax({
				type: 'post',
				data: $(this).sortable('serialize'),
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
	
	
	}); // end ready