function handleUserInput() {
  const input = document.getElementById("userInput");
  const question = input.value.trim().toLowerCase();
  if (!question) return;

  addMessage("user", question);
  input.value = "";

  const answer = faqData[question] || "I'm not sure about that. Please contact support.";
  setTimeout(() => addMessage("bot", answer), 500);
}

function addMessage(sender, text) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function handleUserInput() {
  const input = document.getElementById("userInput");
  const question = input.value.trim().toLowerCase();
  if (!question) return;

  addMessage("user", question);
  input.value = "";

  const answer = faqData[question] || "I'm not sure about that. Please contact support.";
  setTimeout(() => addMessage("bot", answer), 500);
}

function addMessage(sender, text) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}