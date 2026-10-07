
const send = document.getElementById("send");
const messages = document.getElementById("messages");

const messenger_chat = [
    {
        ai : "yes , Hello brother",
        you : "hello",
    },
]

    e.preventDefault();
    const input_chat = document.getElementById("input_chat").value;
    messenger_chat.forEach(chat=>{
        const for_chat = document.createElement("div");
        for_chat.classList.add("messages")
        
        for_chat.innerHTML = `
        <div id="messages" class="messages">

            <div id="other" class="message received">

                ${chat.you}

            </div>

            <div id="you"  class="message sent">

                ${chat.ai}

            </div>

        </div>
        `
        messages.appendChild(for_chat);
    })