(function(){
	'use strict';
	
	var grovepi = require('node-grovepi');
	
	grovepi.init({
		onInit: function callback(){
			grovepi.run([version(callback), light(callback)]);
		},
		onError: function(error){
			console.log(error);
		}
	});
	
	function version(callback){
		grovepi.version(function onVersion(response){
			console.log('Version'.concat(response));
			callback();
		})
	};
	
	function light(callback){
		var digitalPort = 4;
		grovepi.light(digitalPort, function onLight(response){
			console.log('Light'.concat(response));
			callback();
		});
	};
})()