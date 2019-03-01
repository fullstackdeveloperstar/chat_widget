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
	var isOpen = false;

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
		var modelHtml001 = `
		<div class="chat-container">
			<div class="chat-content">
				<div class="chat-content-header">
					
					<div class="header-bot-content">
						<i>
							<svg viewBox="0 0 277 276" xmlns="http://www.w3.org/2000/svg"><g transform="translate(.22 .462)" fill="none" fill-rule="evenodd"><rect class="color" x="1.78" y="1.538" width="273" height="272.443" rx="10"></rect><path d="M185.99 275.256h80.127a9.988 9.988 0 0 0 9.991-9.991V10.246c0-5.517-4.473-9.99-9.99-9.99H10.536a9.988 9.988 0 0 0-9.991 9.99v255.019c0 5.517 4.473 9.99 9.99 9.99H86.46V260.75c4.152-20.961 21.273-37.27 42.671-40.255v-10.092H57.319c-4.68 0-8.453-3.773-8.453-8.427v-97.758c0-4.647 3.78-8.428 8.445-8.428h64.862V82.035h13.745V58.33c-5.339-1.888-9.164-6.983-9.164-12.971 0-7.596 6.154-13.754 13.746-13.754 7.59 0 13.745 6.158 13.745 13.754 0 5.988-3.825 11.083-9.164 12.97v23.706h13.745V95.79h60.264c4.669 0 8.462 3.773 8.462 8.428v97.758c0 4.647-3.785 8.427-8.454 8.427H144.18v10.223c21.024 3.31 37.756 19.512 41.81 40.24v14.39z" fill="#FFF" opacity=".85"></path><rect fill="#FFF" x="72.994" y="123.785" width="131.425" height="41.376" rx="10"></rect><ellipse class="color" opacity=".5" cx="101.112" cy="145.301" rx="14.886" ry="14.895"></ellipse><ellipse class="color" opacity=".5" cx="172.234" cy="145.301" rx="14.886" ry="14.895"></ellipse><ellipse fill="#000" opacity=".6" cx="101.112" cy="145.301" rx="14.886" ry="14.895"></ellipse><ellipse fill="#000" opacity=".6" cx="172.234" cy="145.301" rx="14.886" ry="14.895"></ellipse></g></svg>
						</i>
						<span class="header-bot-name">DriftBot</span>
					</div>
					
					<div class="header-tools-icon">
						<i>
							<svg xmlns="http://www.w3.org/2000/svg" width="21" height="5" viewBox="0 0 21 5"><g fill="currentColor" fill-rule="evenodd"><circle cx="18.5" cy="2.5" r="2.5"></circle><circle cx="10.5" cy="2.5" r="2.5"></circle><circle cx="2.5" cy="2.5" r="2.5"></circle></g></svg>
						</i>

						<i class="header-close-icon">
							<svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg"><path d="M9.502 8.5l7.29 7.29c.277.278.277.727 0 1.003-.137.138-.32.207-.5.207s-.362-.07-.5-.207L8.5 9.503l-7.29 7.29c-.14.138-.32.207-.5.207-.183 0-.364-.07-.502-.207-.277-.276-.277-.725 0-1.002l7.29-7.29-7.29-7.29C-.07.932-.07.483.208.206c.277-.276.725-.276 1 0L8.5 7.497l7.29-7.29c.277-.276.725-.276 1.002 0 .277.277.277.726 0 1.002L9.502 8.5z" fill-rule="evenodd" fill="currentColor"></path></svg>
						</i>
					</div>
				</div>

				<div class="chat-content-message-container" id="chat_s">
					<div class="message-bot">
						<i>
							<svg viewBox="0 0 277 276" xmlns="http://www.w3.org/2000/svg"><g transform="translate(.22 .462)" fill="none" fill-rule="evenodd"><rect class="color" x="1.78" y="1.538" width="273" height="272.443" rx="10"></rect><path d="M185.99 275.256h80.127a9.988 9.988 0 0 0 9.991-9.991V10.246c0-5.517-4.473-9.99-9.99-9.99H10.536a9.988 9.988 0 0 0-9.991 9.99v255.019c0 5.517 4.473 9.99 9.99 9.99H86.46V260.75c4.152-20.961 21.273-37.27 42.671-40.255v-10.092H57.319c-4.68 0-8.453-3.773-8.453-8.427v-97.758c0-4.647 3.78-8.428 8.445-8.428h64.862V82.035h13.745V58.33c-5.339-1.888-9.164-6.983-9.164-12.971 0-7.596 6.154-13.754 13.746-13.754 7.59 0 13.745 6.158 13.745 13.754 0 5.988-3.825 11.083-9.164 12.97v23.706h13.745V95.79h60.264c4.669 0 8.462 3.773 8.462 8.428v97.758c0 4.647-3.785 8.427-8.454 8.427H144.18v10.223c21.024 3.31 37.756 19.512 41.81 40.24v14.39z" fill="#FFF" opacity=".85"></path><rect fill="#FFF" x="72.994" y="123.785" width="131.425" height="41.376" rx="10"></rect><ellipse class="color" opacity=".5" cx="101.112" cy="145.301" rx="14.886" ry="14.895"></ellipse><ellipse class="color" opacity=".5" cx="172.234" cy="145.301" rx="14.886" ry="14.895"></ellipse><ellipse fill="#000" opacity=".6" cx="101.112" cy="145.301" rx="14.886" ry="14.895"></ellipse><ellipse fill="#000" opacity=".6" cx="172.234" cy="145.301" rx="14.886" ry="14.895"></ellipse></g></svg>
						</i>
						<div class="message-content">
							DriftBot<br><br>
							Hey there! You're back 👋 What's up?  </div>
					</div>

					<div class="message-me">
						<div class="message-content">hi</div>
					</div>

					<div class="message-bot">
						<i>
							<svg viewBox="0 0 277 276" xmlns="http://www.w3.org/2000/svg"><g transform="translate(.22 .462)" fill="none" fill-rule="evenodd"><rect class="color" x="1.78" y="1.538" width="273" height="272.443" rx="10"></rect><path d="M185.99 275.256h80.127a9.988 9.988 0 0 0 9.991-9.991V10.246c0-5.517-4.473-9.99-9.99-9.99H10.536a9.988 9.988 0 0 0-9.991 9.99v255.019c0 5.517 4.473 9.99 9.99 9.99H86.46V260.75c4.152-20.961 21.273-37.27 42.671-40.255v-10.092H57.319c-4.68 0-8.453-3.773-8.453-8.427v-97.758c0-4.647 3.78-8.428 8.445-8.428h64.862V82.035h13.745V58.33c-5.339-1.888-9.164-6.983-9.164-12.971 0-7.596 6.154-13.754 13.746-13.754 7.59 0 13.745 6.158 13.745 13.754 0 5.988-3.825 11.083-9.164 12.97v23.706h13.745V95.79h60.264c4.669 0 8.462 3.773 8.462 8.428v97.758c0 4.647-3.785 8.427-8.454 8.427H144.18v10.223c21.024 3.31 37.756 19.512 41.81 40.24v14.39z" fill="#FFF" opacity=".85"></path><rect fill="#FFF" x="72.994" y="123.785" width="131.425" height="41.376" rx="10"></rect><ellipse class="color" opacity=".5" cx="101.112" cy="145.301" rx="14.886" ry="14.895"></ellipse><ellipse class="color" opacity=".5" cx="172.234" cy="145.301" rx="14.886" ry="14.895"></ellipse><ellipse fill="#000" opacity=".6" cx="101.112" cy="145.301" rx="14.886" ry="14.895"></ellipse><ellipse fill="#000" opacity=".6" cx="172.234" cy="145.301" rx="14.886" ry="14.895"></ellipse></g></svg>
						</i>
						
							<div class="spinner">
							  <div class="bounce1"></div>
							  <div class="bounce2"></div>
							  <div class="bounce3"></div>
							</div>
						
					</div>

				</div>

				<div class="chat-input-message-container">
					<div class="enter-to-send">
						<div class="label-reply-to">Reply to DriftBot</div>
						<textarea class="textarea-message" tabindex="1000" ></textarea>
					</div>

					<div class="send-message-buttons">
						<div class="additionl-buttons">
							<i class="send-attache-btn">
								<svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.455 16.5c-.19 0-.378-.076-.522-.226-.29-.303-.29-.792 0-1.093l7.66-8.013c.57-.597.885-1.392.885-2.236 0-.844-.315-1.638-.886-2.235-1.18-1.233-3.097-1.232-4.275 0L2.433 11.99c-.5.525-.742 1.03-.715 1.502.026.46.303.815.467.985.275.29.573.41.908.364.42-.054.903-.356 1.398-.874l6.973-7.295c.288-.3.755-.3 1.043 0 .29.303.29.793 0 1.093l-6.97 7.296c-.74.773-1.5 1.215-2.26 1.314-.797.104-1.535-.175-2.135-.804-.537-.562-.856-1.267-.896-1.985-.054-.933.332-1.836 1.144-2.686l8.885-9.297c1.754-1.836 4.61-1.836 6.363 0 .85.888 1.318 2.07 1.318 3.328s-.468 2.44-1.318 3.33l-7.66 8.014c-.143.15-.332.226-.52.226z" fill-rule="evenodd"></path></svg>
							</i>
							<i >
								<svg preserveAspectRatio="xMidYMid" viewBox="0 0 24 24" style="width: 18px; height: 18px;"><path fill="currentColor" d="M12 24C5.38 24 0 18.62 0 12S5.38 0 12 0s12 5.38 12 12-5.38 12-12 12zm0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-2.9 0-5.56-1.75-6.9-4.57-.24-.5-.03-1.1.47-1.33.5-.24 1.1-.03 1.33.47C7.9 16.67 9.86 18 12 18c2.15 0 4.1-1.3 5.1-3.43.23-.5.83-.7 1.33-.47.5.23.7.83.47 1.33C17.58 18.25 14.93 20 12 20zm4-8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
							</i>

							<input type="file" class="file-send-input" id="file-send-input">
						</div>

						<div class="power-send-buttons">
							<div class="power-buttons">
								<span>Chat</span>
								<i>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.15 12.64"><g data-name="Layer 2"><g data-name="Layer 1"><path fill="#fcf4a0" d="M6.58.75L.75 7.06h3.54l-1.95 4.83L8.4 5.24H4.57L6.58.75z"></path><path d="M6.58.75l-2 4.49H8.4l-6.06 6.65 2-4.83H.75L6.58.75m0-.75a.67.67 0 0 0-.37.11.65.65 0 0 0-.21.13L.2 6.55a.75.75 0 0 0 .55 1.26h2.43l-1.54 3.8a.76.76 0 0 0 .3.92.8.8 0 0 0 .4.11.74.74 0 0 0 .55-.24L9 5.75a.75.75 0 0 0-.6-1.26H5.73L7.24 1.1a.68.68 0 0 0 .09-.35.75.75 0 0 0-.74-.75zm0 1.5z" fill="#f4a51f"></path></g></g></svg>
								</i>

								<span>by </span> <span class="draft-link">Draft</span>
							</div>

							<div class="send-button">
								<i>
									<svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.975.38c.014.043.02.087.024.132v.06c-.004.048-.014.095-.03.14-.006.017-.007.032-.014.046L7.252 12.692c-.09.19-.28.308-.49.308-.216-.002-.406-.127-.493-.32l-.537-3.41C5.56 8.18 4.55 7.1 3.478 6.86l-3.2-.72c-.18-.1-.287-.293-.277-.5.012-.206.138-.39.328-.47L12.248.04 12.3.026c.05-.015.098-.025.148-.026.02 0 .038 0 .058.003.046.004.09.013.132.028l.055.02c.056.027.11.06.154.107.053.053.085.11.11.168.008.018.013.036.018.055z" fill-rule="evenodd"></path></svg>
								</i>

								<span>Send Message</span>
							</div>
						</div>
					</div>
				</div>


			</div>
			<div class="close-container">
				<svg width="25" height="23" viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg"><path d="M24.516 9.953C24.516 4.453 19.04 0 12.258 0 5.476 0 0 4.452 0 9.953c0 3.318 1.986 6.24 5.05 8.053-.34 2.552-1.815 4.055-1.844 4.084-.14.14-.17.368-.113.567a.524.524 0 0 0 .482.312c2.95 0 5.335-1.93 6.612-3.206.652.086 1.362.142 2.07.142 6.783 0 12.26-4.452 12.26-9.953z" fill="#FFF" fill-rule="evenodd"></path></svg>
			</div>
		</div>`;
		jQuery('#example-widget-container').html(modelHtml001);
		jQuery.getScript("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", function() {
			jQuery(document).ready(function($) {
				console.log("bootstrap js is loaded...!");
				// $('#myModal').modal('show');

				$(".textarea-message").focus(function() {
					$(".label-reply-to").css("position", "relative");
					$(".label-reply-to").css("font-size", "15px");
					$(".enter-to-send").css("border-top", "solid 1px #0a5bff");
				});

				$(".textarea-message").blur(function() {
					if($(this).val() == "") {
						$(".label-reply-to").css("position", "absolute");
						$(".label-reply-to").css("font-size", "20px");	
						$(".enter-to-send").css("border-top", "none");
					}
					
				});

				$( ".textarea-message" ).keyup(function(e) {
					if($(this).val() != "") {
						$(".power-buttons").css("display", "none");
						$(".send-button").css("display", "flex");
					} else {
						$(".power-buttons").css("display", "flex");
						$(".send-button").css("display", "none");
					}

					var code = (e.keyCode ? e.keyCode : e.which);
			        //alert(code);
			        if (code == 13) {
			            addMessage($(this).val());
			            $(this).val("");
			        }
				});

				$(".send-attache-btn").click(function(){
					 document.getElementById('file-send-input').click();
				});

				$(".header-close-icon").click(function(){
					isOpen = false;
					toggleDlg();
				});

				$(".close-container").click(function(){
					isOpen = true;
					toggleDlg();
				});

				function toggleDlg() {
					if(isOpen) {
						$(".chat-content").show();	
						$(".close-container").hide();
					} else {
						$(".chat-content").hide();
						$(".close-container").show();
					}
				}

				function addMessage(msg) {
					var message = `
						<div class="message-me">
							<div class="message-content">` + msg + `</div>
						</div>
					`;
					$(".chat-content-message-container").append(message);

					document.getElementById("chat_s").scrollTop = document.getElementById("chat_s").scrollHeight;
				}

				toggleDlg();
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
