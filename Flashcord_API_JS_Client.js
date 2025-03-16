/* NOTICE: The Javascript Flashstore API Client uses WebsSockets
 and connects to a WebSocket to raw TCP translation server */

function Flashcord_API_Client(API_Request) {
    return new Promise(function(Success) {
        let ServerAddress = new WebSocket("wss://api.sirio-network.com");
        // let ServerAddress = new WebSocket("ws://localhost:1407");
        ServerAddress.onopen = function(e) {
            console.log("Sending API Request...")
            ServerAddress.send(API_Request);
        };

        ServerAddress.onmessage = function(event) {
            Success(event.data);
        }
        
        ServerAddress.onclose = function(event) {
            if (event.wasClean) {
                console.log("Connection closed. Code=${event.code} Reason=${event.reason}");
            } else {
                console.log("Connection closed forcefully.");
            }
        }
    });
};

async function FlashstoreAPI_Requester() {
    RequestBox = document.getElementById("API_Input");
    ResultBox = document.getElementById("API_Result");
    API_Request = RequestBox.value;
    Result = "Result: " + await Flashcord_API_Client(API_Request);
    ResultBox.innerText = Result;
    console.log(Result);
};

function EnterHook() {
    console.log("Now listening to Enter Key Presses while inside the API Request Box.")
    RequestBox = document.getElementById("API_Input");
    RequestBox.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            FlashstoreAPI_Requester();
        };
    });
};