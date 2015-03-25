(function(){
	'use strict';
	
	var grovepi = require('node-grovepi');
	
	grovepi.init({
		onInit: function callBack(){
			grovepi.version(function(response){
				console.log('Version'.concat(response));
			});
		},
		onError: function(error){
			console.log(error);
		}
	});
})()