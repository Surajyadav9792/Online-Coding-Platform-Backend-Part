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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>

using namespace std;

// Write your code inside this function
vector<int> twoSum(vector<int>& nums, int target) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line1, line2;
    if (getline(cin, line1) && getline(cin, line2)) {
        stringstream ss(line1);
        vector<int> nums;
        int val;
        while (ss >> val) nums.push_back(val);
        int target = stoi(line2);
        vector<int> result = twoSum(nums, target);
        if (result.size() == 2) {
            cout << result[0] << " " << result[1] << "\\n";
        }
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int[] twoSum(int[] nums, int target) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            int[] nums = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                nums[i] = Integer.parseInt(parts[i]);
            }
            int target = Integer.parseInt(sc.nextLine().trim());
            int[] result = twoSum(nums, target);
            if (result != null && result.length == 2) {
                System.out.println(result[0] + " " + result[1]);
            }
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function twoSum(nums, target) {
  // Return an array of two indices [index1, index2]
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
if (lines.length >= 2) {
  const nums = lines[0].trim().split(/\\\\s+/).map(Number);
  const target = Number(lines[1]);
  const result = twoSum(nums, target);
  if (result) {
    console.log(result.join(' '));
  }
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>
#include <algorithm>

using namespace std;

// Write your code inside this function
int maxProfit(vector<int>& prices) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line;
    if (getline(cin, line)) {
        stringstream ss(line);
        vector<int> prices;
        int val;
        while (ss >> val) prices.push_back(val);
        cout << maxProfit(prices) << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int maxProfit(int[] prices) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            int[] prices = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                prices[i] = Integer.parseInt(parts[i]);
            }
            System.out.println(maxProfit(prices));
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function maxProfit(prices) {
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
  const prices = input.split(/\\\\s+/).map(Number);
  console.log(maxProfit(prices));
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>

using namespace std;

// Write your code inside this function
bool containsDuplicate(vector<int>& nums) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line;
    if (getline(cin, line)) {
        stringstream ss(line);
        vector<int> nums;
        int val;
        while (ss >> val) nums.push_back(val);
        cout << (containsDuplicate(nums) ? "true" : "false") << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static boolean containsDuplicate(int[] nums) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            int[] nums = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                nums[i] = Integer.parseInt(parts[i]);
            }
            System.out.println(containsDuplicate(nums) ? "true" : "false");
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function containsDuplicate(nums) {
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
  const nums = input.split(/\\\\s+/).map(Number);
  console.log(containsDuplicate(nums) ? "true" : "false");
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <string>

using namespace std;

// Write your code inside this function
bool isAnagram(string s, string t) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string s, t;
    if (cin >> s >> t) {
        cout << (isAnagram(s, t) ? "true" : "false") << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static boolean isAnagram(String s, String t) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String s = sc.next();
            String t = sc.next();
            System.out.println(isAnagram(s, t) ? "true" : "false");
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function isAnagram(s, t) {
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
  const parts = input.split(/\\\\s+/);
  if (parts.length >= 2) {
    console.log(isAnagram(parts[0], parts[1]) ? "true" : "false");
  }
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>

using namespace std;

// Write your code inside this function
vector<int> productExceptSelf(vector<int>& nums) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line;
    if (getline(cin, line)) {
        stringstream ss(line);
        vector<int> nums;
        int val;
        while (ss >> val) nums.push_back(val);
        vector<int> result = productExceptSelf(nums);
        for (size_t i = 0; i < result.size(); ++i) {
            cout << result[i] << (i + 1 == result.size() ? "" : " ");
        }
        cout << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int[] productExceptSelf(int[] nums) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            int[] nums = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                nums[i] = Integer.parseInt(parts[i]);
            }
            int[] result = productExceptSelf(nums);
            if (result != null) {
                for (int i = 0; i < result.length; i++) {
                    System.out.print(result[i] + (i + 1 == result.length ? "" : " "));
                }
                System.out.println();
            }
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function productExceptSelf(nums) {
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
  const nums = input.split(/\\\\s+/).map(Number);
  const result = productExceptSelf(nums);
  if (result) {
    console.log(result.join(' '));
  }
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>
#include <algorithm>

using namespace std;

// Write your code inside this function
int maxSubArray(vector<int>& nums) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line;
    if (getline(cin, line)) {
        stringstream ss(line);
        vector<int> nums;
        int val;
        while (ss >> val) nums.push_back(val);
        cout << maxSubArray(nums) << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int maxSubArray(int[] nums) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            int[] nums = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                nums[i] = Integer.parseInt(parts[i]);
            }
            System.out.println(maxSubArray(nums));
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function maxSubArray(nums) {
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
  const nums = input.split(/\\\\s+/).map(Number);
  console.log(maxSubArray(nums));
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>
#include <algorithm>

using namespace std;

// Write your code inside this function
vector<vector<int>> threeSum(vector<int>& nums) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line;
    if (getline(cin, line)) {
        stringstream ss(line);
        vector<int> nums;
        int val;
        while (ss >> val) nums.push_back(val);
        vector<vector<int>> triplets = threeSum(nums);
        for (const auto& t : triplets) {
            if (t.size() == 3) {
                cout << t[0] << " " << t[1] << " " << t[2] << "\\n";
            }
        }
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static List<List<Integer>> threeSum(int[] nums) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            int[] nums = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                nums[i] = Integer.parseInt(parts[i]);
            }
            List<List<Integer>> triplets = threeSum(nums);
            if (triplets != null) {
                for (List<Integer> t : triplets) {
                    if (t.size() == 3) {
                        System.out.println(t.get(0) + " " + t.get(1) + " " + t.get(2));
                    }
                } 
            }
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function threeSum(nums) {
  // Return an array of arrays representing the unique triplets
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
  const nums = input.split(/\\\\s+/).map(Number);
  const triplets = threeSum(nums);
  if (triplets) {
    console.log(triplets.map(t => t.join(' ')).join('\\n'));
  }
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>
#include <algorithm>

using namespace std;

// Write your code inside this function
int maxArea(vector<int>& height) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line;
    if (getline(cin, line)) {
        stringstream ss(line);
        vector<int> height;
        int val;
        while (ss >> val) height.push_back(val);
        cout << maxArea(height) << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int maxArea(int[] height) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            int[] height = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                height[i] = Integer.parseInt(parts[i]);
            }
            System.out.println(maxArea(height));
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function maxArea(height) {
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
  const height = input.split(/\\\\s+/).map(Number);
  console.log(maxArea(height));
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>
#include <algorithm>

using namespace std;

// Write your code inside this function
vector<int> reverseList(vector<int>& arr) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line;
    if (getline(cin, line)) {
        stringstream ss(line);
        vector<int> arr;
        int val;
        while (ss >> val) arr.push_back(val);
        vector<int> result = reverseList(arr);
        for (size_t i = 0; i < result.size(); ++i) {
            cout << result[i] << (i + 1 == result.size() ? "" : " ");
        }
        cout << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static List<String> reverseList(List<String> list) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            List<String> list = new ArrayList<>(Arrays.asList(parts));
            List<String> result = reverseList(list);
            if (result != null) {
                System.out.println(String.join(" ", result));
            }
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function reverseList(arr) {
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
  const arr = input.split(/\\\\s+/);
  const result = reverseList(arr);
  if (result) {
    console.log(result.join(' '));
  }
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>
#include <algorithm>

using namespace std;

// Write your code inside this function
vector<int> mergeSortedLists(vector<int>& arr1, vector<int>& arr2) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string l1, l2;
    getline(cin, l1);
    getline(cin, l2);
    stringstream ss1(l1), ss2(l2);
    vector<int> arr1, arr2;
    int val;
    while (ss1 >> val) arr1.push_back(val);
    while (ss2 >> val) arr2.push_back(val);
    vector<int> result = mergeSortedLists(arr1, arr2);
    for (size_t i = 0; i < result.size(); ++i) {
        cout << result[i] << (i + 1 == result.size() ? "" : " ");
    }
    cout << "\\n";
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static List<Integer> mergeSortedLists(List<Integer> list1, List<Integer> list2) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> list1 = new ArrayList<>();
        List<Integer> list2 = new ArrayList<>();
        if (sc.hasNextLine()) {
            String line = sc.nextLine().trim();
            if (!line.isEmpty()) {
                for (String s : line.split("\\\\s+")) {
                    list1.add(Integer.parseInt(s));
                }
            }
        }
        if (sc.hasNextLine()) {
            String line = sc.nextLine().trim();
            if (!line.isEmpty()) {
                for (String s : line.split("\\\\s+")) {
                    list2.add(Integer.parseInt(s));
                }
            }
        }
        List<Integer> result = mergeSortedLists(list1, list2);
        if (result != null) {
            for (int i = 0; i < result.size(); i++) {
                System.out.print(result.get(i) + (i + 1 == result.size() ? "" : " "));
            }
            System.out.println();
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function mergeSortedLists(arr1, arr2) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
const arr1 = lines[0] ? lines[0].trim().split(/\\\\s+/).map(Number) : [];
const arr2 = lines[1] ? lines[1].trim().split(/\\\\s+/).map(Number) : [];
const result = mergeSortedLists(arr1, arr2);
if (result) {
  console.log(result.join(' '));
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

// Write your code inside this function
bool hasCycle(ListNode *head) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line1, line2;
    if (getline(cin, line1) && getline(cin, line2)) {
        stringstream ss(line1);
        vector<ListNode*> nodes;
        int val;
        while (ss >> val) {
            nodes.push_back(new ListNode(val));
        }
        int pos = stoi(line2);
        ListNode* head = nodes.empty() ? NULL : nodes[0];
        for (size_t i = 0; i < nodes.size(); ++i) {
            if (i + 1 < nodes.size()) {
                nodes[i]->next = nodes[i+1];
            }
        }
        if (pos >= 0 && pos < nodes.size() && !nodes.empty()) {
            nodes.back()->next = nodes[pos];
        }
        cout << (hasCycle(head) ? "true" : "false") << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
}

public class Main {
    // Write your code inside this function
    public static boolean hasCycle(ListNode head) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String line1 = sc.nextLine().trim();
            if (line1.isEmpty()) {
                System.out.println("false");
                return;
            }
            String[] parts = line1.split("\\\\s+");
            List<ListNode> nodes = new ArrayList<>();
            for (String p : parts) {
                nodes.add(new ListNode(Integer.parseInt(p)));
            }
            int pos = -1;
            if (sc.hasNextLine()) {
                pos = Integer.parseInt(sc.nextLine().trim());
            }
            ListNode head = nodes.get(0);
            for (int i = 0; i < nodes.size(); i++) {
                if (i + 1 < nodes.size()) {
                    nodes.get(i).next = nodes.get(i + 1);
                }
            }
            if (pos >= 0 && pos < nodes.size()) {
                nodes.get(nodes.size() - 1).next = nodes.get(pos);
            }
            System.out.println(hasCycle(head) ? "true" : "false");
        }
    }
}` },
      { language: "javascript", initialCode: `class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Write your code inside this function
function hasCycle(head) {
  
}

// --- IO Boilerplate - Do not modify ---
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
const arr = lines[0] ? lines[0].trim().split(/\\\\s+/).map(Number) : [];
const pos = lines[1] ? Number(lines[1]) : -1;
let head = null, tail = null;
const nodes = [];
for (let val of arr) {
  const node = new ListNode(val);
  nodes.push(node);
  if (!head) head = node;
  if (tail) tail.next = node;
  tail = node;
}
if (pos >= 0 && pos < nodes.length) {
  tail.next = nodes[pos];
}
console.log(hasCycle(head) ? "true" : "false");` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

// Write your code inside this function
ListNode* removeNthFromEnd(ListNode* head, int n) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line1, line2;
    if (getline(cin, line1) && getline(cin, line2)) {
        stringstream ss(line1);
        vector<int> vals;
        int val;
        while (ss >> val) vals.push_back(val);
        int n = stoi(line2);
        ListNode* head = NULL;
        ListNode* tail = NULL;
        for (int v : vals) {
            ListNode* node = new ListNode(v);
            if (!head) head = node;
            if (tail) tail->next = node;
            tail = node;
        }
        ListNode* newHead = removeNthFromEnd(head, n);
        ListNode* curr = newHead;
        bool first = true;
        while (curr) {
            if (!first) cout << " ";
            cout << curr->val;
            first = false;
            curr = curr->next;
        }
        cout << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
}

public class Main {
    // Write your code inside this function
    public static ListNode removeNthFromEnd(ListNode head, int n) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String line1 = sc.nextLine().trim();
            if (line1.isEmpty()) return;
            String[] parts = line1.split("\\\\s+");
            int n = Integer.parseInt(sc.nextLine().trim());
            ListNode head = null, tail = null;
            for (String p : parts) {
                ListNode node = new ListNode(Integer.parseInt(p));
                if (head == null) head = node;
                if (tail != null) tail.next = node;
                tail = node;
            }
            ListNode newHead = removeNthFromEnd(head, n);
            ListNode curr = newHead;
            List<String> res = new ArrayList<>();
            while (curr != null) {
                res.add(String.valueOf(curr.val));
                curr = curr.next;
            }
            System.out.println(String.join(" ", res));
        }
    }
}` },
      { language: "javascript", initialCode: `class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Write your code inside this function
function removeNthFromEnd(head, n) {
  
}

// --- IO Boilerplate - Do not modify ---
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
if (lines.length >= 2) {
  const arr = lines[0].trim().split(/\\\\s+/).map(Number);
  const n = Number(lines[1]);
  let head = null, tail = null;
  for (let val of arr) {
    const node = new ListNode(val);
    if (!head) head = node;
    if (tail) tail.next = node;
    tail = node;
  }
  let newHead = removeNthFromEnd(head, n);
  const result = [];
  while (newHead) {
    result.push(newHead.val);
    newHead = newHead.next;
  }
  console.log(result.join(' '));
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>

using namespace std;

// Write your code inside this function
int numIslands(vector<vector<char>>& grid) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    int m, n;
    if (cin >> m >> n) {
        vector<vector<char>> grid(m, vector<char>(n));
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                cin >> grid[i][j];
            }
        }
        cout << numIslands(grid) << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int numIslands(char[][] grid) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            char[][] grid = new char[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    grid[i][j] = sc.next().charAt(0);
                }
            }
            System.out.println(numIslands(grid));
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function numIslands(grid) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
if (lines.length > 0 && lines[0].trim()) {
  const [m, n] = lines[0].split(' ').map(Number);
  const grid = [];
  for (let i = 1; i <= m; i++) {
    if (lines[i]) {
      grid.push(lines[i].trim().split(' '));
    }
  }
  console.log(numIslands(grid));
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>

using namespace std;

// Write your code inside this function
bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    int numCourses, e;
    if (cin >> numCourses >> e) {
        vector<vector<int>> prerequisites(e, vector<int>(2));
        for (int i = 0; i < e; ++i) {
            cin >> prerequisites[i][0] >> prerequisites[i][1];
        }
        cout << (canFinish(numCourses, prerequisites) ? "true" : "false") << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int numCourses = sc.nextInt();
            int e = sc.nextInt();
            int[][] prerequisites = new int[e][2];
            for (int i = 0; i < e; i++) {
                prerequisites[i][0] = sc.nextInt();
                prerequisites[i][1] = sc.nextInt();
            }
            System.out.println(canFinish(numCourses, prerequisites) ? "true" : "false");
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function canFinish(numCourses, prerequisites) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
if (lines.length > 0 && lines[0].trim()) {
  const [numCourses, e] = lines[0].split(' ').map(Number);
  const prerequisites = [];
  for (let i = 1; i <= e; i++) {
    if (lines[i]) {
      prerequisites.push(lines[i].trim().split(' ').map(Number));
    }
  }
  console.log(canFinish(numCourses, prerequisites) ? "true" : "false");
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>

using namespace std;

// Write your code inside this function
vector<int> bfsOfGraph(int V, vector<vector<int>>& adj) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    int v, e;
    if (cin >> v >> e) {
        vector<vector<int>> adj(v);
        for (int i = 0; i < e; ++i) {
            int u, w;
            cin >> u >> w;
            adj[u].push_back(w);
        }
        vector<int> result = bfsOfGraph(v, adj);
        for (size_t i = 0; i < result.size(); ++i) {
            cout << result[i] << (i + 1 == result.size() ? "" : " ");
        }
        cout << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static List<Integer> bfsOfGraph(int V, List<List<Integer>> adj) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int v = sc.nextInt();
            int e = sc.nextInt();
            List<List<Integer>> adj = new ArrayList<>();
            for (int i = 0; i < v; i++) {
                adj.add(new ArrayList<>());
            }
            for (int i = 0; i < e; i++) {
                int u = sc.nextInt();
                int w = sc.nextInt();
                adj.get(u).add(w);
            }
            List<Integer> result = bfsOfGraph(v, adj);
            if (result != null) {
                List<String> resStr = new ArrayList<>();
                for (int val : result) {
                    resStr.add(String.valueOf(val));
                }
                System.out.println(String.join(" ", resStr));
            }
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function bfsOfGraph(V, adj) {
  // Return an array containing the BFS traversal starting from 0
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
if (lines.length > 0 && lines[0].trim()) {
  const [v, e] = lines[0].split(' ').map(Number);
  const adj = Array.from({length: v}, () => []);
  for (let i = 1; i <= e; i++) {
    if (lines[i]) {
      const [u, w] = lines[i].trim().split(' ').map(Number);
      adj[u].push(w);
    }
  }
  const result = bfsOfGraph(v, adj);
  if (result) {
    console.log(result.join(' '));
  }
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>

using namespace std;

// Write your code inside this function
vector<int> dfsOfGraph(int V, vector<vector<int>>& adj) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    int v, e;
    if (cin >> v >> e) {
        vector<vector<int>> adj(v);
        for (int i = 0; i < e; ++i) {
            int u, w;
            cin >> u >> w;
            adj[u].push_back(w);
        }
        vector<int> result = dfsOfGraph(v, adj);
        for (size_t i = 0; i < result.size(); ++i) {
            cout << result[i] << (i + 1 == result.size() ? "" : " ");
        }
        cout << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static List<Integer> dfsOfGraph(int V, List<List<Integer>> adj) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int v = sc.nextInt();
            int e = sc.nextInt();
            List<List<Integer>> adj = new ArrayList<>();
            for (int i = 0; i < v; i++) {
                adj.add(new ArrayList<>());
            }
            for (int i = 0; i < e; i++) {
                int u = sc.nextInt();
                int w = sc.nextInt();
                adj.get(u).add(w);
            }
            List<Integer> result = dfsOfGraph(v, adj);
            if (result != null) {
                List<String> resStr = new ArrayList<>();
                for (int val : result) {
                    resStr.add(String.valueOf(val));
                }
                System.out.println(String.join(" ", resStr));
            }
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function dfsOfGraph(V, adj) {
  // Return an array containing the DFS traversal starting from 0
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
if (lines.length > 0 && lines[0].trim()) {
  const [v, e] = lines[0].split(' ').map(Number);
  const adj = Array.from({length: v}, () => []);
  for (let i = 1; i <= e; i++) {
    if (lines[i]) {
      const [u, w] = lines[i].trim().split(' ').map(Number);
      adj[u].push(w);
    }
  }
  const result = dfsOfGraph(v, adj);
  if (result) {
    console.log(result.join(' '));
  }
}` }
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
      { language: "cpp", initialCode: `#include <iostream>

using namespace std;

// Write your code inside this function
int climbStairs(int n) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    int n;
    if (cin >> n) {
        cout << climbStairs(n) << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int climbStairs(int n) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            System.out.println(climbStairs(sc.nextInt()));
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function climbStairs(n) {
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
  console.log(climbStairs(Number(input)));
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>
#include <algorithm>

using namespace std;

// Write your code inside this function
int rob(vector<int>& nums) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line;
    if (getline(cin, line)) {
        stringstream ss(line);
        vector<int> nums;
        int val;
        while (ss >> val) nums.push_back(val);
        cout << rob(nums) << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int rob(int[] nums) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            int[] nums = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                nums[i] = Integer.parseInt(parts[i]);
            }
            System.out.println(rob(nums));
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function rob(nums) {
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
  const nums = input.split(/\\\\s+/).map(Number);
  console.log(rob(nums));
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
#include <string>
#include <algorithm>

using namespace std;

// Write your code inside this function
int coinChange(vector<int>& coins, int amount) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string l1, l2;
    if (getline(cin, l1) && getline(cin, l2)) {
        stringstream ss(l1);
        vector<int> coins;
        int val;
        while (ss >> val) coins.push_back(val);
        int amount = stoi(l2);
        cout << coinChange(coins, amount) << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int coinChange(int[] coins, int amount) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            int[] coins = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                coins[i] = Integer.parseInt(parts[i]);
            }
            int amount = Integer.parseInt(sc.nextLine().trim());
            System.out.println(coinChange(coins, amount));
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function coinChange(coins, amount) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
if (lines.length >= 2) {
  const coins = lines[0].trim().split(' ').map(Number);
  const amount = Number(lines[1].trim());
  console.log(coinChange(coins, amount));
}` }
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
      { language: "cpp", initialCode: `#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

// Write your code inside this function
int longestCommonSubsequence(string text1, string text2) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string s1, s2;
    if (cin >> s1 >> s2) {
        cout << longestCommonSubsequence(s1, s2) << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int longestCommonSubsequence(String text1, String text2) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String s1 = sc.next();
            String s2 = sc.next();
            System.out.println(longestCommonSubsequence(s1, s2));
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function longestCommonSubsequence(text1, text2) {
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
  const parts = input.split(' ');
  if (parts.length >= 2) {
    console.log(longestCommonSubsequence(parts[0], parts[1]));
  }
}` }
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
