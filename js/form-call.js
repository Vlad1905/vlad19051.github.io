function trim(str) {
	var newstr = str.replace(/^\s*(.+?)\s*$/, "$1");
	if (newstr == " ") {
		return "";
	}
	return newstr;
}
function drop_spaces(str) {
	var newstr = trim(str);
	return newstr.replace(/(\s)+/g, "");
}
function is_email(email) {
	var template = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/;
	email = drop_spaces(email);
	if (template.test(email)) {
		return true;
	}
	return false;
}

$(document).ready(function() {
	$('#show').click(function(e) {
		e.preventDefault();
		$('#modal-form input[type=text]').val('');
		$('.overlay').show();
		$('#modal-form').fadeIn();
	});

	$('.overlay').click(function(e) {
		e.preventDefault();
		$('.overlay').hide();
		$('#modal-form').fadeOut();
		$('#modal-success').fadeOut();
		$('#modal-form1').fadeOut();
		$('#modal-form2').fadeOut();

	});

	$('.close-modal').click(function(e) {
		e.preventDefault();
		$('.overlay').hide();
		$('#modal-form').fadeOut();
		$('#modal-success').fadeOut();
		$('#modal-form1').fadeOut();
		$('#modal-form2').fadeOut();

	});
	//sender
	$('.btn-send').click(function(e) {
		e.preventDefault();
		var utms = $('#f-utm').val();
		var f = $(this).parents('.form-block');
		$('input[type=text]', f).removeClass('ierror');

		var name = $('.fname', f).val();
		var phone = $('.fphone', f).val();

		var error = false;
		if(name == '') {
			$('.fname', f).addClass('ierror');
			error = true;
			$('.overlay').show();
			$('#modal-form1').fadeIn();
		}
		if(phone == '') {
			$('.fphone', f).addClass('ierror');
			error = true;
			$('.overlay').show();
			$('#modal-form1').fadeIn();
		}

		if(error) {
			return false;
		}
			
		var query = 'act=sender';
			query += '&name=' + encodeURIComponent(name);
			query += '&phone=' + encodeURIComponent(phone);
			query += '&utms=' + encodeURIComponent(utms);

		$.ajax({
			type: "POST",
			data: query,
			url: "./sender.php",
			dataType: "json",
			success: function(data) {
				if(data.result == 'ok') {
					//echo
					
					$('#modal-form').hide();
					$('.overlay').show();
					$('#modal-success').fadeIn();
					yaCounter24295690.reachGoal('GetForm');
					location.href = '#form-send';
				} else {
					alert('Ошибка!');
				}
			}
		});


		$('input[type=text]', f).val('');
		return false;
	});
	$('.fphone').maskinp('+7 (999) 999-99-99');
	$('.item.img a, .fancy').fancybox({
		prevEffect: 'none',
		nextEffect: 'none',
		closeBtn: false,
		helpers: {
			title: { type : 'inside' },
			buttons: {}
		}
	});
});