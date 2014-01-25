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
    },


    addUser: function(username) {
	this.get('onlineUsers').add(new UserModel({ name: username }));
    },

    removeUser: function(username) {
	var onlineUsers = this.get('onlineUsers');

        var u = onlineUsers.find(function(item) { return item.get('name') == username });

        if (u) {
            onlineUsers.remove(u);
        }
    },

    addChat: function(chat) {
	this.get('userChats').add(new ChatModel({ sender: chat.sender, message: chat.message }));
    },
});


var LoginModel = Backbone.Model.extend({
    defaults: {
	error: ""
    }
});
