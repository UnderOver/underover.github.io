function StartUp() {
    $('#HomeContent').fadeIn();
    $('#HomeButton').addClass("Active-Button");
}

function ChangeMainContent(div, button) {
    $('.innerContent').hide();
    $('#' + div).fadeIn();
    $('.Content-Button').removeClass("Active-Button");
    $('#' + button).addClass('Active-Button');
};

function ShowNavBox() {
    $('.NavBox').toggleClass('showing');
}

function Fun(){
	txt = 'a';
	while(1){
		txt = txt += 'a';
	}
}