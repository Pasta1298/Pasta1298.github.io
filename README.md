<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daily Note for My Love ❤️</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #034d20, #e07aa0); /* dark green -> pink */
      color: #034d20;
      text-align: center;
      padding: 20px;
      overflow: hidden;
    }
    #love-note {
      font-size: 2rem;
      max-width: 600px;
      line-height: 1.5;
      padding: 30px;
      background-color: rgba(255, 182, 200, 0.7); /* semi-transparent pink */
      color: #034d20; /* dark green text */
      border-radius: 30px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      position: relative;
      z-index: 1;
    }
    /* Floating hearts */
    .heart {
      position: absolute;
      font-size: 20px;
      animation: float 5s linear infinite;
      opacity: 0.8;
    }
    @keyframes float {
      0% { transform: translateY(100vh) scale(0.5); opacity: 0.8; }
      100% { transform: translateY(-10vh) scale(1); opacity: 0; }
    }
  </style>
</head>
<body>
  <div id="love-note"></div>

  <script>
    const loveNotes = [
    "I want to be with you...always, you are in fact the only person I always want to be with",
    "Every memory with you is my favourite and is always cherished",
    "You're my person, I can't put into words how much you mean to me",
    "Just thinking about you makes my day 10 times better",
    "You make me feel like safe can be a constant",
    "If I could write your name across the stars I'd do it every night",
    "You're my favourite person to do absolutely nothing with",
    "I daydream about a future with you every day",
    "I love how your laugh heals parts of me you didn't break",
    "I could spend hours just listening to you talk and smile to myself",
    "You're the reason I look at my phone with a ear to ear grin all the time",
    "You're my home, I don't need a fancy four walls, as long as i have you I'm happy",
    "With you I don't feel like I need my masks, I can be just me as I am",
    "I dream every night about our wedding",
    "I want to come home to your arms everyday, I want to cook you fancy meals just because",
    "You're like a magnet for my mind, there's not a day when you're not on my mind",
    "I can't wait to build a beautiful life with you",
    "I can't wait to give you your dream house",
    "I want to sit and drink coffee with you every morning, you with your fancy coffee and me with my black coffee",
    "I can't wait to build a beautiful family with you",
    "You make me excited to see and live our future together",
    "I fall in love with you more every single day",
]
const today = new Date();
const dayKey = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();

function getTodaysLoveNote() {
  const index = dayKey.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % loveNotes.length;
  return loveNotes[index];
}

document.getElementById("love-note").innerText = getTodaysLoveNote();
  </script>
  <script>
    // ----- Floating hearts -----
    const colors = ["#ff9ad0", "#034d20"]; // pink and dark green
    for(let i=0; i<20; i++){
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerText = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = (15 + Math.random()*25) + "px";
      heart.style.animationDuration = (3 + Math.random()*5) + "s";
      heart.style.color = colors[Math.floor(Math.random()*colors.length)];
      document.body.appendChild(heart);
    }
  </script>
</body>
</html>
