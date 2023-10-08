<div>
  <h1>MCQ SOLVE</h1>
</div>



```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `ReferenceError: greetign is not defined`


<i>WExplanation: In this code, greetign is not declared as a variable, and there is a typo in the variable name. When we run this code, we will get `ReferenceError: greetign is not defined` error.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>In the sum function, you are attempting to add a number (1) and a string ("2") together.
since the original second argument was a string, JavaScript concatenates the values, resulting in "12".So, the correct answer is C: "12".
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>here start with an array called food containing four emoji elements: ["🍕", "🍫", "🥑", "🍔"].

Then create an object info with a property favoriteFood, which is initially set to the first element of the food array: "🍕".

Then modify the info.favoriteFood property by assigning it a new value, "🍝". This change only affects the info object and has no direct impact on the food array.

As a result, when we log the food array, it remains unchanged:


</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>In the code the sayHi function expects a name parameter, but when we call the function, we don't provide any arguments.In JavaScript, if a function expects parameters but don't pass them when calling the function, those parameters will be undefined by default.So the output:Hi there, undefined </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>In the code we are finding the current num is truthy , and if it is, you increment the count variable by 1.The first value of array is 0 which is falsy so the count variable will not increase.But for the other valuse as they are truthy so count variable will increase by 1 for forEach loop.Finally it will produce 3 as output.</i>

</p>
</details>
