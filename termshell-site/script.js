const downloadBtn = document.getElementById("download");

downloadBtn.onclick = () => {
	Object.assign(document.createElement('a'), { href: 'termshell.zip', download: 'termshell.zip' }).click();
}
