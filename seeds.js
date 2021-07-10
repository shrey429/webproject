var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment=require("./models/comment");

var data=[
	{
		name:"Cloud's Rest",
		image:"https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929__340.jpg",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		name:"Desert Mesa",
		image:"https://cdn.pixabay.com/photo/2015/11/07/11/26/campfire-1031141__340.jpg",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		name:"Canyon Floor",
		image:"https://cdn.pixabay.com/photo/2016/11/29/09/09/abstract-1868624__340.jpg",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
]
function seedDB(){
	Campground.remove({},function(err){
		if(err){
			console.log(err);
		}
			console.log("removed campgrounds");
			data.forEach(function(seed){
				Campground.create(seed,function(err,campground){
					if(err){
						console.log(err)
					}
					else{
						console.log("added new campground");
						Comment.create(
						{
							text:"this place is great",
							author:"Homer"
						},function(err,comment){
							if(err){
								console.log(err);
							}
							else{
								campground.comments.push(comment);
								campground.save();
								console.log("created new comment");
							}
						});
					}
				});
			});
	});
}

module.exports=seedDB;
