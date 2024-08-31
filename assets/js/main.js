
			$("#botaopoesia").on('click', function(){
				$(".abrirpoesia").show();
				/* Acrescentei estes 3 abaixo */
				$("#curtos").show();
				$("#longos").show();
				$("#poemas1").show();
				/* */
				$("#botaocontactar").hide();
				$("#botaosobre").hide();
				$("#botaopoesia").hide();
				$("#botaoplantas").hide();
			  });
			  
			  $(document).click(function (e) {
				if (!$(e.target).hasClass("botaopoesia") && !$(e.target).hasClass("abrirpoesia") && !$(e.target).hasClass("lipoemas") && !$(e.target).hasClass("lipoemascurtos") && !$(e.target).hasClass("lipoemaslongos") && $(e.target).closest(".abrirpoesia").length === 0) {
			   
				//if (!$(e.target).data("id") =="toggle-dropdown" && $(e.target).parents(".toggle-dropdown-content").length === 0) {
					  $(".abrirpoesia").hide();
					  $("#botaocontactar").show();
					$("#botaoplantas").show();
					$("#botaosobre").show();
					$("#botaopoesia").show();
					var x = document.getElementById("ul2");
					var y = document.getElementById("ul3");
					var w = document.getElementById("ul4");
					x.style.display = "none";
					y.style.display = "none";
					w.style.display = "none";
					document.getElementById("curtos").hide();
				  }
			  });

	


