$(function(){
	
	 //Дата с которой начинаем отсчёт времени
	var	ts = (new Date(2013, 9, 24)).getTime();//(год, месяц, день)
	//Время на которое заводится таймер часах
	var timenew=48;
	
	
	//////////////////////////////////////////////////
	var note = $('#note');
	var addtime=0;
	while((new Date()).getTime()>(ts+timenew*addtime*60*60*1000)){
	addtime++;
	}
	ts=ts+timenew*addtime*60*60*1000;
	var newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown2').countdown2({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			
				message += "Осталось вренени до события!";
			
			note.html(message);
		}
	});
	
});
