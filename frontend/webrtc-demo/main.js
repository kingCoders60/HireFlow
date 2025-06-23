let localStream;
let remoteStream;
let peerConnection;

const config = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};

async function start() {
  localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  document.getElementById("localVideo").srcObject = localStream;

  peerConnection = new RTCPeerConnection(config);
  localStream
    .getTracks()
    .forEach((track) => peerConnection.addTrack(track, localStream));

  peerConnection.ontrack = (event) => {
    document.getElementById("remoteVideo").srcObject = event.streams[0];
  };

  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  // Simulate fake peer (same browser tab)
  const fakePeer = new RTCPeerConnection(config);

  fakePeer.ontrack = (event) => {
    document.getElementById("remoteVideo").srcObject = event.streams[0];
  };

  fakePeer.onicecandidate = (e) => {
    if (e.candidate) peerConnection.addIceCandidate(e.candidate);
  };

  peerConnection.onicecandidate = (e) => {
    if (e.candidate) fakePeer.addIceCandidate(e.candidate);
  };

  fakePeer.onnegotiationneeded = async () => {
    await fakePeer.setRemoteDescription(peerConnection.localDescription);
    const answer = await fakePeer.createAnswer();
    await fakePeer.setLocalDescription(answer);
    await peerConnection.setRemoteDescription(fakePeer.localDescription);
  };

  localStream
    .getTracks()
    .forEach((track) => fakePeer.addTrack(track, localStream));
}
