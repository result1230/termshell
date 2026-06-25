const downloadBtn = document.getElementById("download");
const versionBtn = document.getElementById("version");

versionBtn.onclick = () => {
	if (document.referrer) {
		window.history.back();
	} else {
		window.location.href = "/";
	}
}

downloadBtn.onclick = () => {
	Object.assign(document.createElement('a'), { href: 'termshell.zip', download: 'termshell.zip' }).click();
}
