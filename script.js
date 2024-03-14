let statusElement = document.getElementById('status');
let enterButton = document.getElementById('enterBtn');
let status = "Enter the Metaverse";
statusElement.innerHTML = status;
enterButton.addEventListener("click",()=>{
	status = "Entered Metaverse";
	statusElement.innerHTML = status;
});