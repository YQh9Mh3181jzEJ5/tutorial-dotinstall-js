"use strict";

{
  function showPassword() {
    const result = document.getElementById("result");
    const numbersCheckbox = document.getElementById("numbers-checkbox");
    const symbolsCheckbox = document.getElementById("symbols-checkbox");
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    let password = "";
    let seed = letters + letters.toUpperCase();

    // 必須文字を格納する配列
    let requiredChars = [];

    if (numbersCheckbox.checked) {
      seed += numbers;
      requiredChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (symbolsCheckbox.checked) {
      seed += symbols;
      requiredChars.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    // 必須文字を含める
    for (let char of requiredChars) {
      password += char;
    }

    for (let i = password.length; i < slider.value; i++) {
      password += seed[Math.floor(Math.random() * seed.length)];
    }

    // パスワードの文字をシャッフル
    password = shuffleString(password);
    result.textContent = password;
  }

  // 文字列をシャッフルする関数
  function shuffleString(str) {
    let arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
  }
  const slider = document.getElementById("slider");
  const btn = document.getElementById("btn");

  slider.addEventListener("input", () => {
    const passwordLength = document.getElementById("password-length");
    passwordLength.textContent = slider.value;
  });

  btn.addEventListener("click", () => {
    showPassword();
  });

  showPassword();
}
