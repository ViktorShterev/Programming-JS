function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

     function onClick () {
        let input = JSON.parse(document.querySelector("textarea").value);
        let bestRestaurant = document.querySelector("#bestRestaurant p");
        let bestWorkers = document.querySelector("#workers p");
        let restaurantObject = {};
        let workersObj = {};

        for (const element of input) {
           const [restaurant, ...employees] = element.split(" - ");
           const employeesList = employees[0].split(", ");

           if (restaurantObject.hasOwnProperty(restaurant)) {
              workersObj = restaurantObject[restaurant];
           } else {
              workersObj = {};
           }

           for (const employee of employeesList) {
              const [worker, salary] = employee.split(" ");
              workersObj[worker] = Number(salary);
           }
         
           restaurantObject[restaurant] = workersObj;
        }

        function getTheBestRestaurant(restaurantObject) {
           let bestAverageSalary = 0;
           let bestRestaurant = "";
           let bestWorkers = {};

           for (const key in Object.keys(restaurantObject)) {
              let currentAverageSalary = 0;

              for (const salary of Object.values(restaurantObject[key])) {
                 currentAverageSalary += salary;
              }

              currentAverageSalary = currentAverageSalary /
                 Object.keys(restaurantObject[key]).length;
              
              if (currentAverageSalary > bestAverageSalary) {
                 bestAverageSalary = currentAverageSalary;
                 bestRestaurant = key;
                 bestWorkers = restaurantObject[key];
              }
           }
           let sortedBestWorkers = sortedWorkers(bestWorkers);

           return {
              bestRestaurant: bestRestaurant,
              bestAverageSalary: bestAverageSalary,
              bestWorkers: sortedBestWorkers,
           };
        }

        function sortedWorkers(workersObj) {
           return Object.entries(workersObj).sort((a, b) => b[1] - a[1]);
        }

        let theBestRestaurant = getTheBestRestaurant(restaurantObject);

        let output = "";

        theBestRestaurant["bestWorkers"].forEach((element) => {
           output += `Name: ${element[0]} With Salary: ${element[1]}`;
        });

        bestRestaurant.textContent = `Name: ${theBestRestaurant["bestRestaurant"]
           } Average Salary: ${theBestRestaurant["bestAverageSalary"].toFixed(2)
           } Best Salary: ${theBestRestaurant["bestWorkers"][0][1].toFixed(2)}`;
        
        bestWorkers.textContent = output;
   }
}