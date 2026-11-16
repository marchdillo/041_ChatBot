const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.redirect("/index.html");
});

app.post("/api/chat", async (req, res) => {
    try {
        const messages = req.body.messages;

       
        const response = await fetch(
           
        );

        if (!response.ok) {
          
        }

        // Header untuk streaming
      

        while (true) {
            const { done, value } = await reader.read();

            if (done) {
                
            }

            


            // Simpan bagian terakhir karena mungkin belum lengkap
            buffer = lines.pop();

            for (const line of lines) {

                const trimmedLine = line.trim();

                

               

                try {

                    

                    if (content) {
                       
                    }

                } catch (error) {
                    
                }
            }
        }

        

    } catch (error) {

        
    }
});

