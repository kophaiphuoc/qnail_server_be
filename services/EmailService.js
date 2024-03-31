const nodemailer = require('nodemailer');

const SendMail = (name, email, phone, content) => {
    console.log(name, email, phone, content);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "phuocph1903@gmail.com",
            pass: "kapgmspdigzrwrrd",
        }
    });

    const mailOptions = {
        from: "qnailssherwoodpark@gmail.com'",
        to: "nailsawayspa@gmail.com",
        subject: "Customer information notification",
        html: `<!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="utf-8">
            <title>Contact Form</title>
            <style>
                body {
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    font-size: 14px;
                    line-height: 1.6;
                    color: #333;
                    background-color: #f8f8f8;
                    margin: 0;
                    padding: 0;
                }
        
                h1,
                h2 {
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    font-weight: 400;
                    margin-top: 0;
                    margin-bottom: 20px;
                    color: #000;
                }
        
                h1 {
                    font-size: 24px;
                }
        
                h2 {
                    font-size: 18px;
                }
        
                a {
                    color: #1ab394;
                    text-decoration: none;
                }
        
                table {
                    border-collapse: collapse;
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    border-radius: 5px;
                    overflow: hidden;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                }
        
                table td {
                    padding: 20px;
                    font-size: 16px;
                    line-height: 1.6;
                    border-bottom: 1px solid #f6f6f6;
                    text-align: left;
                    vertical-align: top;
                }
        
                table td:first-child {
                    font-weight: 700;
                    color: #555;
                    width: 30%;
                    max-width: 150px;
                    background-color: #f6f6f6;
                    text-align: right;
                    vertical-align: middle;
                }
        
                table td:last-child {
                    width: 70%;
                    max-width: 450px;
                }
        
                input[type="text"],
                textarea {
                    display: block;
                    box-sizing: border-box;
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 20px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    resize: none;
                    font-size: 16px;
                }
        
                input[type="submit"] {
                    display: inline-block;
                    background-color: #1ab394;
                    color: #fff;
                    padding: 10px 20px;
                    font-size: 16px;
                    font-weight: bold;
                    text-transform: uppercase;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
        
                input[type="submit"]:hover {
                    background-color: #118b6a;
                }
        
                .message {
                    margin-bottom: 20px;
                    padding: 10px;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #fff;
                    border-radius: 4px;
                }
        
                .message.success {
                    background-color: #1ab394;
                }
        
                .message.error {
                    background-color: #ff0000;
                }
            </style>
        </head>
        
        <body>
            <table>
                <tr>
                    <td>First and last name:${name}</td>
                </tr>
                <tr>
                    <td>Email address:${email}</td>
                   
                </tr>
                <tr>
                    <td>Phone:${phone}</td>
                   
                </tr>
                <tr>
                    <td>Content:${content}</td>
                    
                </tr>
            </table>
            </form>
        </body>
        
        </html>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return 2
        } else {
            console.log("Email sent: " + info.response);
            return 1
        }
    });
}

module.exports = { SendMail }