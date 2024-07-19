"use strict";

{
  function showHeader() {
    console.log(`Header`);
  }

  // function showUsers() {
  //   console.log(`Users`);
  // }

  const showUsers = async () => {
    const userUrl = `https://dotinstall.github.io/setup/fetchapi/users.json`;

    try {
      const response = await fetch(userUrl);
      const users = await response.json();
      users.forEach((user, index) => {
        const paddedIndex = index.toString().padStart(2, "0");
        const userName = user.userName;
        const score = user.score;
        console.log(`${paddedIndex}: ${userName}のスコアは${score}です`);
      });
    } catch (error) {
      console.error(error);
    }
  };

  function showFooter() {
    console.log(`Footer`);
  }

  showHeader();
  showUsers();
  showFooter();
}

// https://dotinstall.github.io/setup/fetchapi/users.json

// [
//   { userName: "A", score: 10 },
//   { userName: "A", score: 10 },
//   { userName: "A", score: 10 },
// ];
