$(function(){function e(e){console.log(e.token_id),$("#token_result").html(e.token_id),console.log(e),e.redirect_url?(console.log("3D SECURE"),o(e.redirect_url)):"200"==e.status_code?(console.log("NOT 3-D SECURE"),t(),$("#token_id").val(e.token_id)):(console.log(e.status_code),alert(e.status_message))}function o(e){$.fancybox.open({href:e,type:"iframe",autoSize:!1,width:700,height:500,closeBtn:!1,modal:!0})}function t(){$.fancybox.close()}Veritrans.url="https://api.sandbox.veritrans.co.id/v2/token",Veritrans.client_key="572d0483-1f8f-4b91-81fb-e215b856a087";var n=function(){return{card_number:$(".card-number").val(),card_exp_month:$(".card-expiry-month").val(),card_exp_year:$(".card-expiry-year").val(),card_cvv:$(".card-cvv").val(),secure:!1,gross_amount:2e5}};$(".submit-button").click(function(o){return console.log("SUBMIT"),o.preventDefault(),Veritrans.token(n,e),!1})});