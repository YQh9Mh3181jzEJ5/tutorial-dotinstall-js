"use strict";

{
  class User {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }

    getUserString() {
      return `${this.name} ${this.score.getScoreString()}`;
    }
  }

  const user1 = new User("Taro", new MathScore(50));
  const user2 = new User("Jiro", new EnglishScore(80));

  console.log(user1.getUserString());
  console.log(user2.getUserString());
}
