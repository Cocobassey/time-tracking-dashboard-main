const dailyClick = document.getElementById("daily");
const weeklyClick = document.getElementById("weekly");
const monthlyClick = document.getElementById("monthly");

const time = document.querySelectorAll(".time");
const previous = document.querySelectorAll(".previous");

/* import dataJson from "./data.json" assert { type: "json" };
console.log(dataJson[0].timeframes.daily); */

const dataObj = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

// console.log(dataObj[0].timeframes.daily);


dailyClick.addEventListener("click", () => {
  for (let i = 0; i < time.length; i++) {
    time[i].innerText = dataObj[i].timeframes.daily.current + "hrs";
    previous[i].innerText = "previous - " + dataObj[i].timeframes.daily.previous + "hrs";
  }
});

weeklyClick.addEventListener("click", () => {
  for (let i = 0; i < time.length; i++) {
    time[i].innerText = dataObj[i].timeframes.weekly.current + "hrs";
    previous[i].innerText = "previous - " + dataObj[i].timeframes.weekly.previous + "hrs";
  }
});

monthlyClick.addEventListener("click", () => {
  for (let i = 0; i < time.length; i++) {
    time[i].innerText = dataObj[i].timeframes.monthly.current + "hrs";
    previous[i].innerText = "previous - " + dataObj[i].timeframes.monthly.previous + "hrs";
  }
});