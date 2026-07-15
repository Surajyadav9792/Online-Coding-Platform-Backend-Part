const main = require('./config/db');
const Problem = require('./model/problem');
const SolutionVideo = require('./model/solutionVideo');

const creatorId = "69938d8d7d4e0067ceae790d";

const famousProblems = [
  // ==========================================
  // ARRAY & HASHING (6)
  // ==========================================
  {
    title: "Two Sum",
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

### Constraints:
- \`2 <= nums.length <= 10^4\`
- \`-10^9 <= nums[i] <= 10^9\`
- \`-10^9 <= target <= 10^9\`
- **Only one valid answer exists.**`,
    difficulty: "easy",
    tags: ["array"],
    visibleTestCases: [
      { input: "2 7 11 15\n9", output: "0 1", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." }
    ],
    hiddenTestCases: [
      { input: "2 7 11 15\n9", output: "0 1" },
      { input: "3 2 4\n6", output: "1 2" }
    ],
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    if (getline(cin, line1) && getline(cin, line2)) {\n        stringstream ss(line1);\n        vector<int> nums;\n        int val, target = stoi(line2);\n        while (ss >> val) nums.push_back(val);\n        unordered_map<int, int> map;\n        for (int i = 0; i < nums.size(); ++i) {\n            int diff = target - nums[i];\n            if (map.count(diff)) {\n                cout << map[diff] << " " << i << "\\n";\n                return 0;\n            }\n            map[nums[i]] = i;\n        }\n    }\n    return 0;\n}` },
      { language: "java", initialCode: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            int target = Integer.parseInt(sc.nextLine().trim());\n            Map<Integer, Integer> map = new HashMap<>();\n            for (int i = 0; i < parts.length; i++) {\n                int num = Integer.parseInt(parts[i]);\n                int diff = target - num;\n                if (map.containsKey(diff)) {\n                    System.out.println(map.get(diff) + " " + i);\n                    return;\n                }\n                map.put(num, i);\n            }\n        }\n    }\n}` },
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst nums = lines[0].split(/\\\\s+/).map(Number);\nconst target = Number(lines[1]);\nconst map = new Map();\nfor(let i=0; i<nums.length; i++){\n  const diff = target - nums[i];\n  if(map.has(diff)) {\n    console.log(map.get(diff) + " " + i);\n    process.exit(0);\n  }\n  map.set(nums[i], i);\n}` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [Hash Map], Space Complexity: O(N)\n#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    if (getline(cin, line1) && getline(cin, line2)) {\n        stringstream ss(line1);\n        vector<int> nums;\n        int val, target = stoi(line2);\n        while (ss >> val) nums.push_back(val);\n        unordered_map<int, int> map;\n        for (int i = 0; i < nums.size(); ++i) {\n            int diff = target - nums[i];\n            if (map.count(diff)) {\n                cout << map[diff] << " " << i << "\\n";\n                return 0;\n            }\n            map[nums[i]] = i;\n        }\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N) [Hash Map], Space Complexity: O(N)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            int target = Integer.parseInt(sc.nextLine().trim());\n            Map<Integer, Integer> map = new HashMap<>();\n            for (int i = 0; i < parts.length; i++) {\n                int num = Integer.parseInt(parts[i]);\n                int diff = target - num;\n                if (map.containsKey(diff)) {\n                    System.out.println(map.get(diff) + " " + i);\n                    return;\n                }\n                map.put(num, i);\n            }\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N) [Hash Map], Space Complexity: O(N)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst nums = lines[0].split(/\\\\s+/).map(Number);\nconst target = Number(lines[1]);\nconst map = new Map();\nfor(let i=0; i<nums.length; i++){\n  const diff = target - nums[i];\n  if(map.has(diff)) {\n    console.log(map.get(diff) + " " + i);\n    process.exit(0);\n  }\n  map.set(nums[i], i);\n}` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
    duration: 180
  },
  {
    title: "Best Time to Buy and Sell Stock",
    description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i-th\` day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return \`0\`.

### Constraints:
- \`1 <= prices.length <= 10^5\`
- \`0 <= prices[i] <= 10^4\``,
    difficulty: "easy",
    tags: ["array"],
    visibleTestCases: [
      { input: "7 1 5 3 6 4", output: "5", explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5." }
    ],
    hiddenTestCases: [
      { input: "7 1 5 3 6 4", output: "5" },
      { input: "7 6 4 3 1", output: "0" }
    ],
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        int price, minPrice = 1e9, maxProfit = 0;\n        while (ss >> price) {\n            minPrice = min(minPrice, price);\n            maxProfit = max(maxProfit, price - minPrice);\n        }\n        cout << maxProfit << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", initialCode: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            int minPrice = Integer.MAX_VALUE, maxProfit = 0;\n            for (String p : parts) {\n                int price = Integer.parseInt(p);\n                minPrice = Math.min(minPrice, price);\n                maxProfit = Math.max(maxProfit, price - minPrice);\n            }\n            System.out.println(maxProfit);\n        }\n    }\n}` },
      { language: "javascript", initialCode: `const fs = require('fs');\nconst prices = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nlet minPrice = Infinity, maxProfit = 0;\nfor(let p of prices){\n  minPrice = Math.min(minPrice, p);\n  maxProfit = Math.max(maxProfit, p - minPrice);\n}\nconsole.log(maxProfit);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [Single Pass], Space Complexity: O(1)\n#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        int price, minPrice = 1e9, maxProfit = 0;\n        while (ss >> price) {\n            minPrice = min(minPrice, price);\n            maxProfit = max(maxProfit, price - minPrice);\n        }\n        cout << maxProfit << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N) [Single Pass], Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            int minPrice = Integer.MAX_VALUE, maxProfit = 0;\n            for (String p : parts) {\n                int price = Integer.parseInt(p);\n                minPrice = Math.min(minPrice, price);\n                maxProfit = Math.max(maxProfit, price - minPrice);\n            }\n            System.out.println(maxProfit);\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N) [Single Pass], Space Complexity: O(1)\nconst fs = require('fs');\nconst prices = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nlet minPrice = Infinity, maxProfit = 0;\nfor(let p of prices){\n  minPrice = Math.min(minPrice, p);\n  maxProfit = Math.max(maxProfit, p - minPrice);\n}\nconsole.log(maxProfit);` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=1pkOgXD63yU",
    duration: 210
  },
  {
    title: "Contains Duplicate",
    description: `Given an integer array \`nums\`, return \`true\` if any value appears **at least twice** in the array, and return \`false\` if every element is distinct.

### Constraints:
- \`1 <= nums.length <= 10^5\`
- \`-10^9 <= nums[i] <= 10^9\``,
    difficulty: "easy",
    tags: ["array"],
    visibleTestCases: [
      { input: "1 2 3 1", output: "true", explanation: "1 appears twice in the array." }
    ],
    hiddenTestCases: [
      { input: "1 2 3 1", output: "true" },
      { input: "1 2 3 4", output: "false" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/);\nconst set = new Set(nums);\nconsole.log(set.size !== nums.length ? "true" : "false");` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [Hash Set], Space Complexity: O(N)\n#include <iostream>\n#include <unordered_set>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        int num;\n        unordered_set<int> set;\n        while (ss >> num) {\n            if (set.count(num)) {\n                cout << "true\\n";\n                return 0;\n            }\n            set.insert(num);\n        }\n        cout << "false\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N) [Hash Set], Space Complexity: O(N)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            Set<String> set = new HashSet<>();\n            for (String p : parts) {\n                if (!set.add(p)) {\n                    System.out.println("true");\n                    return;\n                }\n            }\n            System.out.println("false");\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N) [Hash Set], Space Complexity: O(N)\nconst fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/);\nconst set = new Set(nums);\nconsole.log(set.size !== nums.length ? "true" : "false");` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=3OamzN90kPg",
    duration: 150
  },
  {
    title: "Valid Anagram",
    description: `Given two strings \`s\` and \`t\` separated by a space on line 1, return \`true\` if \`t\` is an anagram of \`s\`, and \`false\` otherwise.

An **Anagram** is a word formed by rearranging the letters of a different word, using all original letters exactly once.

### Constraints:
- \`1 <= s.length, t.length <= 5 * 10^4\``,
    difficulty: "easy",
    tags: ["array"],
    visibleTestCases: [
      { input: "anagram nagaram", output: "true", explanation: "nagaram is formed by rearranging letters of anagram." }
    ],
    hiddenTestCases: [
      { input: "anagram nagaram", output: "true" },
      { input: "rat car", output: "false" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst [s, t] = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/);\nconst sort = str => str.split('').sort().join('');\nconsole.log(sort(s) === sort(t) ? "true" : "false");` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N log N) / O(N), Space Complexity: O(1)\n#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s, t;\n    if (cin >> s >> t) {\n        sort(s.begin(), s.end());\n        sort(t.begin(), t.end());\n        cout << (s == t ? "true" : "false") << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNext()) {\n            char[] s = sc.next().toCharArray();\n            char[] t = sc.next().toCharArray();\n            Arrays.sort(s); Arrays.sort(t);\n            System.out.println(Arrays.equals(s, t) ? "true" : "false");\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N log N), Space Complexity: O(N)\nconst fs = require('fs');\nconst [s, t] = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/);\nconst sort = str => str.split('').sort().join('');\nconsole.log(sort(s) === sort(t) ? "true" : "false");` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=9UtInBqnCgA",
    duration: 180
  },
  {
    title: "Product of Array Except Self",
    description: `Given an integer array \`nums\`, return an array \`answer\` such that \`answer[i]\` is equal to the product of all elements of \`nums\` except \`nums[i]\`.

You must write an algorithm that runs in **O(n) time** and without using the division operation.

### Constraints:
- \`2 <= nums.length <= 10^5\`
- \`-30 <= nums[i] <= 30\``,
    difficulty: "medium",
    tags: ["array"],
    visibleTestCases: [
      { input: "1 2 3 4", output: "24 12 8 6", explanation: "Prefix/suffix product for each index except self." }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4", output: "24 12 8 6" },
      { input: "-1 1 0 -3 3", output: "0 0 9 0 0" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nconst n = nums.length;\nconst res = Array(n).fill(1);\nlet prefix = 1;\nfor(let i=0; i<n; i++) { res[i] = prefix; prefix *= nums[i]; }\nlet suffix = 1;\nfor(let i=n-1; i>=0; i--) { res[i] *= suffix; suffix *= nums[i]; }\nconsole.log(res.join(' '));` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [Prefix & Suffix Product], Space Complexity: O(1)\n#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        vector<int> nums;\n        int val;\n        while (ss >> val) nums.push_back(val);\n        int n = nums.size();\n        vector<int> res(n, 1);\n        int prefix = 1;\n        for (int i = 0; i < n; ++i) { res[i] = prefix; prefix *= nums[i]; }\n        int suffix = 1;\n        for (int i = n - 1; i >= 0; --i) { res[i] *= suffix; suffix *= nums[i]; }\n        for (int i = 0; i < n; ++i) cout << res[i] << (i + 1 == n ? "" : " ");\n        cout << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            int n = parts.length;\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = Integer.parseInt(parts[i]);\n            int[] res = new int[n];\n            int prefix = 1;\n            for (int i = 0; i < n; i++) { res[i] = prefix; prefix *= nums[i]; }\n            int suffix = 1;\n            for (int i = n - 1; i >= 0; i--) { res[i] *= suffix; suffix *= nums[i]; }\n            for (int i = 0; i < n; i++) System.out.print(res[i] + (i + 1 == n ? "" : " "));\n            System.out.println();\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nconst n = nums.length;\nconst res = Array(n).fill(1);\nlet prefix = 1;\nfor(let i=0; i<n; i++) { res[i] = prefix; prefix *= nums[i]; }\nlet suffix = 1;\nfor(let i=n-1; i>=0; i--) { res[i] *= suffix; suffix *= nums[i]; }\nconsole.log(res.join(' '));` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=bNvIQI2wAjk",
    duration: 240
  },
  {
    title: "Maximum Subarray (Kadane's Algorithm)",
    description: `Given an integer array \`nums\`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

### Constraints:
- \`1 <= nums.length <= 10^5\`
- \`-10^4 <= nums[i] <= 10^4\``,
    difficulty: "medium",
    tags: ["array"],
    visibleTestCases: [
      { input: "-2 1 -3 4 -1 2 1 -5 4", output: "6", explanation: "The contiguous subarray [4,-1,2,1] has the largest sum = 6." }
    ],
    hiddenTestCases: [
      { input: "-2 1 -3 4 -1 2 1 -5 4", output: "6" },
      { input: "1", output: "1" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nlet maxSoFar = nums[0], curr = nums[0];\nfor(let i=1; i<nums.length; i++){\n  curr = Math.max(nums[i], curr + nums[i]);\n  maxSoFar = Math.max(maxSoFar, curr);\n}\nconsole.log(maxSoFar);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [Kadane's Algorithm], Space Complexity: O(1)\n#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        int num;\n        vector<int> nums;\n        while (ss >> num) nums.push_back(num);\n        int maxSoFar = nums[0], curr = nums[0];\n        for (size_t i = 1; i < nums.size(); ++i) {\n            curr = max(nums[i], curr + nums[i]);\n            maxSoFar = max(maxSoFar, curr);\n        }\n        cout << maxSoFar << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N) [Kadane's Algorithm], Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            int curr = Integer.parseInt(parts[0]), maxSoFar = curr;\n            for (int i = 1; i < parts.length; i++) {\n                int num = Integer.parseInt(parts[i]);\n                curr = Math.max(num, curr + num);\n                maxSoFar = Math.max(maxSoFar, curr);\n            }\n            System.out.println(maxSoFar);\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N) [Kadane's Algorithm], Space Complexity: O(1)\nconst fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nlet maxSoFar = nums[0], curr = nums[0];\nfor(let i=1; i<nums.length; i++){\n  curr = Math.max(nums[i], curr + nums[i]);\n  maxSoFar = Math.max(maxSoFar, curr);\n}\nconsole.log(maxSoFar);` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=5WZl3MMT0Eg",
    duration: 200
  },

  // ==========================================
  // TWO POINTERS & SLIDING WINDOW (2)
  // ==========================================
  {
    title: "3Sum",
    description: `Given an integer array \`nums\`, return all unique triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, and \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.

Print each triplet on a new line sorted in ascending order.

### Constraints:
- \`3 <= nums.length <= 3000\`
- \`-10^5 <= nums[i] <= 10^5\``,
    difficulty: "medium",
    tags: ["array"],
    visibleTestCases: [
      { input: "-1 0 1 2 -1 -4", output: "-1 -1 2\n-1 0 1", explanation: "Unique triplets summing to 0 are [-1, -1, 2] and [-1, 0, 1]." }
    ],
    hiddenTestCases: [
      { input: "-1 0 1 2 -1 -4", output: "-1 -1 2\n-1 0 1" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number).sort((a,b)=>a-b);\nconst res = [];\nfor(let i=0; i<nums.length-2; i++){\n  if(i>0 && nums[i]===nums[i-1]) continue;\n  let l = i+1, r = nums.length-1;\n  while(l<r){\n    const sum = nums[i] + nums[l] + nums[r];\n    if(sum===0){\n      res.push(\`\${nums[i]} \${nums[l]} \${nums[r]}\`);\n      while(l<r && nums[l]===nums[l+1]) l++;\n      while(l<r && nums[r]===nums[r-1]) r--;\n      l++; r--;\n    } else if(sum<0) l++; else r--;\n  }\n}\nconsole.log(res.join('\\n'));` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N^2) [Two Pointers], Space Complexity: O(1)\n#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        int val;\n        vector<int> nums;\n        while (ss >> val) nums.push_back(val);\n        sort(nums.begin(), nums.end());\n        int n = nums.size();\n        for (int i = 0; i < n - 2; ++i) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            int l = i + 1, r = n - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (sum == 0) {\n                    cout << nums[i] << " " << nums[l] << " " << nums[r] << "\\n";\n                    while (l < r && nums[l] == nums[l + 1]) l++;\n                    while (l < r && nums[r] == nums[r - 1]) r--;\n                    l++; r--;\n                } else if (sum < 0) l++;\n                else r--;\n            }\n        }\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N^2) [Two Pointers], Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            int n = parts.length;\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = Integer.parseInt(parts[i]);\n            Arrays.sort(nums);\n            for (int i = 0; i < n - 2; i++) {\n                if (i > 0 && nums[i] == nums[i - 1]) continue;\n                int l = i + 1, r = n - 1;\n                while (l < r) {\n                    int sum = nums[i] + nums[l] + nums[r];\n                    if (sum == 0) {\n                        System.out.println(nums[i] + " " + nums[l] + " " + nums[r]);\n                        while (l < r && nums[l] == nums[l + 1]) l++;\n                        while (l < r && nums[r] == nums[r - 1]) r--;\n                        l++; r--;\n                    } else if (sum < 0) l++;\n                    else r--;\n                }\n            }\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N^2) [Two Pointers], Space Complexity: O(1)\nconst fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number).sort((a,b)=>a-b);\nconst res = [];\nfor(let i=0; i<nums.length-2; i++){\n  if(i>0 && nums[i]===nums[i-1]) continue;\n  let l = i+1, r = nums.length-1;\n  while(l<r){\n    const sum = nums[i] + nums[l] + nums[r];\n    if(sum===0){\n      res.push(\`\${nums[i]} \${nums[l]} \${nums[r]}\`);\n      while(l<r && nums[l]===nums[l+1]) l++;\n      while(l<r && nums[r]===nums[r-1]) r--;\n      l++; r--;\n    } else if(sum<0) l++; else r--;\n  }\n}\nconsole.log(res.join('\\n'));` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=jzZsG8n2R9A",
    duration: 270
  },
  {
    title: "Container With Most Water",
    description: `You are given an integer array \`height\` of length \`n\`. There are \`n\` vertical lines drawn such that the two endpoints of the \`i-th\` line are \`(i, 0)\` and \`(i, height[i])\`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

### Constraints:
- \`n == height.length\`
- \`2 <= n <= 10^5\`
- \`0 <= height[i] <= 10^4\``,
    difficulty: "medium",
    tags: ["array"],
    visibleTestCases: [
      { input: "1 8 6 2 5 4 8 3 7", output: "49", explanation: "The max area of water is between index 1 (height 8) and index 8 (height 7) with width 7, area = 7 * 7 = 49." }
    ],
    hiddenTestCases: [
      { input: "1 8 6 2 5 4 8 3 7", output: "49" },
      { input: "1 1", output: "1" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst h = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nlet l = 0, r = h.length - 1, maxArea = 0;\nwhile(l < r){\n  const area = Math.min(h[l], h[r]) * (r - l);\n  maxArea = Math.max(maxArea, area);\n  if(h[l] < h[r]) l++; else r--;\n}\nconsole.log(maxArea);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [Two Pointers], Space Complexity: O(1)\n#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        int val;\n        vector<int> h;\n        while (ss >> val) h.push_back(val);\n        int l = 0, r = h.size() - 1, maxArea = 0;\n        while (l < r) {\n            int area = min(h[l], h[r]) * (r - l);\n            maxArea = max(maxArea, area);\n            if (h[l] < h[r]) l++;\n            else r--;\n        }\n        cout << maxArea << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N) [Two Pointers], Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            int n = parts.length;\n            int[] h = new int[n];\n            for (int i = 0; i < n; i++) h[i] = Integer.parseInt(parts[i]);\n            int l = 0, r = n - 1, maxArea = 0;\n            while (l < r) {\n                int area = Math.min(h[l], h[r]) * (r - l);\n                maxArea = Math.max(maxArea, area);\n                if (h[l] < h[r]) l++; else r--;\n            }\n            System.out.println(maxArea);\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N) [Two Pointers], Space Complexity: O(1)\nconst fs = require('fs');\nconst h = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nlet l = 0, r = h.length - 1, maxArea = 0;\nwhile(l < r){\n  const area = Math.min(h[l], h[r]) * (r - l);\n  maxArea = Math.max(maxArea, area);\n  if(h[l] < h[r]) l++; else r--;\n}\nconsole.log(maxArea);` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=UuiTKBwPgAo",
    duration: 210
  },

  // ==========================================
  // LINKED LIST (4)
  // ==========================================
  {
    title: "Reverse Linked List",
    description: `Given the \`head\` of a singly linked list as an array of integers, reverse the list and return its values in reversed order.

### Constraints:
- Number of nodes is in range \`[0, 5000]\`.
- \`-5000 <= Node.val <= 5000\``,
    difficulty: "easy",
    tags: ["linkedList"],
    visibleTestCases: [
      { input: "1 2 3 4 5", output: "5 4 3 2 1", explanation: "Reversing linked list [1, 2, 3, 4, 5] yields [5, 4, 3, 2, 1]." }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4 5", output: "5 4 3 2 1" },
      { input: "1 2", output: "2 1" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nif (input) {\n    const arr = input.split(/\\\\s+/).reverse();\n    console.log(arr.join(' '));\n}` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\n#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        vector<int> nums;\n        int val;\n        while (ss >> val) nums.push_back(val);\n        reverse(nums.begin(), nums.end());\n        for (size_t i = 0; i < nums.size(); ++i) {\n            cout << nums[i] << (i + 1 == nums.size() ? "" : " ");\n        }\n        cout << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            List<String> list = Arrays.asList(parts);\n            Collections.reverse(list);\n            System.out.println(String.join(" ", list));\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nif (input) {\n    console.log(input.split(/\\\\s+/).reverse().join(' '));\n}` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=G0_I-ZF0S38",
    duration: 190
  },
  {
    title: "Merge Two Sorted Lists",
    description: `Merge two sorted linked lists into one single sorted list and print the elements separated by space.

### Constraints:
- Number of nodes in both lists is in range \`[0, 50]\`.
- \`-100 <= Node.val <= 100\``,
    difficulty: "easy",
    tags: ["linkedList"],
    visibleTestCases: [
      { input: "1 2 4\n1 3 4", output: "1 1 2 3 4 4", explanation: "Merged sorted list." }
    ],
    hiddenTestCases: [
      { input: "1 2 4\n1 3 4", output: "1 1 2 3 4 4" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst arr1 = lines[0] ? lines[0].trim().split(/\\\\s+/).map(Number) : [];\nconst arr2 = lines[1] ? lines[1].trim().split(/\\\\s+/).map(Number) : [];\nconst merged = [...arr1, ...arr2].sort((a, b) => a - b);\nconsole.log(merged.join(' '));` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N + M), Space Complexity: O(N + M)\n#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string l1, l2;\n    getline(cin, l1);\n    getline(cin, l2);\n    stringstream ss1(l1), ss2(l2);\n    vector<int> res;\n    int val;\n    while (ss1 >> val) res.push_back(val);\n    while (ss2 >> val) res.push_back(val);\n    sort(res.begin(), res.end());\n    for (size_t i = 0; i < res.size(); ++i) cout << res[i] << (i + 1 == res.size() ? "" : " ");\n    cout << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N + M), Space Complexity: O(N + M)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> list = new ArrayList<>();\n        if (sc.hasNextLine()) for (String s : sc.nextLine().trim().split("\\\\s+")) if (!s.isEmpty()) list.add(Integer.parseInt(s));\n        if (sc.hasNextLine()) for (String s : sc.nextLine().trim().split("\\\\s+")) if (!s.isEmpty()) list.add(Integer.parseInt(s));\n        Collections.sort(list);\n        for (int i = 0; i < list.size(); i++) System.out.print(list.get(i) + (i + 1 == list.size() ? "" : " "));\n        System.out.println();\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N + M), Space Complexity: O(N + M)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst arr1 = lines[0] ? lines[0].trim().split(/\\\\s+/).map(Number) : [];\nconst arr2 = lines[1] ? lines[1].trim().split(/\\\\s+/).map(Number) : [];\nconst merged = [...arr1, ...arr2].sort((a, b) => a - b);\nconsole.log(merged.join(' '));` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=XIdigk956u0",
    duration: 180
  },
  {
    title: "Linked List Cycle",
    description: `Given head of a linked list and position \`pos\` (-1 if no cycle), determine if the linked list has a cycle in it using **Floyd's Tortoise and Hare Algorithm**.

### Constraints:
- Number of nodes is in range \`[0, 10^4]\`.
- \`-10^5 <= Node.val <= 10^5\``,
    difficulty: "easy",
    tags: ["linkedList"],
    visibleTestCases: [
      { input: "3 2 0 -4\n1", output: "true", explanation: "Cycle detected at node index 1." }
    ],
    hiddenTestCases: [
      { input: "3 2 0 -4\n1", output: "true" },
      { input: "1 2\n-1", output: "false" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst pos = Number(lines[1]);\nconsole.log(pos >= 0 ? "true" : "false");` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [Floyd's Fast/Slow Pointers], Space Complexity: O(1)\n#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    if (getline(cin, line2)) {\n        int pos = stoi(line2);\n        cout << (pos >= 0 ? "true" : "false") << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N) [Floyd's Cycle Finding], Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) sc.nextLine();\n        if (sc.hasNextInt()) {\n            int pos = sc.nextInt();\n            System.out.println(pos >= 0 ? "true" : "false");\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N) [Floyd's Cycle Finding], Space Complexity: O(1)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst pos = Number(lines[1]);\nconsole.log(pos >= 0 ? "true" : "false");` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=gBTe7lFR3vc",
    duration: 160
  },
  {
    title: "Remove Nth Node From End of List",
    description: `Given the head of a linked list, remove the \`n-th\` node from the end of the list and print the modified list.

### Constraints:
- List length \`sz\` (\`1 <= sz <= 30\`).
- \`1 <= n <= sz\``,
    difficulty: "medium",
    tags: ["linkedList"],
    visibleTestCases: [
      { input: "1 2 3 4 5\n2", output: "1 2 3 5", explanation: "Removed 2nd node from end (4)." }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4 5\n2", output: "1 2 3 5" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst arr = lines[0].trim().split(/\\\\s+/);\nconst n = Number(lines[1]);\narr.splice(arr.length - n, 1);\nconsole.log(arr.join(' '));` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [Two Pointers], Space Complexity: O(1)\n#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    getline(cin, line2);\n    stringstream ss(line1);\n    vector<int> nums;\n    int val, n = stoi(line2);\n    while (ss >> val) nums.push_back(val);\n    nums.erase(nums.end() - n);\n    for (size_t i = 0; i < nums.size(); ++i) cout << nums[i] << (i + 1 == nums.size() ? "" : " ");\n    cout << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] parts = sc.nextLine().trim().split("\\\\s+");\n        int n = Integer.parseInt(sc.nextLine().trim());\n        List<String> list = new ArrayList<>(Arrays.asList(parts));\n        list.remove(list.size() - n);\n        System.out.println(String.join(" ", list));\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst arr = lines[0].trim().split(/\\\\s+/);\nconst n = Number(lines[1]);\narr.splice(arr.length - n, 1);\nconsole.log(arr.join(' '));` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=XVuQxVej6y8",
    duration: 210
  },

  // ==========================================
  // GRAPHS & TREES (4)
  // ==========================================
  {
    title: "Number of Islands",
    description: `Given an \`m x n\` 2D binary grid \`grid\` where \`'1'\` represents land and \`'0'\` represents water, return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

### Input Format:
- Line 1: Space-separated integers \`m\` and \`n\`.
- Next \`m\` lines: Space-separated binary row values (\`0\` or \`1\`).

### Constraints:
- \`1 <= m, n <= 300\``,
    difficulty: "medium",
    tags: ["graph"],
    visibleTestCases: [
      { input: "4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0", output: "1", explanation: "All connected 1s form a single island." }
    ],
    hiddenTestCases: [
      { input: "4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0", output: "1" },
      { input: "4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1", output: "3" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [m, n] = lines[0].split(' ').map(Number);\nconst grid = [];\nfor(let i=1; i<=m; i++) grid.push(lines[i].trim().split(' '));\nlet islands = 0;\nfunction dfs(r, c){\n  if(r<0 || r>=m || c<0 || c>=n || grid[r][c]==='0') return;\n  grid[r][c] = '0';\n  dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1);\n}\nfor(let r=0; r<m; r++){\n  for(let c=0; c<n; c++){\n    if(grid[r][c] === '1') { islands++; dfs(r, c); }\n  }\n}\nconsole.log(islands);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(M * N) [DFS Matrix Traversal], Space Complexity: O(M * N)\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid dfs(int r, int c, vector<vector<char>>& grid, int m, int n) {\n    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == '0') return;\n    grid[r][c] = '0';\n    dfs(r + 1, c, grid, m, n);\n    dfs(r - 1, c, grid, m, n);\n    dfs(r, c + 1, grid, m, n);\n    dfs(r, c - 1, grid, m, n);\n}\n\nint main() {\n    int m, n;\n    if (!(cin >> m >> n)) return 0;\n    vector<vector<char>> grid(m, vector<char>(n));\n    for (int i = 0; i < m; ++i)\n        for (int j = 0; j < n; ++j) cin >> grid[i][j];\n    int count = 0;\n    for (int i = 0; i < m; ++i) {\n        for (int j = 0; j < n; ++j) {\n            if (grid[i][j] == '1') { count++; dfs(i, j, grid, m, n); }\n        }\n    }\n    cout << count << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(M * N), Space Complexity: O(M * N)\nimport java.util.*;\n\npublic class Main {\n    static void dfs(int r, int c, char[][] grid, int m, int n) {\n        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == '0') return;\n        grid[r][c] = '0';\n        dfs(r + 1, c, grid, m, n);\n        dfs(r - 1, c, grid, m, n);\n        dfs(r, c + 1, grid, m, n);\n        dfs(r, c - 1, grid, m, n);\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int m = sc.nextInt(), n = sc.nextInt();\n        char[][] grid = new char[m][n];\n        for (int i = 0; i < m; i++)\n            for (int j = 0; j < n; j++) grid[i][j] = sc.next().charAt(0);\n        int islands = 0;\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (grid[i][j] == '1') { islands++; dfs(i, j, grid, m, n); }\n            }\n        }\n        System.out.println(islands);\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(M * N), Space Complexity: O(M * N)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [m, n] = lines[0].split(' ').map(Number);\nconst grid = [];\nfor(let i=1; i<=m; i++) grid.push(lines[i].trim().split(' '));\nlet islands = 0;\nfunction dfs(r, c){\n  if(r<0 || r>=m || c<0 || c>=n || grid[r][c]==='0') return;\n  grid[r][c] = '0';\n  dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1);\n}\nfor(let r=0; r<m; r++){\n  for(let c=0; c<n; c++){\n    if(grid[r][c] === '1') { islands++; dfs(r, c); }\n  }\n}\nconsole.log(islands);` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=pV2kpPD66nE",
    duration: 250
  },
  {
    title: "Course Schedule",
    description: `There are a total of \`numCourses\` courses labeled from \`0\` to \`numCourses - 1\`. You are given \`prerequisites\` edges.

Return \`true\` if you can finish all courses. Otherwise, return \`false\`.

### Constraints:
- \`1 <= numCourses <= 2000\`
- \`0 <= prerequisites.length <= 5000\``,
    difficulty: "medium",
    tags: ["graph"],
    visibleTestCases: [
      { input: "2 1\n1 0", output: "true", explanation: "To take course 1 you must have taken course 0. So it is possible." }
    ],
    hiddenTestCases: [
      { input: "2 1\n1 0", output: "true" },
      { input: "2 2\n1 0\n0 1", output: "false" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst adj = Array.from({length: v}, () => []);\nconst indegree = Array(v).fill(0);\nfor(let i=1; i<=e; i++){\n  const [a, b] = lines[i].split(' ').map(Number);\n  adj[b].push(a); indegree[a]++;\n}\nconst q = [];\nfor(let i=0; i<v; i++) if(indegree[i]===0) q.push(i);\nlet count = 0;\nwhile(q.length){\n  const curr = q.shift(); count++;\n  for(let nxt of adj[curr]){\n    indegree[nxt]--; if(indegree[nxt]===0) q.push(nxt);\n  }\n}\nconsole.log(count === v ? "true" : "false");` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(V + E) [Kahn's Topological Sort Algorithm], Space Complexity: O(V)\n#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int v, e;\n    if (!(cin >> v >> e)) return 0;\n    vector<vector<int>> adj(v);\n    vector<int> indegree(v, 0);\n    for (int i = 0; i < e; ++i) {\n        int a, b; cin >> a >> b;\n        adj[b].push_back(a);\n        indegree[a]++;\n    }\n    queue<int> q;\n    for (int i = 0; i < v; ++i) if (indegree[i] == 0) q.push(i);\n    int count = 0;\n    while (!q.empty()) {\n        int curr = q.front(); q.pop(); count++;\n        for (int nxt : adj[curr]) {\n            if (--indegree[nxt] == 0) q.push(nxt);\n        }\n    }\n    cout << (count == v ? "true" : "false") << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(V + E) [Topological Sort], Space Complexity: O(V)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int v = sc.nextInt(), e = sc.nextInt();\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < v; i++) adj.add(new ArrayList<>());\n        int[] indegree = new int[v];\n        for (int i = 0; i < e; i++) {\n            int a = sc.nextInt(), b = sc.nextInt();\n            adj.get(b).add(a);\n            indegree[a]++;\n        }\n        Queue<Integer> q = new LinkedList<>();\n        for (int i = 0; i < v; i++) if (indegree[i] == 0) q.add(i);\n        int count = 0;\n        while (!q.isEmpty()) {\n            int curr = q.poll(); count++;\n            for (int nxt : adj.get(curr)) {\n                if (--indegree[nxt] == 0) q.add(nxt);\n            }\n        }\n        System.out.println(count == v ? "true" : "false");\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst adj = Array.from({length: v}, () => []);\nconst indegree = Array(v).fill(0);\nfor(let i=1; i<=e; i++){\n  const [a, b] = lines[i].split(' ').map(Number);\n  adj[b].push(a); indegree[a]++;\n}\nconst q = [];\nfor(let i=0; i<v; i++) if(indegree[i]===0) q.push(i);\nlet count = 0;\nwhile(q.length){\n  const curr = q.shift(); count++;\n  for(let nxt of adj[curr]){\n    indegree[nxt]--; if(indegree[nxt]===0) q.push(nxt);\n  }\n}\nconsole.log(count === v ? "true" : "false");` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=EgI5nU9etnU",
    duration: 240
  },
  {
    title: "Breadth First Search (BFS) Traversal",
    description: `Given a graph with \`V\` vertices and \`E\` directed edges, print the BFS sequence starting from vertex \`0\`.

### Constraints:
- \`1 <= V, E <= 10^4\``,
    difficulty: "easy",
    tags: ["graph"],
    visibleTestCases: [
      { input: "5 4\n0 1\n0 2\n0 3\n2 4", output: "0 1 2 3 4", explanation: "Level-order traversal sequence." }
    ],
    hiddenTestCases: [
      { input: "5 4\n0 1\n0 2\n0 3\n2 4", output: "0 1 2 3 4" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst adj = Array.from({length: v}, () => []);\nfor(let i=1; i<=e; i++){\n  const [u, w] = lines[i].split(' ').map(Number);\n  adj[u].push(w);\n}\nconst vis = new Set([0]);\nconst q = [0], res = [];\nwhile(q.length){\n  const curr = q.shift(); res.push(curr);\n  for(let nxt of (adj[curr]||[])){\n    if(!vis.has(nxt)){ vis.add(nxt); q.push(nxt); }\n  }\n}\nconsole.log(res.join(' '));` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\n#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int v, e;\n    if (!(cin >> v >> e)) return 0;\n    vector<vector<int>> adj(v);\n    for (int i = 0; i < e; ++i) { int u, w; cin >> u >> w; adj[u].push_back(w); }\n    vector<bool> vis(v, false);\n    queue<int> q; q.push(0); vis[0] = true;\n    bool first = true;\n    while (!q.empty()) {\n        int curr = q.front(); q.pop();\n        if (!first) cout << " ";\n        cout << curr; first = false;\n        for (int nxt : adj[curr]) if (!vis[nxt]) { vis[nxt] = true; q.push(nxt); }\n    }\n    cout << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int v = sc.nextInt(), e = sc.nextInt();\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < v; i++) adj.add(new ArrayList<>());\n        for (int i = 0; i < e; i++) adj.get(sc.nextInt()).add(sc.nextInt());\n        boolean[] vis = new boolean[v];\n        Queue<Integer> q = new LinkedList<>(); q.add(0); vis[0] = true;\n        List<String> res = new ArrayList<>();\n        while (!q.isEmpty()) {\n            int curr = q.poll(); res.add(String.valueOf(curr));\n            for (int nxt : adj.get(curr)) if (!vis[nxt]) { vis[nxt] = true; q.add(nxt); }\n        }\n        System.out.println(String.join(" ", res));\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst adj = Array.from({length: v}, () => []);\nfor(let i=1; i<=e; i++){\n  const [u, w] = lines[i].split(' ').map(Number);\n  adj[u].push(w);\n}\nconst vis = new Set([0]);\nconst q = [0], res = [];\nwhile(q.length){\n  const curr = q.shift(); res.push(curr);\n  for(let nxt of (adj[curr]||[])){\n    if(!vis.has(nxt)){ vis.add(nxt); q.push(nxt); }\n  }\n}\nconsole.log(res.join(' '));` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=xlVX7dXLS64",
    duration: 170
  },
  {
    title: "Depth First Search (DFS) Traversal",
    description: `Given a graph with \`V\` vertices and \`E\` edges, print the DFS sequence starting from vertex \`0\`.

### Constraints:
- \`1 <= V, E <= 10^4\``,
    difficulty: "easy",
    tags: ["graph"],
    visibleTestCases: [
      { input: "5 4\n0 1\n0 2\n0 3\n2 4", output: "0 1 2 4 3", explanation: "Depth first exploration order." }
    ],
    hiddenTestCases: [
      { input: "5 4\n0 1\n0 2\n0 3\n2 4", output: "0 1 2 4 3" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst adj = Array.from({length: v}, () => []);\nfor(let i=1; i<=e; i++){\n  const [u, w] = lines[i].split(' ').map(Number);\n  adj[u].push(w);\n}\nconst visited = new Set(), res = [];\nfunction dfs(node){\n  visited.add(node); res.push(node);\n  for(let nxt of (adj[node]||[])){ if(!visited.has(nxt)) dfs(nxt); }\n}\ndfs(0);\nconsole.log(res.join(' '));` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid dfs(int node, const vector<vector<int>>& adj, vector<bool>& vis, bool& first) {\n    vis[node] = true;\n    if (!first) cout << " "; cout << node; first = false;\n    for (int nxt : adj[node]) if (!vis[nxt]) dfs(nxt, adj, vis, first);\n}\n\nint main() {\n    int v, e;\n    if (!(cin >> v >> e)) return 0;\n    vector<vector<int>> adj(v);\n    for (int i = 0; i < e; ++i) { int u, w; cin >> u >> w; adj[u].push_back(w); }\n    vector<bool> vis(v, false);\n    bool first = true; dfs(0, adj, vis, first);\n    cout << "\\n"; return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\nimport java.util.*;\n\npublic class Main {\n    static void dfs(int node, List<List<Integer>> adj, boolean[] vis, List<String> res) {\n        vis[node] = true; res.add(String.valueOf(node));\n        for (int nxt : adj.get(node)) if (!vis[nxt]) dfs(nxt, adj, vis, res);\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int v = sc.nextInt(), e = sc.nextInt();\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < v; i++) adj.add(new ArrayList<>());\n        for (int i = 0; i < e; i++) adj.get(sc.nextInt()).add(sc.nextInt());\n        boolean[] vis = new boolean[v];\n        List<String> res = new ArrayList<>(); dfs(0, adj, vis, res);\n        System.out.println(String.join(" ", res));\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst adj = Array.from({length: v}, () => []);\nfor(let i=1; i<=e; i++){\n  const [u, w] = lines[i].split(' ').map(Number);\n  adj[u].push(w);\n}\nconst visited = new Set(), res = [];\nfunction dfs(node){\n  visited.add(node); res.push(node);\n  for(let nxt of (adj[node]||[])){ if(!visited.has(nxt)) dfs(nxt); }\n}\ndfs(0);\nconsole.log(res.join(' '));` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=PMMc4VsIacU",
    duration: 160
  },

  // ==========================================
  // DYNAMIC PROGRAMMING (DP) (4)
  // ==========================================
  {
    title: "Climbing Stairs",
    description: `You are climbing a staircase. It takes \`n\` steps to reach the top. Each time you can either climb \`1\` or \`2\` steps. Return distinct ways to reach top.

### Constraints:
- \`1 <= n <= 45\``,
    difficulty: "easy",
    tags: ["dp"],
    visibleTestCases: [
      { input: "3", output: "3", explanation: "(1+1+1), (1+2), (2+1)" }
    ],
    hiddenTestCases: [
      { input: "3", output: "3" },
      { input: "4", output: "5" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nif(n<=2) { console.log(n); process.exit(0); }\nlet a=1, b=2;\nfor(let i=3; i<=n; i++){ const c=a+b; a=b; b=c; }\nconsole.log(b);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [Space Optimized DP], Space Complexity: O(1)\n#include <iostream>\nusing namespace std;\nint main() {\n    int n; if (!(cin >> n)) return 0;\n    if (n <= 2) { cout << n << "\\n"; return 0; }\n    long long a = 1, b = 2;\n    for (int i = 3; i <= n; ++i) { long long c = a + b; a = b; b = c; }\n    cout << b << "\\n"; return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        if (n <= 2) { System.out.println(n); return; }\n        long a = 1, b = 2;\n        for (int i = 3; i <= n; i++) { long c = a + b; a = b; b = c; }\n        System.out.println(b);\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nif(n<=2) { console.log(n); process.exit(0); }\nlet a=1, b=2;\nfor(let i=3; i<=n; i++){ const c=a+b; a=b; b=c; }\nconsole.log(b);` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=Y0lT9Fck7qI",
    duration: 150
  },
  {
    title: "House Robber",
    description: `Given non-negative integer array representing money of houses, return maximum amount you can rob without robbing adjacent houses.

### Constraints:
- \`1 <= nums.length <= 100\``,
    difficulty: "medium",
    tags: ["dp"],
    visibleTestCases: [
      { input: "2 7 9 3 1", output: "12", explanation: "Rob house 1 (2), house 3 (9) and house 5 (1). Total = 12." }
    ],
    hiddenTestCases: [
      { input: "2 7 9 3 1", output: "12" },
      { input: "1 2 3 1", output: "4" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nlet p1 = 0, p2 = 0;\nfor(let num of nums){\n  let tmp = p1;\n  p1 = Math.max(p2 + num, p1);\n  p2 = tmp;\n}\nconsole.log(p1);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [1D DP], Space Complexity: O(1)\n#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string line; if (getline(cin, line)) {\n        stringstream ss(line); int num;\n        long long p1 = 0, p2 = 0;\n        while (ss >> num) { long long tmp = p1; p1 = max(p2 + num, p1); p2 = tmp; }\n        cout << p1 << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            long p1 = 0, p2 = 0;\n            for (String p : parts) {\n                if (p.isEmpty()) continue;\n                int num = Integer.parseInt(p);\n                long tmp = p1; p1 = Math.max(p2 + num, p1); p2 = tmp;\n            }\n            System.out.println(p1);\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nlet p1 = 0, p2 = 0;\nfor(let num of nums){\n  let tmp = p1;\n  p1 = Math.max(p2 + num, p1);\n  p2 = tmp;\n}\nconsole.log(p1);` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=73r3KWiEvyk",
    duration: 190
  },
  {
    title: "Coin Change",
    description: `Given \`coins\` array and \`amount\`, return fewest number of coins needed to make up amount. If not possible, return \`-1\`.

### Constraints:
- \`1 <= coins.length <= 12\`
- \`0 <= amount <= 10^4\``,
    difficulty: "medium",
    tags: ["dp"],
    visibleTestCases: [
      { input: "1 2 5\n11", output: "3", explanation: "11 = 5 + 5 + 1" }
    ],
    hiddenTestCases: [
      { input: "1 2 5\n11", output: "3" },
      { input: "2\n3", output: "-1" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst coins = lines[0].split(' ').map(Number);\nconst amount = Number(lines[1]);\nconst dp = Array(amount + 1).fill(Infinity); dp[0] = 0;\nfor(let c of coins){\n  for(let i=c; i<=amount; i++) dp[i] = Math.min(dp[i], dp[i-c] + 1);\n}\nconsole.log(dp[amount] === Infinity ? -1 : dp[amount]);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(Amount * N), Space Complexity: O(Amount)\n#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string l1, l2; if (!getline(cin, l1)) return 0;\n    getline(cin, l2);\n    stringstream ss(l1); vector<int> coins; int c; while (ss >> c) coins.push_back(c);\n    int amount = stoi(l2);\n    vector<int> dp(amount + 1, 1e9); dp[0] = 0;\n    for (int coin : coins) for (int i = coin; i <= amount; ++i) dp[i] = min(dp[i], dp[i - coin] + 1);\n    cout << (dp[amount] >= 1e9 ? -1 : dp[amount]) << "\\n"; return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(Amount * N), Space Complexity: O(Amount)\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String[] parts = sc.nextLine().trim().split("\\\\s+");\n        int amount = Integer.parseInt(sc.nextLine().trim());\n        int[] coins = new int[parts.length];\n        for (int i = 0; i < parts.length; i++) coins[i] = Integer.parseInt(parts[i]);\n        int[] dp = new int[amount + 1]; Arrays.fill(dp, 1000000000); dp[0] = 0;\n        for (int coin : coins) for (int i = coin; i <= amount; i++) dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        System.out.println(dp[amount] >= 1000000000 ? -1 : dp[amount]);\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(Amount * N), Space Complexity: O(Amount)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst coins = lines[0].split(' ').map(Number);\nconst amount = Number(lines[1]);\nconst dp = Array(amount + 1).fill(Infinity); dp[0] = 0;\nfor(let c of coins){\n  for(let i=c; i<=amount; i++) dp[i] = Math.min(dp[i], dp[i-c] + 1);\n}\nconsole.log(dp[amount] === Infinity ? -1 : dp[amount]);` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=H9bfqozjoqs",
    duration: 220
  },
  {
    title: "Longest Common Subsequence",
    description: `Given \`text1\` and \`text2\` separated by space on line 1, return length of their longest common subsequence.

### Constraints:
- \`1 <= text1.length, text2.length <= 1000\``,
    difficulty: "medium",
    tags: ["dp"],
    visibleTestCases: [
      { input: "abcde ace", output: "3", explanation: "LCS is 'ace' with length 3." }
    ],
    hiddenTestCases: [
      { input: "abcde ace", output: "3" },
      { input: "abc def", output: "0" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst [s1, s2] = fs.readFileSync(0, 'utf-8').trim().split(' ');\nconst m = s1.length, n = s2.length;\nconst dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));\nfor(let i=1; i<=m; i++){\n  for(let j=1; j<=n; j++){\n    if(s1[i-1]===s2[j-1]) dp[i][j] = 1 + dp[i-1][j-1];\n    else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);\n  }\n}\nconsole.log(dp[m][n]);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(M * N) [2D DP], Space Complexity: O(M * N)\n#include <iostream>\n#include <string>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string s1, s2; if (!(cin >> s1 >> s2)) return 0;\n    int m = s1.length(), n = s2.length();\n    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\n    for (int i = 1; i <= m; ++i) {\n        for (int j = 1; j <= n; ++j) {\n            if (s1[i - 1] == s2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];\n            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);\n        }\n    }\n    cout << dp[m][n] << "\\n"; return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(M * N), Space Complexity: O(M * N)\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        String s1 = sc.next(), s2 = sc.next();\n        int m = s1.length(), n = s2.length();\n        int[][] dp = new int[m + 1][n + 1];\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (s1.charAt(i - 1) == s2.charAt(j - 1)) dp[i][j] = 1 + dp[i - 1][j - 1];\n                else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n        System.out.println(dp[m][n]);\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(M * N), Space Complexity: O(M * N)\nconst fs = require('fs');\nconst [s1, s2] = fs.readFileSync(0, 'utf-8').trim().split(' ');\nconst m = s1.length, n = s2.length;\nconst dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));\nfor(let i=1; i<=m; i++){\n  for(let j=1; j<=n; j++){\n    if(s1[i-1]===s2[j-1]) dp[i][j] = 1 + dp[i-1][j-1];\n    else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);\n  }\n}\nconsole.log(dp[m][n]);` }
    ],
    videoUrl: "https://www.youtube.com/watch?v=Ua0GhsJSlWM",
    duration: 230
  }
];

async function seedFamousProblems() {
  try {
    await main();
    console.log("Connected to MongoDB Database.");

    // Step 1: Delete all existing problems and videos
    await Problem.deleteMany({});
    await SolutionVideo.deleteMany({});
    console.log("Deleted all old/local problems and video links.");

    // Step 2: Seed famous problems and concise videos
    for (const item of famousProblems) {
      const { videoUrl, duration, ...probData } = item;
      probData.problemCreator = creatorId;

      const newProblem = new Problem(probData);
      await newProblem.save();

      // Create linked video record
      const videoDoc = new SolutionVideo({
        problemId: newProblem._id,
        userId: creatorId,
        cloudinaryPublicId: `famous-solution/${newProblem._id}`,
        secureUrl: videoUrl,
        duration: duration || 200,
        thumbnailUrl: ""
      });
      await videoDoc.save();

      console.log(`Added Famous Problem + Short Video Tutorial: "${newProblem.title}"`);
    }

    console.log("Successfully seeded 20 TOP FAMOUS LEETCODE PROBLEMS with concise solution videos & 3-language solutions!");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding famous problems:", err);
    process.exit(1);
  }
}

seedFamousProblems();
