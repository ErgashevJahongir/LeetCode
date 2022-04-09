// ========  1 - way ========
const isPalindromeArry1 = function (arry) {
    let length = arry.length;
    for (let i = 0; i < length / 2; i++) {
        if (arry[i] != arry[length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// ========  2 - way ========
const isPalindromeArry2 = function (arry) {
    let son;
    const length = arry.length;
    for (let i = 0; i < length && length != 0; i++) {
        if (arry[i] != arry[length - 1 - i]) {
            son = true;
        }
    }
    if (son) {
        return false;
    } else {
        return true;
    }
};

// ========  3 - way ========
// To'g'ri yechilish yo'li

const isPalindromeArry3 = function (arry) {
    let node = arry;
    let arr = [];
    while (node) {
        console.log(node.val);
        arr.push(node.val);
        node = node.next;
    }

    let reversedArr = arr.reverse();
    let index = 0;
    for (let i = reversedArr.length - 1; i >= 0; i--) {
        if (reversedArr[i] !== arr[index]) return false;
        index++;
    }

    return true;
};

// ========  4 - way ========
// Eng to'g'ri va optimal yechim yechilish yo'li
var isPalindromeArry4 = function (head) {
    let slow = head,
        fast = head,
        prev,
        temp;
    while (fast && fast.next) (slow = slow.next), (fast = fast.next.next);
    (prev = slow), (slow = slow.next), (prev.next = null);
    while (slow)
        (temp = slow.next), (slow.next = prev), (prev = slow), (slow = temp);
    (fast = head), (slow = prev);
    while (slow)
        if (fast.val !== slow.val) return false;
        else (fast = fast.next), (slow = slow.next);
    return true;
};

const arry = [1, 4, 8, 4, 1];
const arry1 = [1, 4, 6, 7, 9, 8, 4, 1];

isPalindromeArry1(arry);
isPalindromeArry2(arry);
isPalindromeArry3(arry);
isPalindromeArry4(arry);

isPalindromeArry1(arry1);
isPalindromeArry2(arry1);
isPalindromeArry3(arry1);
isPalindromeArry4(arry1);

console.log(isPalindromeArry1(arry));
console.log(isPalindromeArry2(arry));
console.log(isPalindromeArry3(arry));
console.log(isPalindromeArry4(arry));

console.log(isPalindromeArry1(arry1));
console.log(isPalindromeArry2(arry1));
console.log(isPalindromeArry3(arry1));
console.log(isPalindromeArry4(arry1));
