if (!userAgent.toLowerCase().includes("roblox")) {
  res.setHeader("Content-Type", "text/html");
  return res.status(200).send(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ORRXL4 PROTECTOR</title>
        <style>
          body {
            margin: 0;
            background: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 20px;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
            color: #00aaff;
            text-align: center;
          }

          .container {
            width: 100%;
            max-width: 500px;
          }

          h1 {
            font-size: 8vw;
            margin-bottom: 15px;
          }

          p {
            font-size: 4vw;
            margin: 8px 0;
          }

          a {
            color: #00aaff;
            text-decoration: none;
            word-break: break-word;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>ORRXL4 PROTECTOR 🔒</h1>
          <p>THIS SCRIPT WAS PROTECTED BY ORRXL4 PROTECTOR</p>
          <p>
            <a href="https://orrxl4-protector.vercel.app/" target="_blank">
              https://orrxl4-protector.vercel.app/
            </a>
          </p>
        </div>
      </body>
    </html>
  `);
}
