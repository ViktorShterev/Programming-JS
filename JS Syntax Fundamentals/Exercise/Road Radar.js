function solve(speed, area) {

    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;

    switch (area) {
      case "motorway":
        if (speed <= motorwaySpeed) {
          console.log(`Driving ${speed} km/h in a ${motorwaySpeed} zone`);
        } else {
          let faster = speed - motorwaySpeed;
          let status;

          if (faster <= 20) {
            status = "speeding";
          } else if (faster <= 40) {
            status = "excessive speeding";
          } else {
            status = "reckless driving";
          }

          console.log(
            `The speed is ${faster} km/h faster than the allowed speed of ${motorwaySpeed} - ${status}`
          );
        }
            break;
        
      case "interstate":
        if (speed <= interstateSpeed) {
          console.log(`Driving ${speed} km/h in a ${interstateSpeed} zone`);
        } else {
          let faster = speed - interstateSpeed;
          let status;

          if (faster <= 20) {
            status = "speeding";
          } else if (faster <= 40) {
            status = "excessive speeding";
          } else {
            status = "reckless driving";
          }

          console.log(
            `The speed is ${faster} km/h faster than the allowed speed of ${interstateSpeed} - ${status}`
          );
        }
            break;
        
      case "city":
        if (speed <= citySpeed) {
          console.log(`Driving ${speed} km/h in a ${citySpeed} zone`);
        } else {
          let faster = speed - citySpeed;
          let status;

          if (faster <= 20) {
            status = "speeding";
          } else if (faster <= 40) {
            status = "excessive speeding";
          } else {
            status = "reckless driving";
          }

          console.log(
            `The speed is ${faster} km/h faster than the allowed speed of ${citySpeed} - ${status}`
          );
        }
            break;
        
      case "residential":
        if (speed <= residentialSpeed) {
          console.log(`Driving ${speed} km/h in a ${residentialSpeed} zone`);
        } else {
          let faster = speed - residentialSpeed;
          let status;

          if (faster <= 20) {
            status = "speeding";
          } else if (faster <= 40) {
            status = "excessive speeding";
          } else {
            status = "reckless driving";
          }

          console.log(
            `The speed is ${faster} km/h faster than the allowed speed of ${residentialSpeed} - ${status}`
          );
        }
        break;
    }
}