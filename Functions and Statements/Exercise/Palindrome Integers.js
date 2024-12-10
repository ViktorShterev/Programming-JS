function solve(arr) {

    for (const num of arr) {
        
        function isPalindrome(num) {
            let numAsString = num.toString();
            let reverseNum = numAsString.split('').reverse().join('');

            return numAsString === reverseNum;
        }

        console.log(isPalindrome(num));
    }
}
solve([123, 323, 421, 121]);