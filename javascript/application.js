

// EVENT LISTENERS

$(".name").click(function(){
	window.location = "../templates/home.html"
});

$("#facebook").click(function() {
		url = "https://www.facebook.com/cindy.zeng.9";
		window.open(url,"_blank");
	});

$("#linkedin").click(function() {
		url = "http://www.linkedin.com/profile/view?id=229921382";
		window.open(url,"_blank");
	});

$("#twitter").click(function() {
		url = "https://twitter.com/czengg";
		window.open(url,"_blank");
	});

$("#email").click(function() {
	window.location.href = "mailto:czeng@andrew.cmu.edu";
});

$(".projects").mousewheel(function(event,delta){

    var div = $(this);

    var top = parseInt(div.css("top"));
    var height = $(document).height();
    var divHeight = parseInt(div.css("height"));
    var width = $(document).width();

    var prop;
    if(width > 600) {
    	prop = .2;
    }
    else {
    	prop = .45;
    }

    if (delta > 0) {
    	if(top < (prop*height)) {
        	div.css("top", parseInt(div.css("top"))+10);
    	}
    } else {
    	if((top+divHeight) > height) {

        	div.css("top", parseInt(div.css("top"))-10);
    	}
    }

    if (parseInt(div.css("top")) < 0) {
        $(".go-top").fadeIn(200);
    } else {
        $(".go-top").fadeOut(200);
    }
}); 

$(".go-top").click(function(event) {
    event.preventDefault();

    var height = $(document).height();
    var width = $(document).width();
    
    var prop;
    if(width > 600) {
        prop = .2;
    }
    else {
        prop = .45;
    }

    $(".projects").animate({top: prop*height}, 300);
});
