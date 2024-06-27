const videoEle = document.getElementById("video");
const buttonStart = document.getElementById("button-start");
const buttonShare = document.getElementById("button-share");

// Prompt to slect media stream, pass to video element and then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEle.srcObject = mediaStream;
    videoEle.onloadedmetadata = () => {
      videoEle.play();
    };
    return true;
  } catch (err) {
    console.log(err);
  }
}

buttonStart.addEventListener("click", async () => {
  try {
    buttonStart.disabled = true;
    await videoEle.requestPictureInPicture();
  } catch {
    alert("Please First share the screen!!");
    buttonStart.disabled = false;
  }
});

buttonShare.addEventListener("click", selectMediaStream);
