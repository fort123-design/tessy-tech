function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const level = document.getElementById("level").value;
  const learn = document.getElementById("learn").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "09155328046"; // 🔁 Replace with your real WhatsApp number

  const text = `Hello A new Student-Available, I'm ${name}%0AEmail: ${email}%0ALevel: ${level}%0AI want to learn: ${learn}%0AMessage: ${message}`;

  const url = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(url, "_blank");
}
function submitQuiz() {
  const total = 10;
  const answers = {
    q1: "c",
    q2: "b",
    q3: "b",
    q4: "c",
    q5: "a",
    q6: "a",
    q7: "b",
    q8: "b",
    q9: "b",
    q10: "b"
  };

  const feedbackText = {
    q1: "HTML means <strong>HyperText Markup Language</strong>.",
    q2: "JavaScript adds interactivity to your website.",
    q3: "`2 + '2'` returns `'22'` — JavaScript concatenates the string.",
    q4: "Both `<b>` and `<strong>` make text bold — `<strong>` adds importance.",
    q5: "CSS means <strong>Cascading Style Sheets</strong>.",
    q6: "The dot `.` is used to select a class in CSS.",
    q7: "`// comment` is used for single-line comments.",
    q8: "`querySelector()` selects the <em>first</em> match using CSS syntax.",
    q9: "`<br>` is the correct tag for a line break.",
    q10: `Use <code>document.getElementById("demo").innerHTML = "Hello"</code> to change content.`
  };

  let score = 0;
  let feedback = [];

  for (let i = 1; i <= total; i++) {
    const q = document.querySelector(`input[name="q${i}"]:checked`);
    if (!q) {
      document.getElementById("result").innerHTML = `<span style="color:red">Please answer all questions.</span>`;
      return;
    }

    if (q.value === answers[`q${i}`]) {
      score++;
    } else {
      feedback.push(`❌ Q${i}: ${feedbackText[`q${i}`]}`);
    }
  }

  document.getElementById("result").innerHTML = `✅ You scored <strong>${score}/${total}</strong>`;
  document.getElementById("feedback").innerHTML = feedback.length > 0
    ? `<h4>Explanations:</h4><ul><li>${feedback.join("</li><li>")}</li></ul>`
    : `<p style="color:green;">Perfect score! 🎉</p>`;
}
function resetQuiz() {
  // Clear selected answers
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => radio.checked = false);

  // Clear result and feedback
  document.getElementById("result").innerHTML = "";
  document.getElementById("feedback").innerHTML = "";
}

function toggleSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    if (section.id === id) {
      section.classList.toggle('active');
    } else {
      section.classList.remove('active');
    }
  });
}

  const OPENAI_API_KEY = "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"; 
  // Toggle Chat Visibility
  function toggleChat() {
    const chat = document.getElementById("chat-container");
    chat.style.display = chat.style.display === "none" ? "flex" : "none";
  }

  // Send Message to AI
  async function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();
    if (!message) return;

  const chatBox = document.getElementById("chat-messages");
  chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
  

    const msg = message.toLowerCase();

    // Custom Reply 1: "hi"
    if (msg === "hi") {
      const reply = `
        Hello WELCOME TO TESSY-TECH👋  I’m your AI assistant.<br><br>
        I can help you learn about:<br>
        ✅ HTML<br>
        ✅ CSS<br>
        ✅ JavaScript<br><br>
        Try asking: <code> what is html</code>
      `;
      chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
      return;
    }
  // Respond to "what is html" or "explain html"
if (
  msg.includes("what is html") ||
  msg.includes("explain html") ||
  msg === "html"
) {
  const reply = `
    HTML stands for <strong>HyperText Markup Language</strong>.<br><br>
    🔹 It is the standard language used to <strong>structure content</strong> on the web.<br><br>
    Here’s a simple example of HTML:.<br>

    🔍 What Does HTML Do?<br>

    It tells the browser what to show <strong>(text, images, buttons, etc.)</strong>.<br><br>
    It works <strong>together</strong> with CSS (for design) and JavaScript (for actions).<br><br>
    Think of HTML as the <strong>skeleton</strong>of a webpage.<br><br>
    <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
  &lt;p&gt;This page is built with HTML!&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;
    </pre>
    ✅ You can save this as <code>index.html</code> and open it in your browser.<br><br>
  


      ask About: <code>What is Css</code>  `;
  chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  return;
}
// Respond to "what is css" or "explain css"
if (
  msg.includes("what is css") ||
  msg.includes("explain css") ||
  msg === "css"
) {
  const reply = `
    CSS stands for <strong>Cascading Style Sheets</strong>.<br><br>
    🔹 It is used to <strong>style and design</strong> your HTML webpage.<br>
    🔹 With CSS, you can change colors, fonts, layouts, spacing, and more!<br><br>
    Here’s a simple example of CSS:
    <pre>
&lt;style&gt;
  body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    color: #333;
    text-align: center;
  }

  h1 {
    color: #0078D7;
  }
&lt;/style&gt;
    </pre>
    ✅ This CSS code will make your webpage cleaner and more stylish!.<br><br>
 
   ask About: <code>what is javascript</code>   `;
  chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  return;
}
// Respond to "what is javascript" or "explain javascript"
if (
  msg.includes("what is javascript") ||
  msg.includes("explain javascript") ||
  msg === "javascript"
) {
  const reply = `
    JavaScript is a <strong>programming language</strong> used to make websites interactive.<br><br>
    🔹 It can control what happens when users click buttons, type, scroll, or submit forms.<br>
    🔹 JavaScript works together with HTML (structure) and CSS (style) to make full web apps.<br><br>
    ✅ Here’s a simple example:
    <pre>
&lt;button onclick="sayHello()"&gt;Click Me&lt;/button&gt;

&lt;script&gt;
  function sayHello() {
    alert("Hello from JavaScript!");
  }
&lt;/script&gt;
    </pre>
    💡 When the button is clicked, JavaScript shows an alert popup!.<br><br>
 
       Ask About: <code>Create a Website </code>`;
  chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  return;
}

    // Respond to "create a website with html css and javascript"