function myFunction() {
	var x = document.getElementById("ul2");
	if (x.style.display === "none") {
	  x.style.display = "flex"; 
	  $("#curtos").hide();
	  $("#longos").hide();
	  $("#botaocontactar").hide();
	  $("#botaosobre").hide();
	  $("#botaopoesia").hide();
	  $("#botaoplantas").hide();
	

		
		}
	 
	else {
		$(".abrirpoesia").hide();
		$(".hidden").show();
		$("#curtos").show();
		$(".hidden").show();
		$("#longos").show();
	  x.style.display = "none";
	}
	
  }



  /* FUNÇAO DOS CURTOS ABAIXO */

  function myCurtos() {
	
	var x = document.getElementById("ul3");
	var y = document.getElementById("curtos");
	if (x.style.display === "none") {
	  x.style.display = "flex"; 
	  $("#poemas1").hide();
	  $("#longos").hide();

			}
		
		else {
				x.style.display = "none";
				$(".abrirpoesia").hide();
					$(".hidden").show();
					$("#poemas1").show();
					$("#longos").show();
			};

	

			} 
		

		
	
			function myLongos() {
	
				var x = document.getElementById("ul4");
				if (x.style.display === "none") {
				  x.style.display = "flex"; 
				  $("#poemas1").hide();
				  $("#curtos").hide();
				  $(".hidden").hide();
		
				}
				
			
		
				else {
					$(".abrirpoesia").hide();
					$(".hidden").show();
					$("#botaocontactar").show();
					$("#botaosobre").show();
				  x.style.display = "none"; 
			
						} 
						
			
						} 
					

	

						(function($) {
							var $window = $(window),
								$body = $('body'),
								$wrapper = $('#wrapper'),
								$header = $('#header'),
								$footer = $('#footer'),
								$main = $('#main'),
								$main_articles = $main.children('article');
						
							// Breakpoints.
							breakpoints({
								xlarge:   [ '1281px',  '1680px' ],
								large:    [ '981px',   '1280px' ],
								medium:   [ '737px',   '980px'  ],
								small:    [ '481px',   '736px'  ],
								xsmall:   [ '361px',   '480px'  ],
								xxsmall:  [ null,      '360px'  ]
							});
						
							// Play initial animations on page load.
							$window.on('load', function() {
								window.setTimeout(function() {
									$body.removeClass('is-preload');
								}, 100);
							});
						
							// Fix: Flexbox min-height bug on IE.
							if (browser.name == 'ie') {
								var flexboxFixTimeoutId;
						
								$window.on('resize.flexbox-fix', function() {
									clearTimeout(flexboxFixTimeoutId);
									flexboxFixTimeoutId = setTimeout(function() {
										if ($wrapper.prop('scrollHeight') > $window.height())
											$wrapper.css('height', 'auto');
										else
											$wrapper.css('height', '100vh');
									}, 250);
								}).triggerHandler('resize.flexbox-fix');
							}
						
							// Nav.
							var $nav = $header.children('nav'),
								$nav_li = $nav.find('li');
						
							// Add "middle" alignment classes if we're dealing with an even number of items.
							if ($nav_li.length % 2 == 0) {
								$nav.addClass('use-middle');
								$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');
							}
						
							// Main.
							var delay = 325,
								locked = false;
						
							// **New Function to Change Background Image**
							function changeBodyBackgroundIfActive() {
								var $bgElement = $('#bg'); // Select the background element
								// Check if any article has the class 'active'
								console.log("Checking active articles..."); // Debugging line
								if ($main_articles.filter('.active').length > 0) {
									console.log("Active article found. Changing to active image."); // Debugging line
									$bgElement.css('background-image', "url('images/bg.jpg')"); // Replace with actual path
								} else {
									console.log("No active article. Changing to inactive image."); // Debugging line
									$bgElement.css('background-image', "url('images/sementeira-novo-logo.png'')"); // Replace with actual path
								}
							}
						
							// Methods.
							$main._show = function(id, initial) {
								var $article = $main_articles.filter('#' + id);
						
								// No such article? Bail.
								if ($article.length == 0) return;
						
								// Handle lock.
								if (locked || (typeof initial != 'undefined' && initial === true)) {
									// Mark as switching.
									$body.addClass('is-switching');
									// Mark as visible.
									$body.addClass('is-article-visible');
									// Deactivate all articles
									$main_articles.removeClass('active');
									// Hide header, footer.
									$header.hide();
									$footer.hide();
									// Show main, article.
									$main.show();
									$article.show();
									// Activate article.
									$article.addClass('active');
						
									// **Call the Background Change Function Here**
									changeBodyBackgroundIfActive(); // <-- Update background when an article is shown
						
									// Unlock.
									locked = false;
						
									// Unmark as switching.
									setTimeout(function() {
										$body.removeClass('is-switching');
									}, (initial ? 1000 : 0));
						
									return;
								}
						
								// Lock.
								locked = true;
						
								// Article already visible? Just swap articles.
								if ($body.hasClass('is-article-visible')) {
									var $currentArticle = $main_articles.filter('.active');
									$currentArticle.removeClass('active');
						
									setTimeout(function() {
										$currentArticle.hide();
										$article.show();
										setTimeout(function() {
											$article.addClass('active');
											// **Call the Background Change Function Here**
											changeBodyBackgroundIfActive(); // <-- Update background when an article is shown
											$window.scrollTop(0).triggerHandler('resize.flexbox-fix');
						
											// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);
										}, 25);
									}, delay);
								} else {
									// Mark as visible.
									$body.addClass('is-article-visible');
									setTimeout(function() {
										$header.hide();
										$footer.hide();
										$main.show();
										$article.show();
										setTimeout(function() {
											$article.addClass('active');
											// **Call the Background Change Function Here**
											changeBodyBackgroundIfActive(); // <-- Update background when an article is shown
											$window.scrollTop(0).triggerHandler('resize.flexbox-fix');
						
											// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);
										}, 25);
									}, delay);
								}
							};
						
							$main._hide = function(addState) {
								var $article = $main_articles.filter('.active');
								if (!$body.hasClass('is-article-visible')) return;
						
								if (typeof addState != 'undefined' && addState === true)
									history.pushState(null, null, '#');
						
								// Handle lock.
								if (locked) {
									$body.addClass('is-switching');
									$article.removeClass('active');
									$article.hide();
									$main.hide();
									$footer.show();
									$header.show();
									$body.removeClass('is-article-visible');
									locked = false;
									$body.removeClass('is-switching');
									$window.scrollTop(0).triggerHandler('resize.flexbox-fix');
									return;
								}
						
								locked = true;
								$article.removeClass('active');
								setTimeout(function() {
									$article.hide();
									$main.hide();
									$footer.show();
									$header.show();
									setTimeout(function() {
										$body.removeClass('is-article-visible');
										$window.scrollTop(0).triggerHandler('resize.flexbox-fix');
										locked = false;
									}, 25);
								}, delay);
							};
						
							// Articles.
							$main_articles.each(function() {
								var $this = $(this);
								$('<div class="close">Close</div>')
									.appendTo($this)
									.on('click', function() {
										location.hash = '';
									});
						
								$this.on('click', function(event) {
									event.stopPropagation();
								});
							});
						
							// Events.
							$body.on('click', function(event) {
								if ($body.hasClass('is-article-visible'))
									$main._hide(true);
							});
						
							$window.on('keyup', function(event) {
								switch (event.keyCode) {
									case 27:
										if ($body.hasClass('is-article-visible'))
											$main._hide(true);
										break;
									default:
										break;
								}
							});
						
							$window.on('hashchange', function(event) {
								if (location.hash == '' || location.hash == '#') {
									event.preventDefault();
									event.stopPropagation();
									$main._hide();
								} else if ($main_articles.filter(location.hash).length > 0) {
									event.preventDefault();
									event.stopPropagation();
									$main._show(location.hash.substr(1));
								}
							});
						
							// Scroll restoration.
							if ('scrollRestoration' in history)
								history.scrollRestoration = 'manual';
							else {
								var oldScrollPos = 0,
									scrollPos = 0,
									$htmlbody = $('html,body');
						
								$window.on('scroll', function() {
									oldScrollPos = scrollPos;
									scrollPos = $htmlbody.scrollTop();
								}).on('hashchange', function() {
									$window.scrollTop(oldScrollPos);
								});
							}
						
							// Initialize.
							$main.hide();
							$main_articles.hide();
						
							// Initial article.
							if (location.hash != '' && location.hash != '#')
								$window.on('load', function() {
									$main._show(location.hash.substr(1), true);
								});
						
						})(jQuery);