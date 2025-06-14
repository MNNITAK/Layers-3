const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();



const GenerateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log("Prompt received:", prompt);  

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return res.status(400).json({ error: "Prompt is required and must be a non-empty string." });
    }

    const response = await fetch("https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
      },
      body: JSON.stringify({
        text_prompts: [{ text: prompt }],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        samples: 1,
        steps: 30,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Stability API error:", errorData);
      return res.status(response.status).json({ error: errorData.message || "Failed to generate image" });
    }

    const data = await response.json();
    const base64Image = data.artifacts[0]?.base64;

    if (!base64Image) {
      return res.status(500).json({ error: "No image returned from Stability API" });
    }

    // Optionally, you can convert the base64 image to a data URL
    const imageUrl = `data:image/png;base64,${base64Image}`;



    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error("Image generation error:", error);
    res.status(500).json({ error: "Failed to generate image" });
  }
};

module.exports = { GenerateImage };
