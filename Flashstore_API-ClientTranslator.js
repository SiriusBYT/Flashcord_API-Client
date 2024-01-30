/* NOTICE: The Javascript Flashstore API Client uses WebsSockets
 and connects to a WebSocket to Raw TCP translation server
 located on aura-one.sirio-network.com:1407 instead of aura-two.sirio-network.com:1407. */

function FlashClient_APÏ_Request(API_Request) {
    return new Promise((API_Result) => {
        //const ServerAddress = new WebSocket("ws://aura-one.sirio-network.com:1407");
        const ServerAddress = new WebSocket("ws://localhost:1407");
        ServerAddress.addEventListener("open", (event) => {
            ServerAddress.send(API_Request);
        });

        ServerAddress.addEventListener("message", (event) => { 
            API_Result(event.data);
        });
    });
};

async function FlashstoreAPI_Requester() {
    RequestBox = document.getElementById("API_Input");
    ResultBox = document.getElementById("API_Result");
    API_Request = RequestBox.value;
    Result = await FlashClient_APÏ_Request(API_Request);
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