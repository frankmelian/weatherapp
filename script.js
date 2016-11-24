$.ajax({
	url:'http://api.openweathermap.org/data/2.5/weather?id=5e3675ebb65b99f95614504125239edb',
	API_KEY:'5e3675ebb65b99f95614504125239edb',
	type: "GET",
    dataType: 'jsonP',
	crossDomain:true,
	success:function(data){
      console.log(data);
	},
	cache:false,
});