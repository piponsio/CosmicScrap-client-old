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

new Background("background", { 
		"image_src": "../images/Background/BlueNebula/BlueNebula2.v1.png",
		"z-index": 0
	}
);

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