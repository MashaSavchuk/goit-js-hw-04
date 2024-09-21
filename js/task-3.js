const profile = {
  username: "Jacob",
  playTime: 300,
  
  changeUsername(newName) {
    this.username = newName; // Змінюємо ім'я профілю
  },
  
  updatePlayTime(hours) {
    this.playTime += hours; // Збільшуємо кількість годин
  },
  
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`; // Форматуємо рядок
  }
};

// Перевірка роботи методів
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
