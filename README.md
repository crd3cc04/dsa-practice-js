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

# 🧠 How to Use This Repo for Interview Prep

This repository is designed to help you build strong, repeatable problem‑solving habits for technical interviews. Each solution is structured to reinforce the skills that top companies look for.

## 🎯 1. Practice the Problem Before Reading the Code  
Try solving each problem on your own first.  
Use the file structure as a guide:

```
src/
└── arrays/
    └── two_sum.js   ← try to solve before opening
```

This builds confidence and mirrors real interview expectations.

---

## 🧪 2. Run the Tests to Validate Your Thinking  
Each problem includes a Jest test file.  
Run:

```bash
npm test
```

If your solution passes, you’re aligned with the expected behavior.  
If not, the test output will guide your debugging — just like a real engineering workflow.

---

## 🧩 3. Study the Official Solution  
After attempting the problem, open the solution file:

```
src/arrays/two_sum.js
```

Focus on:

- How the logic flows  
- Why certain data structures were chosen  
- How edge cases are handled  
- How clean and readable the code is  

This helps you internalize patterns used in real interviews.

---

## 📊 4. Review the Big‑O Analysis  
Every solution includes time and space complexity.  
During interviews, you’ll be asked to:

- Explain your approach  
- Justify your complexity  
- Compare alternatives  

Use the README’s complexity section to practice articulating your reasoning out loud.

---

## 🗣️ 5. Practice Explaining the Solution Verbally  
Interviewers care more about **how you think** than whether you memorize code.

Try explaining:

- The problem  
- Your approach  
- Why it works  
- The complexity  
- Any trade‑offs  

This builds the communication skills that set candidates apart.

---

## 🔁 6. Repeat the Pattern for Every New Problem  
Each new DSA problem you add should follow the same structure:

- `src/` → your implementation  
- `tests/` → Jest test file  
- README section → explanation + complexity  

This consistency makes your repo look polished and professional — and it trains you to think like an engineer.

---

## 🚀 7. Use This Repo as a Portfolio Asset  
Recruiters love seeing:

- Clean code  
- Tests  
- Documentation  
- Consistent structure  
- Growth over time  

This repo becomes a living showcase of your problem‑solving ability.

---

## 🧘 8. Keep It Fun  
Add emojis, dividers, screenshots, and personality.  
Interview prep doesn’t have to be dry — make it yours.



