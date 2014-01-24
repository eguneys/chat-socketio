var ContainerModel = Backbone.Model.extend({
});

var UserModel = Backbone.Model.extend({
    
});


var UserCollection = Backbone.Collection.extend({
    model: UserModel
});

var ChatModel = Backbone.Model.extend({
    
});


var ChatCollection = Backbone.Collection.extend({
    model: ChatModel
});



var HomeModel = Backbone.Model.extend({
    defaults: {
	onlineUsers: new UserCollection(),
	userChats: new ChatCollection([
	    new ChatModel({ sender: '', message: 'Chat Server v.1' })
	])
    }
});

