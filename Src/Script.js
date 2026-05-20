console.log("script ran")

const SERVER_IP = "mc.msmp5.rook1.net"
const STATUS_API_URL = "https://api.mcstatus.io/status/java/mc.msmp5.rook1.net"

// elements
const SERVER_STATUS = document.getElementById("serverStatus")
const BUTTON_Q_Q_Q = document.getElementById("button1")

async function refresh() {
    SERVER_STATUS.textContent = "Loading..."
    BUTTON_Q_Q_Q.classList.add("hidden")

    fetch(STATUS_API_URL)
        .then(response => response.json())
        .then(data => {
            const online = data.online == true

            if (online) {
                SERVER_STATUS.textContent = "Online"
                //BUTTON_Q_Q_Q.classList.remove("hidden")
            } 
            else {
                SERVER_STATUS.textContent = "Offline"
            }
        })
        .catch(error => {
            console.error('Api error:', error)
            SERVER_STATUS.textContent = "API Error"
        })
}

refresh()