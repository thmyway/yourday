const predictions = [
  "Сегодня мир подстроится под твои желания.",
  "Неожиданная встреча изменит твои планы.",
  "Твоя интуиция сейчас сильнее логики.",
  "То, что ты ищешь, уже рядом.",
  "Скоро ты услышишь нужные слова.",
  "Не торопись — всё происходит вовремя.",
  "Маленький шаг приведёт к большому результату.",
  "Сегодня стоит довериться случаю."
];

const btn = document.getElementById("btn");
const predictionBlock = document.getElementById("prediction");

btn.addEventListener("click", () => {
  const today = new Date().toLocaleDateString(); // например 10.02.2026
  const lastDate = localStorage.getItem("lastPredictionDate");

  if (lastDate === today) {
    alert("✨ Ты уже получал(а) предсказание сегодня.\nХочешь ещё? Поддержи проект 💛");
    return;
  }

  const randomIndex = Math.floor(Math.random() * predictions.length);
  predictionBlock.textContent = predictions[randomIndex];

  localStorage.setItem("lastPredictionDate", today);
});
