/* NOTICE: The Javascript Flashstore API Client uses WebsSockets
 and connects to a WebSocket to raw TCP translation server */

function Flashcord_API_Client(API_Request) {
    //const ServerAddress = new WebSocket("ws://aura-two.sirio-network.com:1407");
    const ServerAddress = new WebSocket("ws://localhost:1407");
    ServerAddress.onopen = function(e) {
        console.log("Sending API Version Number")
        ServerAddress.send("3.0");
    };

    ServerAddress.onmessage = function(event) {
        if (event.data == "OK" || event.data == "OUTDATED_SERVER") {
            console.log(event.data);
            ServerAddress.send(API_Request);
        } else {
            console.log(event.data);
            ServerAddress.close();
            return event;
        }
        
    }

    ServerAddress.onclose = function(event) {
        console.log("Connection closed");
    }
};

async function FlashstoreAPI_Requester() {
    RequestBox = document.getElementById("API_Input");
    ResultBox = document.getElementById("API_Result");
    API_Request = RequestBox.value;
    Result = Flashcord_API_Client(API_Request);
    console.log(Result)
    Result = "Result: " + Result;
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