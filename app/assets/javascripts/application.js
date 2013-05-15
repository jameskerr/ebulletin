// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//=	require jquery-ui
//= require ckeditor/init
//= require_tree .

$('.notice').hide();
$('.alert').hide();
$('.notice').delay(500).show("slide", {direction: 'right'}, 200).delay(3000).fadeOut(500);
$('.alert').delay(500).show("slide", {direction: 'right'}, 200);
