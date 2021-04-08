new Text("ping", {
		"text": "Ping: ??",
		"font": "Comic Sans MS bold",
		"size": 15,
		"align": "left",
		"text-color": "white",
		"x": 2,
		"y": 15,
		"z-index": 1
	}, function(me){
		this.setText("Ping: "+ LGuiJs.getGui("main").getPing());
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
		"default-text": "Log in",
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
	}
);
Element.getElement("submitInput").addEventListener("click", function(me){
	//console.log(Element.getElement("userInput").getValue());
	//console.log(Element.getElement("passInput").getValue());
	var url = "http://localhost:8080/user/login";
	url += "?login=";
	url += Element.getElement("userInput").getValue();
	url += "&pass=";
	url += sha256(Element.getElement("passInput").getValue());

	LGuiJs.getGui("main").httpRequest("GET", url, function(http){
		if(http.readyState == 4 && http.status == 200){
			console.log(http.responseText);
	  		var response = JSON.parse(http.responseText);
	  		if(response.code == 0){
	  			LGuiJs.getGui("main").setView(View.getView("Home"));
	  		}
	  		else if(response.code == 100){
	  			Element.getElement("messageLogin")._text = "Usuario o contraseña erronea.";
	  		}
		}
	});
	/*
	me.doInGui(function(gui){
		gui.httpRequest("GET", url, function(http){
			if(http.readyState == 4 && http.status == 200){
				console.log(http.responseText);
		  		var response = JSON.parse(http.responseText);
		  		if(response.code == 0){

		  		}
		  		else if(response.code == 100){
		  			Element.getElement("messageLogin")._text = "Usuario o contraseña erronea.";
		  		}
			}
		});
	});
	*/
});

new Input("SigninButton", {
	"default-text": "Sign in",
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
});
Element.getElement("SigninButton").addEventListener("click", function(me){
	LGuiJs.getGui("main").setView(View.getView("Signin"));
});

new Text("messageLogin", {
	"text": "",
	"font": "Comic Sans MS bold",
	"size": 15,
	"align": "left",
	"text-color": "white",
	"x": (window.innerWidth/2)-(250/2),
	"y": 265,
	"z-index": 1
});
new Background("background", { 
		"image_src": "../images/Background/BlueNebula/BlueNebula2.v1.png",
		"z-index": 0
	}
);

Element.getElement("background").addEventListener("click", function(me){
});


new View("Login", function(view){
	view.addElement(Element.getElement("userInput"), 5);
	view.addElement(Element.getElement("passInput"), 5);
	view.addElement(Element.getElement("submitInput"), 5);
	view.addElement(Element.getElement("SigninButton"), 5);
	view.addElement(Element.getElement("background"), 0);
	view.addElement(Element.getElement("ping"), 1);
	view.addElement(Element.getElement("messageLogin"), 2);
	
});




new Input("userSignin", {
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
new Input("emailSignin", {
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

new Input("passSignin", {
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

new Input("pass2Signin", {
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

new Input("codeSignin", {
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

new Input("submitSignin", {
	"default-text": "Sign in",
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
});
new Button("backButton", {
	"image_src": "../images/icons/icons-blue.png",
	"x": 20,
	"y": 20,
	"sx": 1+((1+135+384)*2), //Border:1, distance: 135, size: 384
	"sy": 1+((1+135+384)*1),
	"swidth": 384,
	"sheight": 384,
	"width": 64,
	"height": 64
});
Element.getElement("backButton").addEventListener("click",function(me){
		LGuiJs.getGui("main").setView(View.getView("Login"));
});
new View("Signin", function(view){

	view.addElement(Element.getElement("background"), 0);
	view.addElement(Element.getElement("ping"), 1);
	view.addElement(Element.getElement("userSignin"), 5);
	view.addElement(Element.getElement("emailSignin"), 5);
	view.addElement(Element.getElement("passSignin"), 5);
	view.addElement(Element.getElement("pass2Signin"), 5);
	view.addElement(Element.getElement("codeSignin"), 5);
	view.addElement(Element.getElement("submitSignin"), 5);
	view.addElement(Element.getElement("backButton"), 2);
});

new Text("welcomeHome", {
	"text": "Bienvenido piponsio",
	"font": "Comic Sans MS bold",
	"size": 30,
	"align": "center",
	"text-color": "white",
	"x": (window.innerWidth/2)-(250/2),
	"y": 250
});

new View("Home", function(view){
	view.addElement(Element.getElement("background"), 0);
	view.addElement(Element.getElement("ping"), 1);
	view.addElement(Element.getElement("welcomeHome"), 1);
	view.addElement(Element.getElement("backButton"), 2);
	//view.addElement(Element.getElement("userSignin"), 5);
	//view.addElement(Element.getElement("emailSignin"), 5);
	//view.addElement(Element.getElement("passSignin"), 5);
	//view.addElement(Element.getElement("pass2Signin"), 5);
	//view.addElement(Element.getElement("codeSignin"), 5);
	//view.addElement(Element.getElement("submitSignin"), 5);
});

new LGuiJs("main", View.getView("Login"));
