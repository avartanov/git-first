;
(function() {
    const VALUE_OF_DEPOZIT = +prompt("Введите сумму вклада (руб.)", "");
    const PERCENT_OF_DEPOZIT = +prompt("Введите процент по вкладу (%)", "");
    if (VALUE_OF_DEPOZIT <= 0 || isNaN(VALUE_OF_DEPOZIT) ||
        PERCENT_OF_DEPOZIT <= 0 || isNaN(PERCENT_OF_DEPOZIT)) {
        alert("Вы ввели некорректные данные, обновите страницу!");
    } else {
        let result = VALUE_OF_DEPOZIT;
        let answer = "";
        for (let i = 0; i < 5; i++) {
            result += result * (PERCENT_OF_DEPOZIT / 100);
            answer += "За " + (i + 1) + " год сумма по вашему вкладу составит " +
                result.toFixed(2) + "\n";
        }
        alert(answer);
    }
})();
