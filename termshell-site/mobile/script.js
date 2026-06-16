const downloadBtn = document.getElementById("download");
const versionBtn = document.getElementById("version");

downloadBtn.onclick = () => {
	Object.assign(document.createElement('a'), { href: 'termshell.zip', download: 'termshell.zip' }).click();
}

versionBtn.onclick = () => {
	window.history.back();
}
