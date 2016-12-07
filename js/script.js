$(document).ready(function(){
var storeClick = $.ajax({
	url:"http://freegeoip.net/json/",
	type:"GET",
	success:function(data){
		console.log(data);
	}
})
// try to use both to extract data and display them 

// create an algorith to store user location and then pass it to the api when click is submited
  $.ajax({
	url:'http://api.openweathermap.org/data/2.5/weather?q={miami}&appid=dee682908500fe0e34abbb0ffba910ec',
	type: "GET",
  dataType: 'jsonP',
	crossDomain:true,
	success:function(passData){
      console.log(passData);
			$('#apidata').on('click',function(){
         $('#apiresult').html(passData.main.humidity);
			});

		},
		cache:false,
	});


})
