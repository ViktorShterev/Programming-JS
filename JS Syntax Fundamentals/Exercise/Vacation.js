function solve(people, type, day) {
    let totalPrice;
    let singlePrice;

    if (type === "Students") {
        switch (day) {
            case "Friday":
                singlePrice = 8.45;
                break;
            case "Saturday":
                singlePrice = 9.8;
                break;
            case "Sunday":
                singlePrice = 10.46;
                break;
        }

        totalPrice = people * singlePrice;

        if (people >= 30) {
            return console.log(`Total price: ${(totalPrice - (totalPrice * 0.15)).toFixed(2)}`);
        } else {
            return console.log(`Total price: ${totalPrice.toFixed(2)}`);
        }
    }

    if (type === "Business") {
      switch (day) {
        case "Friday":
          singlePrice = 10.9;
          break;
        case "Saturday":
          singlePrice = 15.6;
          break;
        case "Sunday":
          singlePrice = 16;
          break;
        }
        
        totalPrice = people * singlePrice;

        if (people >= 100) {
          return console.log(`Total price: ${(singlePrice * (people - 10)).toFixed(2)}`);
        } else {
          return console.log(`Total price: ${totalPrice.toFixed(2)}`);
        }
    }

    if (type === "Regular") {
      switch (day) {
        case "Friday":
          singlePrice = 15;
          break;
        case "Saturday":
          singlePrice = 20;
          break;
        case "Sunday":
          singlePrice = 22.5;
          break;
        }
        
        totalPrice = people * singlePrice;

        if (people >= 10 && people <= 20) {
          return console.log(`Total price: ${(totalPrice - (totalPrice * 0.05)).toFixed(2)}`);
        } else {
          return console.log(`Total price: ${totalPrice.toFixed(2)}`);
        }
    }
}