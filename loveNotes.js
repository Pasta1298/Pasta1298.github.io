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