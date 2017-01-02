var celcius = function(kelvinUnit){
	return kelvinUnit - 273.15;
}


var farenheith = function(kelvinUnit){
	return kelvinUnit - 459.67
}


$.ajax({
	url:'http://ip-api.com/json',
	type:"GET",
	dataType:"json",
	crossDomain:'true',
	success:function(data){
    $.ajax({
    url:'http://api.openweathermap.org/data/2.5/weather?q='+data.zip+'&appid=dee682908500fe0e34abbb0ffba910ec',
    type: "GET",
    dataType: 'jsonP',
    crossDomain:true,
    success:function(data){
    console.log(data);
    $('#cityLocation').html(data.name);
    $('#humidity').html(data.main.humidity);
    $('#temp').html(data.main.temp);
    $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+ encodeURIComponent('"' + "weatherApp" + '"'));
  },
  cache:false,
});    
     

	},
});


