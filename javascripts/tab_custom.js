$(document).ready(function(){var e=function(e){var n=e||location.hash,t=n.split("?"),o=$("[href="+t[0]+"]"),a=$(t[0]);o&&o.tab("show"),t[0].length>0&&(console.log(t),$("html, body").animate({scrollTop:$(a).offset().top},0))};e(),$("body").scrollspy({target:".documentation-sidebar"}),$(document).on("click",'[data-toggle="tab-code"]',function(e){e.preventDefault();var n=$(this).data("lang");$('[data-lang="'+n+'"]').tab("show")})});