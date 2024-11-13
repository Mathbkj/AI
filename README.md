Demo application using OLlama API, developed by Facebook, in order to build a simple chatbot interface to interact with.
<h1>
  Before starting the project make sure you've installed:
</h1>

<br/>
<h2>
  
  - OLlama
  <br/>
  
  - Node.js
    <br/>
  - Postman or curl(Up to you 😁)
</h2>
<br/>
<span>In order to run the API locally, you can do <code>ollama run llama3</code> as in this project we're using the llama3 model. 
  To test it you have two options:
  <br/>
  <b>Postman: Open your Postman and do a POST request to the url "http://localhost:11434/api/generate" with payload:
    <code>
    {
    "model":"llama3",
    "prompt:"Why is the sky blue"
    }
    </code>
    <br/>
    It's gonna give you the response as a stream, which means it will be partially loaded instead of as a whole one.
  </b>
  <br/>
  Otherwise when using curl, do:
  <br/>
  <code>
    curl http://localhost:11434/api/generate -d '{
    "model": "llama3.2",
    "prompt":"Why is the sky blue?"
}'.
  </code>
  <br/>
</span>
<br/>
<br/>
  <h1>Explanation and usage:</h1>
  <br/>
  <b>*This application is basically a testing AI project with OLlama integration, a bot developed by Meta AI group.</b>
  <br/>
  <br/>
  <b>
  *Server: This folder's responsible for starting the backend with Express.js and uses a different port than the client-side port. In order to start the server, use the npm commands accordingly.
    </b>
  <br/>
  <br/>
  *ai-project: This folder's responsible for setting the client-side and it uses React+Typescript for starting the web page. In order to locally start it, just as with server, do 'npm run dev' 
  <b></b>

  <br/> Enjoy the content! 😁

<h1>Video Demonstration</h1>

https://github.com/user-attachments/assets/52c815d2-d427-4b0f-bc0b-07fb64dc4ec3

