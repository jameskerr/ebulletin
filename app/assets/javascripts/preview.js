 //$(document).ready(function(){
	// EVERYTHING THAT NEEDS TO BE HIDDEN
	$("div.action").hide();
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
				handle: ".story-break",
				placeholder: "sortable-placeholder",
				cursor: "move"
		}); // end Story Sortable Options
		
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

	$("#publics-list").sortable({
		update: function(event, ui) {
			var ids = $(this).sortable('toArray');
			var load = {publics: ids};
			$.ajax({
				type: 'post',
				data: load,
				url: '/publics/sort'
			}); // end ajax
		}// end update
	}); // end Job Sortable options

	$("#stories-table tr").mouseover(
		function() { $(".action",this).show(); }
	).mouseout(
		function() { $(".action",this).hide(); }
	); // end mouseovers
	
	$(".sort-list li").mouseover(
		function() { $(".action",this).show(); }
	).mouseout(
		function() { $(".action",this).hide(); }
	); // end mouseovers

	$("td.right-rail h2").mouseover(
		function() { $(".action",this).show(); }
	).mouseout(
		function() { $(".action",this).hide(); }
	); // end mouseovers

	$('.action a').click(function() {
		scroll_value = $('body').scrollTop();
		createCookie("scroll",scroll_value);
	});
	
	
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	function eraseCookie(name) {
		createCookie(name,"",-1);
	}
	