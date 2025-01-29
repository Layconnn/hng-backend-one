### ***README***

### **HNG Task One - Public API**
This is a simple Node.js and Express.js API built with TypeScript. It returns:

- My registered email on the HNG12 Slack workspace
- The current datetime in ISO 8601 format
- The GitHub URL of the project

## ***Features***:
1. Built with Node.js, Express, and TypeScript.
2. Provides a public API returning JSON data
3. Uses dotenv for environment variables
4. Includes proper HTTP status codes

## ***Prerequisites***:
Ensure you have the following installed:
1. Node.js
2. npm or yarn

## ***Clone the Repository***:
# In your terminal:
git clone https://github.com/Layconnn/hng-backend-one.git
cd hng-backend-one

##  ***Install Dependencies***:
npm install

## **Run the Server**:
npm run dev


### ***API Documentation***
🔹 Endpoint: Get API Information
- URL: /
- Method: GET
- Response Type: JSON
- Status Code: 200 OK
  
## **Example Usage**:
Using curl:
curl -X GET http://localhost:5000

## **Response Format**
{
  "email": "myemail@gmail.com",
  "current_datetime": "2025-01-29T16:27:52.265Z",
  "github_url": "mygithub.com"
}

## **Deployment**
The API can be deployed to several platforms, such as:

**Heroku**
**Vercel**
**DigitalOcean**
**AWS (Amazon Web Services)**
**Render**

- ## **For example, deploy to Heroku:**
## **Install the Heroku CLI.**
- Log in to Heroku via the terminal:
heroku login

- Create a new Heroku app:
heroku create hng-task-one

- Push the code to Heroku:
git push heroku master

- Open the deployed API:
heroku open


**Technologies Used**
- Node.js - Server-side runtime
- Express.js - Web framework
- TypeScript - Typed JavaScript
- Nodemon - Auto-restart for development
- Dotenv - Environment variable management

***Author***
👨‍💻 Olamilekan Jinadu
📧 Email: olamilekanjinadu21@gmail.com
🔗 GitHub: Layconnn