ping = 666;
new Text("ping", {
		"text": "Ping: "+ping,
		"font": "Comic Sans MS bold",
		"size": 15,
		"align": "left",
		"text-color": "white",
		"x": 2,
		"y": 15,
		"z-index": 1
	}, function(){
		ping++;
		this.setText("Ping: "+ ping);
	}
);

new Input("userInput", {
		"default-text": "Username",
		"font": "Comic Sans MS",
		"size": 15,
		"text-align": "center",
		"text-color": "black",
		"border-color": "black",
		"border-size": 3,
		"background-color": "white",
		"x": (window.innerWidth/2)-(250/2),
		"y": 100,
		"z-index": 4,
		"width": 250,
		"height": 40,
		"margin": 5,
		"radius": 10,
		"type": "text"
	}
);

new Input("passInput", {
		"default-text": "Password",
		"font": "Comic Sans MS",
		"size": 15,
		"text-align": "center",
		"text-color": "black",
		"border-color": "black",
		"border-size": 3,
		"background-color": "white",
		"x": (window.innerWidth/2)-(250/2),
		"y": 150,
		"z-index": 4,
		"width": 250,
		"height": 40,
		"margin": 5,
		"radius": 10,
		"type": "password"
	}
);
new Input("submitInput", {
		"default-text": "LogIn",
		"font": "Comic Sans MS",
		"size": 15,
		"text-align": "center",
		"text-color": "black",
		"border-color": "black",
		"border-size": 3,
		"background-color": "white",
		"x": (window.innerWidth/2)+25,
		"y": 200,
		"z-index": 4,
		"width": 100,
		"height": 40,
		"margin": 5,
		"radius": 10,
		"type": "button"
	}, function(me){
		if(me._isClicked){

		}
	}
);

new Input("signInButton", {
		"default-text": "SignIn",
		"font": "Comic Sans MS",
		"size": 15,
		"text-align": "center",
		"text-color": "black",
		"border-color": "black",
		"border-size": 3,
		"background-color": "white",
		"x": (window.innerWidth/2)-(250/2),
		"y": 200,
		"z-index": 4,
		"width": 100,
		"height": 40,
		"margin": 5,
		"radius": 10,
		"type": "button"
	}, function(me){
		if(me._isClicked){
			LGuiJs.getGui("main").setView(View.getView("singIn"));
		}
	}
);

new Background("background", { 
		"image_src": "../images/Background/BlueNebula/BlueNebula2.v1.png",
		"z-index": 0
	}
);



new View("Home", function(view){
	view.addElement(Element.getElement("userInput"), 5);
	view.addElement(Element.getElement("passInput"), 5);
	view.addElement(Element.getElement("submitInput"), 5);
	view.addElement(Element.getElement("signInButton"), 5);
	view.addElement(Element.getElement("background"), 0);
	view.addElement(Element.getElement("ping"), 1);
	
});




new Input("userSignIn", {
		"default-text": "Username",
		"font": "Comic Sans MS",
		"size": 15,
		"text-align": "center",
		"text-color": "black",
		"border-color": "black",
		"border-size": 3,
		"background-color": "white",
		"x": (window.innerWidth/2)-(250/2),
		"y": 100,
		"z-index": 4,
		"width": 250,
		"height": 40,
		"margin": 5,
		"radius": 10,
		"type": "text"
	}
);
new Input("emailSignIn", {
		"default-text": "Email",
		"font": "Comic Sans MS",
		"size": 15,
		"text-align": "center",
		"text-color": "black",
		"border-color": "black",
		"border-size": 3,
		"background-color": "white",
		"x": (window.innerWidth/2)-(250/2),
		"y": 150,
		"z-index": 4,
		"width": 250,
		"height": 40,
		"margin": 5,
		"radius": 10,
		"type": "text"
	}
);

new Input("passSignIn", {
		"default-text": "Password",
		"font": "Comic Sans MS",
		"size": 15,
		"text-align": "center",
		"text-color": "black",
		"border-color": "black",
		"border-size": 3,
		"background-color": "white",
		"x": (window.innerWidth/2)-(250/2),
		"y": 200,
		"z-index": 4,
		"width": 250,
		"height": 40,
		"margin": 5,
		"radius": 10,
		"type": "password"
	}
);

new Input("pass2SignIn", {
		"default-text": "Password Confirm",
		"font": "Comic Sans MS",
		"size": 15,
		"text-align": "center",
		"text-color": "black",
		"border-color": "black",
		"border-size": 3,
		"background-color": "white",
		"x": (window.innerWidth/2)-(250/2),
		"y": 250,
		"z-index": 4,
		"width": 250,
		"height": 40,
		"margin": 5,
		"radius": 10,
		"type": "password"
	}
);

new Input("codeSignIn", {
		"default-text": "Code",
		"font": "Comic Sans MS",
		"size": 15,
		"text-align": "center",
		"text-color": "black",
		"border-color": "black",
		"border-size": 3,
		"background-color": "white",
		"x": (window.innerWidth/2)-(250/2),
		"y": 300,
		"z-index": 4,
		"width": 250,
		"height": 40,
		"margin": 5,
		"radius": 10,
		"type": "text"
	}
);

new Input("submitSignIn", {
		"default-text": "SignIn",
		"font": "Comic Sans MS",
		"size": 15,
		"text-align": "center",
		"text-color": "black",
		"border-color": "black",
		"border-size": 3,
		"background-color": "white",
		"x": (window.innerWidth/2)+(50/2),
		"y": 350,
		"z-index": 4,
		"width": 100,
		"height": 40,
		"margin": 5,
		"radius": 10,
		"type": "button"
	}, function(me){
		if(me._isClicked){
			LGuiJs.getGui("main").setView(View.getView("singIn"));
		}
	}
);
new View("singIn", function(view){

	view.addElement(Element.getElement("background"), 0);
	view.addElement(Element.getElement("ping"), 1);
	view.addElement(Element.getElement("userSignIn"), 5);
	view.addElement(Element.getElement("emailSignIn"), 5);
	view.addElement(Element.getElement("passSignIn"), 5);
	view.addElement(Element.getElement("pass2SignIn"), 5);
	view.addElement(Element.getElement("codeSignIn"), 5);
	view.addElement(Element.getElement("submitSignIn"), 5);
});

new LGuiJs("main", View.getView("Home"));
