document.addEventListener("DOMContentLoaded", () => {

  const predictions = [
    "Сегодня мир подстроится под твои желания.",
    "Неожиданная встреча изменит твои планы.",
    "Твоя интуиция сейчас сильнее логики.",
    "То, что ты ищешь, уже рядом.",
    "Скоро ты услышишь нужные слова.",
    "Не торопись — всё происходит вовремя.",
    "Маленький шаг приведёт к большому результату.",
    "Делай — сейчас удачный момент.",
    "Можно не спешить, ты ничего не теряешь.",
    "Лучше отложить, но мысль верная.",
    "Рискни — опыт точно пригодится.",
    "Не делай резких движений, и всё сложится.",
    "Спроси совета — услышишь полезное.",
    "Доверься интуиции, она сегодня точная.",
    "План работает, продолжай.",
    "Измени подход — результат станет легче.",
    "Сегодня лучше наблюдать, чем действовать.",
    "Маленький шаг даст большой эффект.",
    "Не сейчас, но очень скоро.",
    "Ты уже сделал(а) достаточно.",
    "Можно расслабиться — контроль не нужен.",
    "Попробуй, даже если не идеально.",
    "Всё идёт медленно, но в нужную сторону.",
    "Смена обстановки пойдёт на пользу.",
    "Сделай по-своему — это сработает.",
    "Если не получится, ничего страшного.",
    "Подожди знак — он появится.",
    "Дай себе время подумать.",
    "Сегодня важнее настроение, чем результат.",
    "Продолжай, но без давления.",
    "Лучше упростить задачу.",
    "Ты на верном пути, даже если сомневаешься.",
    "Можно отказаться — ты ничего не обязан(а).",
    "Прислушайся к телу, оно подскажет.",
    "Сделай паузу, потом вернёшься с идеей.",
    "Не всё зависит от тебя — и это нормально.",
    "Решение придёт неожиданно.",
    "День подходит для спонтанности.",
    "Сохрани энергию — она скоро понадобится.",
    "Можно довериться случаю.",
    "Даже если не выйдет, станет ясно, как лучше.",
    "Попробуй позже — эффект будет сильнее.",
    "Не сравнивай себя с другими.",
    "Сегодняшний выбор упростит завтра.",
    "Оставь как есть — этого достаточно.",
    "Действуй мягко, без борьбы.",
    "Всё складывается лучше, чем кажется.",
    "Сегодня стоит довериться случаю."
  ];

const btn = document.getElementById("btn");
  const predictionBlock = document.getElementById("prediction");
  const timerBlock = document.getElementById("timer");

  if (!btn || !predictionBlock || !timerBlock) return;

  const THREE_HOURS = 3 * 60 * 60 * 1000;
  let countdownInterval;

  function startTimer(savedTime) {

    function updateTimer() {
      const now = Date.now();
      const remaining = THREE_HOURS - (now - savedTime);

      if (remaining <= 0) {
        clearInterval(countdownInterval);
        timerBlock.textContent = "✨ Можно получить новое предсказание";
        localStorage.removeItem("predictionTime");
        localStorage.removeItem("predictionText");
        return;
      }

      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      timerBlock.textContent =
        `Новое предсказание через ${hours}ч ${minutes}м ${seconds}с`;
    }

    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
  }

  const savedTime = localStorage.getItem("predictionTime");
  const savedText = localStorage.getItem("predictionText");

  if (savedTime && savedText) {
    const timeNumber = Number(savedTime);

    if (Date.now() - timeNumber < THREE_HOURS) {
      predictionBlock.textContent = savedText;
      predictionBlock.classList.add("show");
      startTimer(timeNumber);
    }
  }

  btn.addEventListener("click", () => {

    const currentSavedTime = localStorage.getItem("predictionTime");

    if (currentSavedTime &&
        (Date.now() - currentSavedTime < THREE_HOURS)) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * predictions.length);
    const newPrediction = predictions[randomIndex];

    predictionBlock.classList.remove("show");

    setTimeout(() => {
      predictionBlock.textContent = newPrediction;
      predictionBlock.classList.add("show");
    }, 50);

    const now = Date.now();
    localStorage.setItem("predictionTime", now);
    localStorage.setItem("predictionText", newPrediction);

    startTimer(now);
  });

});
