$(document).ready(function() {
    
    var mainController = new MainController();

    mainController.init();
});


var MainController = function() {
    var self = this;
    
    self.appEventBus = _.extend({}, Backbone.Events);
    
    self.viewEventBus = _.extend({}, Backbone.Events);
    
    self.init = function() {
	
	self.containerModel = new ContainerModel({ viewState: new LoginView({vent: self.viewEventBus})});
	self.containerView = new ContainerView({ model: self.containerModel });

	self.containerView.render();
    }

    self.viewEventBus.on("login", function(name) {
	// socketio login

	self.appEventBus.trigger("loginDone");
	self.appEventBus.trigger("userJoined", {name: "this"});
    });

    self.viewEventBus.on("chat", function(chat) {
	// socketio chat

	self.appEventBus.trigger("chatReceived", {sender: "this", message: chat });
    });

    self.appEventBus.on("loginDone", function() {
	self.homeModel = new HomeModel();
	self.homeView  = new HomeView({vent: self.viewEventBus, model: self.homeModel });

	self.containerModel.set("viewState", self.homeView);
    });

    self.appEventBus.on("userJoined", function(user) {
	var onlineUsers = self.homeModel.get('onlineUsers');

	onlineUsers.add(new UserModel(user));
    });

    self.appEventBus.on("chatReceived", function(chat) {
	var userChats = self.homeModel.get('userChats');

	userChats.add(new ChatModel(chat));
    });
}


