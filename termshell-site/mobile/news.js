const backBtn = document.getElementById("back");

backBtn.onclick = () => {
	if (document.referrer) {
		window.history.back();
	} else {
		window.location.href = "/";
	}
}
