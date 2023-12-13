/** @format */

function urlCount() {
  const appId = "bcab716fa7cc4ffa9323931eda275950";
  const baseCurrency = document.getElementById("opt1").value;
  const targetCurrency = document.getElementById("opt2").value;
  let resultado = "";
  let convertedAmount = 0;

  const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${appId}`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const exchangeRate = data.rates[targetCurrency];
      const amountInBaseCurrency = document.getElementById("inp3").value;
      convertedAmount += amountInBaseCurrency * exchangeRate;

      resultado += `${amountInBaseCurrency} ${baseCurrency} é igual a ${convertedAmount.toFixed(
        2
      )} ${targetCurrency}<br>`;
      const sec = document.querySelector("section");
      sec.innerHTML += `<p> ${resultado} </p>`;
      console.log(resultado);
    })
    .catch((error) => {
      console.error("Error fetching exchange rates:", error);
    });
}

function urlCota() {
  const appId = "bcab716fa7cc4ffa9323931eda275950";
  const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${appId}`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const opt1 = document.getElementById("opt1");
      const opt2 = document.getElementById("opt2");

      for (const currency in data.rates) {
        const option = document.createElement("option");
        option.value = currency;
        option.text = currency;
        opt1.append(option);
        opt2.append(option.cloneNode(true));
      }
    })
    .catch((error) => {
      console.error("Error fetching exchange rates:", error);
    });
}

urlCota();
