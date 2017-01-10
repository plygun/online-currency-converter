let currencies =
    [
        {
            cc: "AUD",
            symbol: "$",
            name: "Australian dollar"
        },
        {
            cc: "BGN",
            symbol: "BGN",
            name: "Bulgarian lev"
        },
        {
            cc: "BRL",
            symbol: "R$",
            name: "Brazilian real"
        },
        {
            cc: "CAD",
            symbol: "$",
            name: "Canadian dollar"
        },
        {
            cc: "CHF",
            symbol: "Fr.",
            name: "Swiss franc"
        },
        {
            cc: "CNY",
            symbol: "¥",
            name: "Chinese/Yuan renminbi"
        },
        {
            cc: "CZK",
            symbol: "Kč",
            name: "Czech koruna"
        },
        {
            cc: "DKK",
            symbol: "Kr",
            name: "Danish krone"
        },
        {
            cc: "GBP",
            symbol: "£",
            name: "British pound"
        },
        {
            cc: "HKD",
            symbol: "HK$",
            name: "Hong Kong dollar"
        },
        {
            cc: "HRK",
            symbol: "kn",
            name: "Croatian kuna"
        },
        {
            cc: "HUF",
            symbol: "Ft",
            name: "Hungarian forint"
        },
        {
            cc: "IDR",
            symbol: "Rp",
            name: "Indonesian rupiah"
        },
        {
            cc: "ILS",
            symbol: "₪",
            name: "Israeli new sheqel"
        },
        {
            cc: "INR",
            symbol: "₹",
            name: "Indian rupee"
        },
        {
            cc: "JPY",
            symbol: "¥",
            name: "Japanese yen"
        },
        {
            cc: "KRW",
            symbol: "W",
            name: "South Korean won"
        },
        {
            cc: "MXN",
            symbol: "$",
            name: "Mexican peso"
        },
        {
            cc: "MYR",
            symbol: "RM",
            name: "Malaysian ringgit"
        },
        {
            cc: "NOK",
            symbol: "kr",
            name: "Norwegian krone"
        },
        {
            cc: "NZD",
            symbol: "NZ$",
            name: "New Zealand dollar"
        },
        {
            cc: "PHP",
            symbol: "₱",
            name: "Philippine peso"
        },
        {
            cc: "PLN",
            symbol: "zł",
            name: "Polish zloty"
        },
        {
            cc: "RON",
            symbol: "L",
            name: "Romanian leu"
        },
        {
            cc: "RUB",
            symbol: "R",
            name: "Russian ruble"
        },
        {
            cc: "SEK",
            symbol: "kr",
            name: "Swedish krona"
        },
        {
            cc: "SGD",
            symbol: "S$",
            name: "Singapore dollar"
        },
        {
            cc: "THB",
            symbol: "฿",
            name: "Thai baht"
        },
        {
            cc: "TRY",
            symbol: "TRY",
            name: "Turkish new lira"
        },
        {
            cc: "USD",
            symbol: "US$",
            name: "United States dollar"
        },
        {
            cc: "ZAR",
            symbol: "R",
            name: "South African rand"
        }
    ];

export function CurrenciesFactory() {
    'ngInject';

    return currencies;
}