if (
  msg.includes("create a website") ||
  msg.includes("html css javascript website")
) {
  const reply = `
    Here's a complete website using HTML, CSS, and JavaScript:
    <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Interactive Web Page&lt;/title&gt;
  &lt;style&gt;
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f8ff;
      text-align: center;
      padding: 50px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #0078D7;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #005bb5;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;h1&gt;My Interactive Website&lt;/h1&gt;
  &lt;p&gt;Click the button below to see JavaScript in action!&lt;/p&gt;

  &lt;button onclick="showMessage()"&gt;Click Me&lt;/button&gt;
  &lt;p id="output"&gt;&lt;/p&gt;

  &lt;script&gt;
    function showMessage() {
      document.getElementById("output").innerText = "🎉 You clicked the button! This is JavaScript working!";
    }
  &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
    </pre>
    💡 Copy this into a file called <code>index.html</code> and open it in your browser!<br><br>
    ask About : <code>create navbar</code> `;
  chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  return;
}

if (msg.includes("create navbar")) {
  const reply = `
    Here's how to create a simple navbar:
    <pre><code>&lt;nav&gt;
&lt;a href="#"&gt;Home&lt;/a&gt;
&lt;a href="#"&gt;About&lt;/a&gt;
&lt;a href="#"&gt;Contact&lt;/a&gt;
&lt;/nav&gt;

&lt;style&gt;
nav a {
margin: 10px;
text-decoration: none;
color: navy;
}
&lt;/style&gt;</code></pre>
This is how to prepare a nav bar
ask about: <code> Create form</code>`;
chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  return;
}

if (msg.includes(" create a form")) {
  const reply = `
    Here's a basic contact form:
    <pre><code>&lt;form action="your-email-handler" method="post"&gt;
&lt;input type="text" name="name" placeholder="Your Name"&gt;&lt;br&gt;
&lt;input type="email" name="email" placeholder="Your Email"&gt;&lt;br&gt;
&lt;textarea name="message" placeholder="Your Message"&gt;&lt;/textarea&gt;&lt;br&gt;
&lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;</code></pre>
 ask About: <code>create an image</code>`;
chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  return;
}

  // Image tag
  if (msg.includes("create an image") || msg.includes("insert image")) {
    const reply =`
    <p>Use this code to add an image:</p>
    <pre><code>&lt;img src="https://via.placeholder.com/150" alt="My Image" /&gt;</code></pre>.<br><br>
    ask about: <code>create dark mode</code>`;
    chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  return;
  }

  // Dark mode
  if (msg.includes(" create dark mode")) {
    const reply = `
    <p>This CSS enables dark mode:</p>
    <pre><code>body {
  background-color: #121212;
  color: #f0f0f0;
}</code></pre>.<br><br>
ask About: <code>create login form</code>`;
chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  return;
  }

  // Login form
  if (msg.includes("create login form")) {
    const reply = `
    <p>Here’s a simple login form:</p>
    <pre><code>&lt;form&gt;
  &lt;input type="text" placeholder="Username"&gt;&lt;br&gt;
  &lt;input type="password" placeholder="Password"&gt;&lt;br&gt;
  &lt;button&gt;Login&lt;/button&gt;
&lt;/form&gt;</code></pre>.<br><br>
ask About:<code>create button</code>`;
chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  return;
  }

  // Button event
  if (msg.includes(" create button")) {
    const reply = `
    <p>Here’s how to create a button and respond to clicks with JavaScript:</p>
    <pre><code>&lt;button onclick="sayHello()"&gt;Say Hello&lt;/button&gt;

&lt;script&gt;
  function sayHello() {
    alert("Hi there!");
  }
&lt;/script&gt;</code></pre>
  
    <p>Try asking me coding questions like:</p>
    <ul>
      <li>How do I create a website?</li>
      <li>Show me HTML or CSS code</li>
      <li>Give me a contact form</li>
      <li>How to add an image?</li>
    </ul>.<br><br>
     ask for anything else🧠💬❓.<br><br> 
       If Asking then please fillup the form📝📋✍️ to start our Class.<br><br> `;
    chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    return;
  }
    // Fallback: Real ChatGPT Response via OpenAI API
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant that answers code and tech questions simply." },
            { role: "user", content: message }
          ]
        })
      });

      const data = await response.json();
      const reply = data.choices[0].message.content.trim();
      chatBox.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    } catch (err) {
      chatBox.innerHTML += `<div><strong>AI:</strong> ❌ Error: ChatGPT could not connect.</div>`;
    }
  }
  // Optional: Press Enter to Send
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("chat-input").addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    });
  });
  
