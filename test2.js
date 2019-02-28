/**
 * Created by dosapati on 2/28/19.
 */

/*
 * Reference: http://alexmarandon.com/articles/web_widget_jquery/
 * Slider used: http://bxslider.com/examples
 * Shadow effects: http://www.paulund.co.uk/creating-different-css3-box-shadows-effects
 * Blogspot JSON feed: http://beautifulbeta.wikidot.com/json-feeds
 *
 * Usage:
 * Add the following code in the html
 *
 * ------------------------------------------------------------------------------------------------
 * <script src="http://jquery-widget.herokuapp.com/assets/blogger-widget.js" type="text/javascript"></script>
 * <div data-blog-name="jitu-blog" data-no-css="false" class="blogger-jquery-widget effect6"></div>
 * ------------------------------------------------------------------------------------------------
 *
 * */
(function() {
// Localize jQuery variable
	var jQuery;

	/******** Load jQuery if not present *********/
	if (window.jQuery === undefined) {
		var script_tag = document.createElement('script');
		script_tag.setAttribute("type","text/javascript");
		script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
		if (script_tag.readyState) {
			script_tag.onreadystatechange = function () { // For old versions of IE
				if (this.readyState == 'complete' || this.readyState == 'loaded') {
					scriptLoadHandler();
				}
			};
		} else {
			script_tag.onload = scriptLoadHandler;
		}
		// Try to find the head, otherwise default to the documentElement
		(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
	} else {
		// The jQuery version on the window is the one we want to use
		jQuery = window.jQuery;
		main();
	}

	/******** Called once jQuery has loaded ******/
	function scriptLoadHandler() {
		// Restore $ and window.jQuery to their previous values and store the
		// new jQuery in our local jQuery variable
		jQuery = window.jQuery.noConflict();
		// Call our main function
		main();
	}

	/******** Our main function ********/
	function main() {

		var css_link = jQuery("<link>", {
			rel: "stylesheet",
			type: "text/css",
			href: "skil-bootstrap.css"
		});

		//$("<style type='text/css'> .skil-ai-styles { @import (less) url(\"skil-bootstrap.css\");} </style>").appendTo("head");

		css_link.appendTo('head');
		// Load image slider library
		//jQuery.getScript("http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.min.js");
		//write the code in the following way if your widget is dependent on jquery libraries
		var modelHtml001 = `<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
<!--         <h4 class="modal-title">Modal Header</h4> -->
      </div>
      <div class="modal-body text-center">
        <h1>Full screen  Transparent Bootstrap Modal</h1>
        <p>FEEL FRREE TO GET YOUR MODAL CODE HERE FOLKS.</p>
        <a class="pre-order-btn" href="#">GET THE MODAL CODE</a>
      </div>
      <div class="modal-footer">
<!--         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
      </div>
    </div>

  </div>
</div>`;
		jQuery('#example-widget-container').html(modelHtml001);
		jQuery.getScript("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", function() {
			jQuery(document).ready(function($) {
				console.log("bootstrap js is loaded...!");
				$('#myModal').modal('show');
			});
		});
	}

	function make_widget($, widget) {
		var blogName = widget.data('blog-name');
		/******* Load CSS *******/
		// if data-no-css is set to false then do not load css, so that the user can customize the style him self
		if(widget.data('no-css') != true)
			addCss("http://jquery-widget.herokuapp.com/assets/application.css");

		var jsonp_url = "http://" + blogName + ".blogspot.com/feeds/posts/default?alt=json-in-script&callback=?";
		$.getJSON(jsonp_url, function(data) {
			var root = $('<ul/>');
			$.each(data.feed.entry, function(i, item){
				var tags = "";
				if(item.category) {
					$.each(item.category, function(i, tag){
						tags += "<li>" + tag.term + "</li>";
					});
				}

				var published_date = format_date(new Date(item.published.$t));
				var item_str = '<li>' +
					'<h1>' + item.title.$t + '</h1>' +
					'<span class="posted_on">Posted on ' + published_date + '</span>' +
					'<ul class="categories">' + tags + '</ul>' +
					'</li>';
				$(item_str).appendTo(root);
			});
			root.appendTo(widget);
			root.bxSlider({
				auto: true,
				easing: 'easeInQuint',
				speed: 1000
			});

			adjustArrowTop($, widget);
		});
	}

	function addCss(url) {
		var css_link = jQuery("<link>", {
			rel: "stylesheet",
			type: "text/css",
			href: url
		});
		css_link.appendTo('head');
	}

	function adjustArrowTop($, widget) {
		var top = widget.height() / 2;
		widget.find(".bx-prev").css("top", top);
		widget.find(".bx-next").css("top", top);
	}

	function trimText(text, length) {
		text = text || "";
		length = parseInt(length);
		return text.length > length ? (text.substring(0,length) + "...") : text;
	}

	function format_date(date) {
		var d = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();
		return d + "/" + month + "/" + year;
	}
})(); // We call our anonymous function immediately
