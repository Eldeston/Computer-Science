document.getElementById("action").addEventListener("click", () => {
    alert("Button clicked!");
});

if("serviceWorker" in navigator){
    navigator.serviceWorker.register(
        "service-worker.js"
    );
}