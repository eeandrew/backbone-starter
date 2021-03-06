define(['jquery','backbone','text!templates/friend_item.tpl'],function($,Backbone,FriendItemTPL){
	var Friend = Backbone.Model.extend({
		name:null
	});

	var Friends = Backbone.Collection.extend({
		initialize : function(models,options) {
			this.bind('add',options.view.addOneFriend)
		}
	});

	var AppView = Backbone.View.extend({
		el: $('#backbone'),
		initialize: function(){
			this.friends = new Friends(null,{view:this})
		},
		events : {
			'click #add-friend-btn':'onAddFriendBtnClick'
		},
		addOneFriend: function(model){
			$('#world-list').append(FriendItemTPL);
		},
		onAddFriendBtnClick : function() {
			var name = $('#name-input').val() || 'No Name';
			var friend = new Friend({name:name});
			this.friends.add(friend);
		},
	});

	return AppView;
});
