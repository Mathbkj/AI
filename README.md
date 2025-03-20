# 🧠 OLlama API Chatbot

A demo application using the **OLlama API**, developed by **Facebook**, to build a simple chatbot interface.

## 🚀 Prerequisites
Before starting the project, ensure you have installed:

- **OLlama**
- **Node.js**
- **Postman** or **cURL** (Optional)

## 🔧 Running the API Locally
To run the API locally, execute:

```sh
ollama run llama3
```

Since this project uses the **llama3** model, you can test it using **Postman** or **cURL**:

### ✅ Using Postman
1. Open **Postman**.
2. Make a **POST request** to:
   ```sh
   http://localhost:11434/api/generate
   ```
3. Use the following JSON payload:
   ```json
   {
     "model": "llama3",
     "prompt": "Why is the sky blue?"
   }
   ```
4. The response will be streamed incrementally.

### ✅ Using cURL
Alternatively, use **cURL** in the terminal:

```sh
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Why is the sky blue?"
}'
```

## 🏗 Project Structure
### **📂 Server**
- Contains the **backend** built with **Express.js**.
- Runs on a separate port from the client.
- To start the server:
  ```sh
  npm install
  npm start
  ```

### **📂 ai-project (Client-side)**
- Built with **React + TypeScript**.
- Handles the chatbot UI.
- To start the client:
  ```sh
  npm install
  npm run dev
  ```

## 🎥 Video Demonstration
[Watch the demo here!](https://github.com/user-attachments/assets/52c815d2-d427-4b0f-bc0b-07fb64dc4ec3)

Enjoy the project! 😁

