document.addEventListener("scroll", () => {
    const cards2 = document.querySelector(".cards1"); // בוחר את האלמנט
    const rect = cards2.getBoundingClientRect(); // בודק את המיקום שלו יחסית למסך
    
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // אם האלמנט נכנס ל-viewport
      cards2.classList.add("visible");
    } else {
      // אם האלמנט יוצא מה-viewport (אופציונלי)
      cards2.classList.remove("visible");
    }
  });
  
document.addEventListener("scroll", () => {
    const cards2 = document.querySelector(".cards2"); // בוחר את האלמנט
    const rect = cards2.getBoundingClientRect(); // בודק את המיקום שלו יחסית למסך
    
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // אם האלמנט נכנס ל-viewport
      cards2.classList.add("visible");
    } else {
      // אם האלמנט יוצא מה-viewport (אופציונלי)
      cards2.classList.remove("visible");
    }
  });
  
document.addEventListener("scroll", () => {
    const cards2 = document.querySelector(".jerusalem-number"); // בוחר את האלמנט
    const rect = cards2.getBoundingClientRect(); // בודק את המיקום שלו יחסית למסך
    
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // אם האלמנט נכנס ל-viewport
      cards2.classList.add("visible");
    } else {
      // אם האלמנט יוצא מה-viewport (אופציונלי)
      cards2.classList.remove("visible");
    }
  });
  