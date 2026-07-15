const main = require('./config/db');
const Problem = require('./model/problem');

const arraySolutionsMap = {
  "Sum of Two Numbers": [
    { language: "cpp", completeCode: `// Time Complexity: O(1), Space Complexity: O(1)\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    if (cin >> a >> b) {\n        cout << (a + b) << "\\n";\n    }\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(1), Space Complexity: O(1)\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int a = sc.nextInt();\n            int b = sc.nextInt();\n            System.out.println(a + b);\n        }\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(1), Space Complexity: O(1)\nconst fs = require('fs');\nconst [a, b] = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nconsole.log(a + b);` }
  ],
  "Find Maximum": [
    { language: "cpp", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\n#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int val, maxVal = -1e9;\n    while (cin >> val) {\n        maxVal = max(maxVal, val);\n    }\n    cout << maxVal << "\\n";\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int maxVal = Integer.MIN_VALUE;\n        while (sc.hasNextInt()) {\n            maxVal = Math.max(maxVal, sc.nextInt());\n        }\n        System.out.println(maxVal);\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nconsole.log(Math.max(...nums));` }
  ],
  "Square of a Number": [
    { language: "cpp", completeCode: `// Time Complexity: O(1), Space Complexity: O(1)\n#include <iostream>\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) cout << (n * n) << "\\n";\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(1), Space Complexity: O(1)\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLong()) {\n            long n = sc.nextLong();\n            System.out.println(n * n);\n        }\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(1), Space Complexity: O(1)\nconst fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nconsole.log(n * n);` }
  ],
  "Fibonacci Number": [
    { language: "cpp", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    if (cin >> n) {\n        if (n <= 1) { cout << n << "\\n"; return 0; }\n        long long a = 0, b = 1;\n        for (int i = 2; i <= n; ++i) {\n            long long c = a + b; a = b; b = c;\n        }\n        cout << b << "\\n";\n    }\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            if (n <= 1) { System.out.println(n); return; }\n            long a = 0, b = 1;\n            for (int i = 2; i <= n; i++) {\n                long c = a + b; a = b; b = c;\n            }\n            System.out.println(b);\n        }\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nif (n <= 1) { console.log(n); process.exit(0); }\nlet a = 0, b = 1;\nfor(let i = 2; i <= n; i++) { const c = a + b; a = b; b = c; }\nconsole.log(b);` }
  ],
  "Reverse a String": [
    { language: "cpp", completeCode: `// Time Complexity: O(N), Space Complexity: O(N)\n#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s;\n    if (cin >> s) {\n        reverse(s.begin(), s.end());\n        cout << s << "\\n";\n    }\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(N)\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNext()) {\n            String s = sc.next();\n            System.out.println(new StringBuilder(s).reverse().toString());\n        }\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(N)\nconst fs = require('fs');\nconst s = fs.readFileSync(0, 'utf-8').trim();\nconsole.log(s.split('').reverse().join(''));` }
  ],
  "Find Factorial": [
    { language: "cpp", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    if (cin >> n) {\n        long long fact = 1;\n        for (int i = 1; i <= n; ++i) fact *= i;\n        cout << fact << "\\n";\n    }\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            long fact = 1;\n            for (int i = 1; i <= n; i++) fact *= i;\n            System.out.println(fact);\n        }\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nlet fact = 1;\nfor(let i = 1; i <= n; i++) fact *= i;\nconsole.log(fact);` }
  ],
  "Fizz Buzz": [
    { language: "cpp", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    if (cin >> n) {\n        for (int i = 1; i <= n; ++i) {\n            if (i % 15 == 0) cout << "FizzBuzz";\n            else if (i % 3 == 0) cout << "Fizz";\n            else if (i % 5 == 0) cout << "Buzz";\n            else cout << i;\n            cout << (i == n ? "" : " ");\n        }\n        cout << "\\n";\n    }\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            StringBuilder sb = new StringBuilder();\n            for (int i = 1; i <= n; i++) {\n                if (i % 15 == 0) sb.append("FizzBuzz");\n                else if (i % 3 == 0) sb.append("Fizz");\n                else if (i % 5 == 0) sb.append("Buzz");\n                else sb.append(i);\n                if (i < n) sb.append(" ");\n            }\n            System.out.println(sb.toString());\n        }\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nconst res = [];\nfor(let i = 1; i <= n; i++){\n  if(i % 15 === 0) res.push("FizzBuzz");\n  else if(i % 3 === 0) res.push("Fizz");\n  else if(i % 5 === 0) res.push("Buzz");\n  else res.push(i);\n}\nconsole.log(res.join(' '));` }
  ],
  "Palindrome Check": [
    { language: "cpp", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\n#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (cin >> s) {\n        int l = 0, r = s.length() - 1;\n        bool isPal = true;\n        while (l < r) {\n            if (s[l++] != s[r--]) { isPal = false; break; }\n        }\n        cout << (isPal ? "true" : "false") << "\\n";\n    }\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNext()) {\n            String s = sc.next();\n            String rev = new StringBuilder(s).reverse().toString();\n            System.out.println(s.equals(rev) ? "true" : "false");\n        }\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst s = fs.readFileSync(0, 'utf-8').trim();\nconst rev = s.split('').reverse().join('');\nconsole.log(s === rev ? "true" : "false");` }
  ],
  "Sum of Array Elements": [
    { language: "cpp", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\n#include <iostream>\nusing namespace std;\n\nint main() {\n    long long sum = 0, num;\n    while (cin >> num) sum += num;\n    cout << sum << "\\n";\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        long sum = 0;\n        while (sc.hasNextLong()) sum += sc.nextLong();\n        System.out.println(sum);\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nconsole.log(nums.reduce((a, b) => a + b, 0));` }
  ],
  "Prime Number Check": [
    { language: "cpp", completeCode: `// Time Complexity: O(sqrt(N)), Space Complexity: O(1)\n#include <iostream>\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        if (n <= 1) { cout << "false\\n"; return 0; }\n        bool isPrime = true;\n        for (long long i = 2; i * i <= n; ++i) {\n            if (n % i == 0) { isPrime = false; break; }\n        }\n        cout << (isPrime ? "true" : "false") << "\\n";\n    }\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(sqrt(N)), Space Complexity: O(1)\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLong()) {\n            long n = sc.nextLong();\n            if (n <= 1) { System.out.println("false"); return; }\n            boolean isPrime = true;\n            for (long i = 2; i * i <= n; i++) {\n                if (n % i == 0) { isPrime = false; break; }\n            }\n            System.out.println(isPrime ? "true" : "false");\n        }\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(sqrt(N)), Space Complexity: O(1)\nconst fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nif (n <= 1) { console.log("false"); process.exit(0); }\nlet isPrime = true;\nfor (let i = 2; i * i <= n; i++) {\n    if (n % i === 0) { isPrime = false; break; }\n}\nconsole.log(isPrime ? "true" : "false");` }
  ],
  "Even or Odd": [
    { language: "cpp", completeCode: `// Time Complexity: O(1), Space Complexity: O(1)\n#include <iostream>\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) cout << (n % 2 == 0 ? "Even" : "Odd") << "\\n";\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(1), Space Complexity: O(1)\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLong()) {\n            long n = sc.nextLong();\n            System.out.println(n % 2 == 0 ? "Even" : "Odd");\n        }\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(1), Space Complexity: O(1)\nconst fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nconsole.log(n % 2 === 0 ? "Even" : "Odd");` }
  ],
  "Count Vowels": [
    { language: "cpp", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\n#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (cin >> s) {\n        int cnt = 0;\n        for (char c : s) {\n            char lower = tolower(c);\n            if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') cnt++;\n        }\n        cout << cnt << "\\n";\n    }\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNext()) {\n            String s = sc.next();\n            int cnt = 0;\n            for (char c : s.toLowerCase().toCharArray()) {\n                if ("aeiou".indexOf(c) != -1) cnt++;\n            }\n            System.out.println(cnt);\n        }\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst s = fs.readFileSync(0, 'utf-8').trim();\nconst matches = s.match(/[aeiou]/gi);\nconsole.log(matches ? matches.length : 0);` }
  ],
  "Find Duplicate Elements": [
    { language: "cpp", completeCode: `// Time Complexity: O(N) [Unordered Set / Hash Map], Space Complexity: O(N)\n#include <iostream>\n#include <vector>\n#include <unordered_set>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        int num;\n        unordered_set<int> seen, dups;\n        vector<int> res;\n        while (ss >> num) {\n            if (seen.count(num) && !dups.count(num)) {\n                dups.insert(num);\n                res.push_back(num);\n            }\n            seen.insert(num);\n        }\n        for (size_t i = 0; i < res.size(); ++i) {\n            cout << res[i] << (i + 1 == res.size() ? "" : " ");\n        }\n        cout << "\\n";\n    }\n    return 0;\n}` },
    { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(N)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            Set<String> seen = new HashSet<>();\n            Set<String> dups = new LinkedHashSet<>();\n            for (String p : parts) {\n                if (!seen.add(p)) dups.add(p);\n            }\n            System.out.println(String.join(" ", dups));\n        }\n    }\n}` },
    { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(N)\nconst fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/);\nconst seen = new Set(), dups = new Set();\nfor(let num of nums) {\n  if(seen.has(num)) dups.add(num);\n  else seen.add(num);\n}\nconsole.log(Array.from(dups).join(' '));` }
  ]
};

async function updateAll() {
  try {
    await main();
    console.log("Connected to MongoDB database.");

    for (const [title, solutions] of Object.entries(arraySolutionsMap)) {
      await Problem.findOneAndUpdate(
        { title },
        { referenceSolution: solutions }
      );
      console.log(`Updated 3-language solutions for Array problem: "${title}"`);
    }

    console.log("ALL Array problems successfully updated with C++, Java, and JavaScript solutions!");
    process.exit(0);
  } catch (err) {
    console.error("Error updating array solutions:", err);
    process.exit(1);
  }
}

updateAll();
