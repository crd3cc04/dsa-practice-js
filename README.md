# 📘 DSA Practice — JavaScript  
A growing collection of Data Structures & Algorithms solutions written in clean, test‑driven JavaScript. Each problem includes:

- ✨ Clear, readable implementation  
- 🧪 Jest test coverage  
- 📂 Organized folder structure  
- 📸 Screenshot‑ready formatting  
- 📊 Big‑O analysis  
- 🧠 Problem explanation  

---

# 🧩 Problem: Two Sum  
**Goal:** Given an array of integers and a target value, return the indices of the two numbers that add up to the target.

### ✔ Example  
Input: `[2, 7, 11, 15]`, target: `9`  
Output: `[0, 1]`

---

# 🛠️ Solution (JavaScript)

```js
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return null;
}

module.exports = twoSum;
```

---

# 📊 Time & Space Complexity

| Operation | Complexity |
|----------|------------|
| Time     | **O(n)** — one pass through the array |
| Space    | **O(n)** — hash map stores visited values |

---

# 🧪 Running Tests  
This project uses **Jest** for unit testing.

Run all tests:

```bash
npm test
```

Expected output:

```
PASS  tests/arrays/two_sum.test.js
```

---

# 📁 Project Structure

```
dsa-practice-js/
│
├── src/
│   └── arrays/
│       └── two_sum.js
│
├── tests/
│   └── arrays/
│       └── two_sum.test.js
│
└── package.json
```

---

# 🚀 Roadmap  
This repo will grow to include:

- 🔢 Arrays  
- 🧮 Hash Maps  
- 🔤 Strings  
- 🔗 Linked Lists  
- 📚 Stacks & Queues  
- 🌲 Trees  
- 🕸️ Graphs  
- 🔍 Searching & Sorting  
- 🌀 Recursion & Backtracking  

Each with clean code, tests, and documentation.

---

# 🙌 About This Repo  
This project is part of my ongoing journey to sharpen my problem‑solving skills, build a strong engineering portfolio, and prepare for technical interviews with clean, well‑tested JavaScript solutions.

