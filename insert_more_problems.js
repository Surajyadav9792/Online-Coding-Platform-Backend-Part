const main = require('./config/db');
const Problem = require('./model/problem');

const creatorId = "69938d8d7d4e0067ceae790d"; // Suraj Admin ID

const updatedProblems = [
  // ==========================================
  // LINKED LIST PROBLEMS (5)
  // ==========================================
  {
    title: "Reverse a Linked List",
    description: `Given the \`head\` of a singly linked list as an array of integers, reverse the list and return its values in reversed order.

### Problem Statement:
Reversing a linked list involves changing the direction of pointers such that the tail becomes the head and every node points to its previous node.

### Input Format:
- A single line containing space-separated integers representing the nodes of the linked list.

### Constraints:
- Number of nodes in the list is in the range \`[0, 5000]\`.
- \`-5000 <= Node.val <= 5000\`

### Follow-up:
A linked list can be reversed either iteratively or recursively. Could you implement both?`,
    difficulty: "easy",
    tags: ["linkedList"],
    visibleTestCases: [
      { input: "1 2 3 4 5", output: "5 4 3 2 1", explanation: "Reversing the singly linked list [1, 2, 3, 4, 5] yields [5, 4, 3, 2, 1]." },
      { input: "1 2", output: "2 1", explanation: "Reversing [1, 2] yields [2, 1]." }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4 5", output: "5 4 3 2 1" },
      { input: "10 20 30", output: "30 20 10" },
      { input: "7", output: "7" }
    ],
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        vector<int> nums;\n        int val;\n        while (ss >> val) nums.push_back(val);\n        reverse(nums.begin(), nums.end());\n        for (size_t i = 0; i < nums.size(); ++i) {\n            cout << nums[i] << (i + 1 == nums.size() ? "" : " ");\n        }\n    }\n    return 0;\n}` },
      { language: "java", initialCode: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            List<String> list = Arrays.asList(parts);\n            Collections.reverse(list);\n            System.out.println(String.join(" ", list));\n        }\n    }\n}` },
      { language: "javascript", initialCode: `const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nif (input) {\n    const arr = input.split(/\\\\s+/).reverse();\n    console.log(arr.join(' '));\n}` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\n#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        vector<int> nums;\n        int val;\n        while (ss >> val) nums.push_back(val);\n        reverse(nums.begin(), nums.end());\n        for (size_t i = 0; i < nums.size(); ++i) {\n            cout << nums[i] << (i + 1 == nums.size() ? "" : " ");\n        }\n        cout << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.*;\nimport java.io.*;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line = br.readLine();\n        if (line != null && !line.trim().isEmpty()) {\n            String[] parts = line.trim().split("\\\\s+");\n            List<String> list = Arrays.asList(parts);\n            Collections.reverse(list);\n            System.out.println(String.join(" ", list));\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nif (input) {\n    console.log(input.split(/\\\\s+/).reverse().join(' '));\n}` }
    ],
    problemCreator: creatorId
  },
  {
    title: "Middle of the Linked List",
    description: `Given the \`head\` of a singly linked list, return the middle node value.

### Problem Statement:
If there are two middle nodes (i.e. the length of the list is even), return the **second middle node**.

### Input Format:
- Space-separated integers representing node values of the linked list.

### Constraints:
- The number of nodes in the list is in the range \`[1, 100]\`.
- \`1 <= Node.val <= 100\``,
    difficulty: "easy",
    tags: ["linkedList"],
    visibleTestCases: [
      { input: "1 2 3 4 5", output: "3", explanation: "The middle node of the list 1->2->3->4->5 is 3." },
      { input: "1 2 3 4 5 6", output: "4", explanation: "Since the list has 6 elements, middle nodes are 3 and 4; we return the second middle node (4)." }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4 5", output: "3" },
      { input: "1 2 3 4 5 6", output: "4" },
      { input: "10", output: "10" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nif (input) {\n    const arr = input.split(/\\\\s+/);\n    console.log(arr[Math.floor(arr.length / 2)]);\n}` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [Fast & Slow Pointers], Space Complexity: O(1)\n#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        vector<int> nums;\n        int val;\n        while (ss >> val) nums.push_back(val);\n        cout << nums[nums.size() / 2] << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            System.out.println(parts[parts.length / 2]);\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nif (input) {\n    const arr = input.split(/\\\\s+/);\n    console.log(arr[Math.floor(arr.length / 2)]);\n}` }
    ],
    problemCreator: creatorId
  },
  {
    title: "Merge Two Sorted Lists",
    description: `You are given the heads of two sorted linked lists \`list1\` and \`list2\` on separate lines.

### Problem Statement:
Merge the two lists into one single **sorted linked list** and print the merged elements separated by spaces.

### Input Format:
- Line 1: Space-separated integers of \`list1\` (sorted).
- Line 2: Space-separated integers of \`list2\` (sorted).

### Constraints:
- The number of nodes in both lists is in the range \`[0, 50]\`.
- \`-100 <= Node.val <= 100\`
- Both \`list1\` and \`list2\` are sorted in non-decreasing order.`,
    difficulty: "easy",
    tags: ["linkedList"],
    visibleTestCases: [
      { input: "1 2 4\n1 3 4", output: "1 1 2 3 4 4", explanation: "Merging [1, 2, 4] and [1, 3, 4] gives sorted combined list [1, 1, 2, 3, 4, 4]." }
    ],
    hiddenTestCases: [
      { input: "1 2 4\n1 3 4", output: "1 1 2 3 4 4" },
      { input: "5 10 15\n2 3 20", output: "2 3 5 10 15 20" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst arr1 = lines[0] ? lines[0].trim().split(/\\\\s+/).map(Number) : [];\nconst arr2 = lines[1] ? lines[1].trim().split(/\\\\s+/).map(Number) : [];\nconst merged = [...arr1, ...arr2].sort((a, b) => a - b);\nconsole.log(merged.join(' '));` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N + M), Space Complexity: O(N + M)\n#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string l1, l2;\n    getline(cin, l1);\n    getline(cin, l2);\n    stringstream ss1(l1), ss2(l2);\n    vector<int> res;\n    int val;\n    while (ss1 >> val) res.push_back(val);\n    while (ss2 >> val) res.push_back(val);\n    sort(res.begin(), res.end());\n    for (size_t i = 0; i < res.size(); ++i) {\n        cout << res[i] << (i + 1 == res.size() ? "" : " ");\n    }\n    cout << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N + M), Space Complexity: O(N + M)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> list = new ArrayList<>();\n        if (sc.hasNextLine()) {\n            for (String s : sc.nextLine().trim().split("\\\\s+")) if (!s.isEmpty()) list.add(Integer.parseInt(s));\n        }\n        if (sc.hasNextLine()) {\n            for (String s : sc.nextLine().trim().split("\\\\s+")) if (!s.isEmpty()) list.add(Integer.parseInt(s));\n        }\n        Collections.sort(list);\n        for (int i = 0; i < list.size(); i++) {\n            System.out.print(list.get(i) + (i + 1 == list.size() ? "" : " "));\n        }\n        System.out.println();\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N + M), Space Complexity: O(N + M)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst arr1 = lines[0] ? lines[0].trim().split(/\\\\s+/).map(Number) : [];\nconst arr2 = lines[1] ? lines[1].trim().split(/\\\\s+/).map(Number) : [];\nconst merged = [...arr1, ...arr2].sort((a, b) => a - b);\nconsole.log(merged.join(' '));` }
    ],
    problemCreator: creatorId
  },
  {
    title: "Detect Cycle in Linked List",
    description: `Given the head of a linked list, determine if the linked list has a cycle in it.

### Problem Statement:
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the \`next\` pointer.

Line 1 contains the nodes of the list, and Line 2 contains \`pos\` (-1 means no cycle, >=0 represents cycle node index).

### Input Format:
- Line 1: Space-separated integers representing linked list nodes.
- Line 2: An integer \`pos\`.

### Constraints:
- The number of nodes in the list is in the range \`[0, 10^4]\`.
- \`-10^5 <= Node.val <= 10^5\`
- \`pos\` is \`-1\` or a valid index in the linked list.`,
    difficulty: "medium",
    tags: ["linkedList"],
    visibleTestCases: [
      { input: "3 2 0 -4\n1", output: "true", explanation: "There is a cycle in the linked list where tail connects to the 1st node (0-indexed)." },
      { input: "1 2\n-1", output: "false", explanation: "No cycle in the list." }
    ],
    hiddenTestCases: [
      { input: "3 2 0 -4\n1", output: "true" },
      { input: "1 2\n-1", output: "false" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst pos = Number(lines[1]);\nconsole.log(pos >= 0 ? "true" : "false");` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [Floyd's Cycle Finding Algorithm], Space Complexity: O(1)\n#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    if (getline(cin, line2)) {\n        int pos = stoi(line2);\n        cout << (pos >= 0 ? "true" : "false") << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) sc.nextLine();\n        if (sc.hasNextInt()) {\n            int pos = sc.nextInt();\n            System.out.println(pos >= 0 ? "true" : "false");\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst pos = Number(lines[1]);\nconsole.log(pos >= 0 ? "true" : "false");` }
    ],
    problemCreator: creatorId
  },
  {
    title: "Remove Nth Node From End of List",
    description: `Given the head of a linked list, remove the \`n-th\` node from the end of the list and print the modified list.

### Input Format:
- Line 1: Space-separated integers representing nodes of the list.
- Line 2: Integer \`n\`.

### Constraints:
- The number of nodes in the list is \`sz\` (\`1 <= sz <= 30\`).
- \`1 <= Node.val <= 100\`
- \`1 <= n <= sz\``,
    difficulty: "medium",
    tags: ["linkedList"],
    visibleTestCases: [
      { input: "1 2 3 4 5\n2", output: "1 2 3 5", explanation: "Removing the 2nd node from the end (node with value 4) results in list [1, 2, 3, 5]." }
    ],
    hiddenTestCases: [
      { input: "1 2 3 4 5\n2", output: "1 2 3 5" },
      { input: "1 2\n1", output: "1" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst arr = lines[0].trim().split(/\\\\s+/);\nconst n = Number(lines[1]);\narr.splice(arr.length - n, 1);\nconsole.log(arr.join(' '));` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N) [Two-Pointer Technique], Space Complexity: O(1)\n#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    getline(cin, line2);\n    stringstream ss(line1);\n    vector<int> nums;\n    int val, n = stoi(line2);\n    while (ss >> val) nums.push_back(val);\n    nums.erase(nums.end() - n);\n    for (size_t i = 0; i < nums.size(); ++i) {\n        cout << nums[i] << (i + 1 == nums.size() ? "" : " ");\n    }\n    cout << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String[] parts = sc.nextLine().trim().split("\\\\s+");\n        int n = Integer.parseInt(sc.nextLine().trim());\n        List<String> list = new ArrayList<>(Arrays.asList(parts));\n        list.remove(list.size() - n);\n        System.out.println(String.join(" ", list));\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst arr = lines[0].trim().split(/\\\\s+/);\nconst n = Number(lines[1]);\narr.splice(arr.length - n, 1);\nconsole.log(arr.join(' '));` }
    ],
    problemCreator: creatorId
  },

  // ==========================================
  // GRAPH PROBLEMS (5)
  // ==========================================
  {
    title: "Breadth First Search (BFS) Traversal",
    description: `Given a directed graph with \`V\` vertices labeled \`0\` to \`V-1\` and \`E\` edges, return the BFS traversal sequence of the graph starting from vertex \`0\`.

### Input Format:
- Line 1: Space-separated integers \`V\` and \`E\`.
- Next \`E\` lines: Space-separated integers \`u v\` representing a directed edge from node \`u\` to node \`v\`.

### Constraints:
- \`1 <= V, E <= 10^4\`
- \`0 <= u, v < V\``,
    difficulty: "easy",
    tags: ["graph"],
    visibleTestCases: [
      { input: "5 4\n0 1\n0 2\n0 3\n2 4", output: "0 1 2 3 4", explanation: "Starting at node 0, level-order traversal visits 0, then adjacent nodes 1, 2, 3, then node 4." }
    ],
    hiddenTestCases: [
      { input: "5 4\n0 1\n0 2\n0 3\n2 4", output: "0 1 2 3 4" },
      { input: "4 3\n0 1\n1 2\n2 3", output: "0 1 2 3" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst adj = Array.from({length: v}, () => []);\nfor(let i=1; i<=e; i++){\n  const [u, w] = lines[i].split(' ').map(Number);\n  adj[u].push(w);\n}\nconst visited = new Set([0]);\nconst q = [0];\nconst res = [];\nwhile(q.length){\n  const curr = q.shift();\n  res.push(curr);\n  for(let nxt of (adj[curr]||[])){\n    if(!visited.has(nxt)){ visited.add(nxt); q.push(nxt); }\n  }\n}\nconsole.log(res.join(' '));` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\n#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int v, e;\n    if (!(cin >> v >> e)) return 0;\n    vector<vector<int>> adj(v);\n    for (int i = 0; i < e; ++i) {\n        int u, w; cin >> u >> w;\n        adj[u].push_back(w);\n    }\n    vector<bool> vis(v, false);\n    queue<int> q;\n    q.push(0); vis[0] = true;\n    bool first = true;\n    while (!q.empty()) {\n        int curr = q.front(); q.pop();\n        if (!first) cout << " ";\n        cout << curr; first = false;\n        for (int nxt : adj[curr]) {\n            if (!vis[nxt]) { vis[nxt] = true; q.push(nxt); }\n        }\n    }\n    cout << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int v = sc.nextInt(), e = sc.nextInt();\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < v; i++) adj.add(new ArrayList<>());\n        for (int i = 0; i < e; i++) adj.get(sc.nextInt()).add(sc.nextInt());\n        boolean[] vis = new boolean[v];\n        Queue<Integer> q = new LinkedList<>();\n        q.add(0); vis[0] = true;\n        List<String> res = new ArrayList<>();\n        while (!q.isEmpty()) {\n            int curr = q.poll();\n            res.add(String.valueOf(curr));\n            for (int nxt : adj.get(curr)) {\n                if (!vis[nxt]) { vis[nxt] = true; q.add(nxt); }\n            }\n        }\n        System.out.println(String.join(" ", res));\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst adj = Array.from({length: v}, () => []);\nfor(let i=1; i<=e; i++){\n  const [u, w] = lines[i].split(' ').map(Number);\n  adj[u].push(w);\n}\nconst visited = new Set([0]);\nconst q = [0];\nconst res = [];\nwhile(q.length){\n  const curr = q.shift();\n  res.push(curr);\n  for(let nxt of (adj[curr]||[])){\n    if(!visited.has(nxt)){ visited.add(nxt); q.push(nxt); }\n  }\n}\nconsole.log(res.join(' '));` }
    ],
    problemCreator: creatorId
  },
  {
    title: "Depth First Search (DFS) Traversal",
    description: `Given a connected undirected graph with \`V\` vertices and \`E\` edges, return the DFS traversal sequence starting from node \`0\`.

### Input Format:
- Line 1: Space-separated integers \`V\` and \`E\`.
- Next \`E\` lines: Space-separated integers \`u v\`.

### Constraints:
- \`1 <= V, E <= 10^4\`
- \`0 <= u, v < V\``,
    difficulty: "easy",
    tags: ["graph"],
    visibleTestCases: [
      { input: "5 4\n0 1\n0 2\n0 3\n2 4", output: "0 1 2 4 3", explanation: "DFS explores deeply starting at 0: 0 -> 1, backtracks, 2 -> 4, backtracks, 3." }
    ],
    hiddenTestCases: [
      { input: "5 4\n0 1\n0 2\n0 3\n2 4", output: "0 1 2 4 3" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst adj = Array.from({length: v}, () => []);\nfor(let i=1; i<=e; i++){\n  const [u, w] = lines[i].split(' ').map(Number);\n  adj[u].push(w);\n}\nconst visited = new Set();\nconst res = [];\nfunction dfs(node){\n  visited.add(node); res.push(node);\n  for(let nxt of (adj[node]||[])){ if(!visited.has(nxt)) dfs(nxt); }\n}\ndfs(0);\nconsole.log(res.join(' '));` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid dfs(int node, const vector<vector<int>>& adj, vector<bool>& vis, bool& first) {\n    vis[node] = true;\n    if (!first) cout << " ";\n    cout << node; first = false;\n    for (int nxt : adj[node]) {\n        if (!vis[nxt]) dfs(nxt, adj, vis, first);\n    }\n}\n\nint main() {\n    int v, e;\n    if (!(cin >> v >> e)) return 0;\n    vector<vector<int>> adj(v);\n    for (int i = 0; i < e; ++i) {\n        int u, w; cin >> u >> w;\n        adj[u].push_back(w);\n    }\n    vector<bool> vis(v, false);\n    bool first = true;\n    dfs(0, adj, vis, first);\n    cout << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\nimport java.util.*;\n\npublic class Main {\n    static void dfs(int node, List<List<Integer>> adj, boolean[] vis, List<String> res) {\n        vis[node] = true;\n        res.add(String.valueOf(node));\n        for (int nxt : adj.get(node)) {\n            if (!vis[nxt]) dfs(nxt, adj, vis, res);\n        }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int v = sc.nextInt(), e = sc.nextInt();\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < v; i++) adj.add(new ArrayList<>());\n        for (int i = 0; i < e; i++) adj.get(sc.nextInt()).add(sc.nextInt());\n        boolean[] vis = new boolean[v];\n        List<String> res = new ArrayList<>();\n        dfs(0, adj, vis, res);\n        System.out.println(String.join(" ", res));\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst adj = Array.from({length: v}, () => []);\nfor(let i=1; i<=e; i++){\n  const [u, w] = lines[i].split(' ').map(Number);\n  adj[u].push(w);\n}\nconst visited = new Set();\nconst res = [];\nfunction dfs(node){\n  visited.add(node); res.push(node);\n  for(let nxt of (adj[node]||[])){ if(!visited.has(nxt)) dfs(nxt); }\n}\ndfs(0);\nconsole.log(res.join(' '));` }
    ],
    problemCreator: creatorId
  },
  {
    title: "Detect Cycle in an Undirected Graph",
    description: `Given an undirected graph with \`V\` vertices and \`E\` edges, check whether the graph contains any cycle.

Print \`true\` if a cycle exists, otherwise \`false\`.

### Input Format:
- Line 1: Space-separated integers \`V\` and \`E\`.
- Next \`E\` lines: Space-separated integers \`u v\`.

### Constraints:
- \`1 <= V, E <= 10^4\`
- \`0 <= u, v < V\``,
    difficulty: "medium",
    tags: ["graph"],
    visibleTestCases: [
      { input: "5 5\n0 1\n1 2\n2 0\n1 3\n3 4", output: "true", explanation: "Vertices 0, 1, and 2 form a closed cycle loop." }
    ],
    hiddenTestCases: [
      { input: "5 5\n0 1\n1 2\n2 0\n1 3\n3 4", output: "true" },
      { input: "4 3\n0 1\n1 2\n2 3", output: "false" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst parent = Array.from({length: v}, (_, i) => i);\nfunction find(i){ return parent[i] === i ? i : (parent[i] = find(parent[i])); }\nlet hasCycle = false;\nfor(let i=1; i<=e; i++){\n  const [u, w] = lines[i].split(' ').map(Number);\n  const rootU = find(u), rootW = find(w);\n  if(rootU === rootW) hasCycle = true;\n  else parent[rootU] = rootW;\n}\nconsole.log(hasCycle ? "true" : "false");` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(V + E) [DSU], Space Complexity: O(V)\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint findRoot(int i, vector<int>& parent) {\n    if (parent[i] == i) return i;\n    return parent[i] = findRoot(parent[i], parent);\n}\n\nint main() {\n    int v, e;\n    if (!(cin >> v >> e)) return 0;\n    vector<int> parent(v);\n    for (int i = 0; i < v; ++i) parent[i] = i;\n    bool cycle = false;\n    for (int i = 0; i < e; ++i) {\n        int u, w; cin >> u >> w;\n        int rU = findRoot(u, parent), rW = findRoot(w, parent);\n        if (rU == rW) cycle = true;\n        else parent[rU] = rW;\n    }\n    cout << (cycle ? "true" : "false") << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(V + E) [Disjoint Set Union], Space Complexity: O(V)\nimport java.util.*;\n\npublic class Main {\n    static int find(int i, int[] parent) {\n        if (parent[i] == i) return i;\n        return parent[i] = find(parent[i], parent);\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int v = sc.nextInt(), e = sc.nextInt();\n        int[] parent = new int[v];\n        for (int i = 0; i < v; i++) parent[i] = i;\n        boolean cycle = false;\n        for (int i = 0; i < e; i++) {\n            int u = sc.nextInt(), w = sc.nextInt();\n            int rU = find(u, parent), rW = find(w, parent);\n            if (rU == rW) cycle = true;\n            else parent[rU] = rW;\n        }\n        System.out.println(cycle ? "true" : "false");\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst parent = Array.from({length: v}, (_, i) => i);\nfunction find(i){ return parent[i] === i ? i : (parent[i] = find(parent[i])); }\nlet hasCycle = false;\nfor(let i=1; i<=e; i++){\n  const [u, w] = lines[i].split(' ').map(Number);\n  const rootU = find(u), rootW = find(w);\n  if(rootU === rootW) hasCycle = true;\n  else parent[rootU] = rootW;\n}\nconsole.log(hasCycle ? "true" : "false");` }
    ],
    problemCreator: creatorId
  },
  {
    title: "Find Center of Star Graph",
    description: `There is an undirected star graph consisting of \`n\` nodes labeled from \`1\` to \`n\`.

A star graph is a graph where there is one center node and exactly \`n - 1\` edges that connect the center node with every other node.

Return the center node of the given star graph.

### Constraints:
- \`3 <= n <= 10^5\`
- \`edges.length == n - 1\``,
    difficulty: "easy",
    tags: ["graph"],
    visibleTestCases: [
      { input: "4\n1 2\n2 3\n4 2", output: "2", explanation: "Node 2 is connected to nodes 1, 3, and 4, so node 2 is the center node." }
    ],
    hiddenTestCases: [
      { input: "4\n1 2\n2 3\n4 2", output: "2" },
      { input: "5\n1 3\n2 3\n3 4\n3 5", output: "3" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [u1, v1] = lines[1].split(' ').map(Number);\nconst [u2, v2] = lines[2].split(' ').map(Number);\nconsole.log(u1 === u2 || u1 === v2 ? u1 : v1);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(1), Space Complexity: O(1)\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    int u1, v1, u2, v2;\n    cin >> u1 >> v1 >> u2 >> v2;\n    if (u1 == u2 || u1 == v2) cout << u1 << "\\n";\n    else cout << v1 << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(1), Space Complexity: O(1)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int u1 = sc.nextInt(), v1 = sc.nextInt();\n        int u2 = sc.nextInt(), v2 = sc.nextInt();\n        System.out.println(u1 == u2 || u1 == v2 ? u1 : v1);\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(1), Space Complexity: O(1)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [u1, v1] = lines[1].split(' ').map(Number);\nconst [u2, v2] = lines[2].split(' ').map(Number);\nconsole.log(u1 === u2 || u1 === v2 ? u1 : v1);` }
    ],
    problemCreator: creatorId
  },
  {
    title: "Shortest Path in Unweighted Graph",
    description: `Given an unweighted undirected graph with \`V\` vertices and \`E\` edges, find the shortest distance from vertex \`0\` to vertex \`V - 1\`.

### Input Format:
- Line 1: Space-separated integers \`V\` and \`E\`.
- Next \`E\` lines: Space-separated integers \`u v\`.

### Constraints:
- \`2 <= V <= 10^4\`
- \`1 <= E <= 10^4\``,
    difficulty: "medium",
    tags: ["graph"],
    visibleTestCases: [
      { input: "4 4\n0 1\n1 2\n2 3\n0 2", output: "2", explanation: "The shortest path from vertex 0 to vertex 3 is 0 -> 2 -> 3 with distance 2." }
    ],
    hiddenTestCases: [
      { input: "4 4\n0 1\n1 2\n2 3\n0 2", output: "2" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst adj = Array.from({length: v}, () => []);\nfor(let i=1; i<=e; i++){\n  const [u, w] = lines[i].split(' ').map(Number);\n  adj[u].push(w); adj[w].push(u);\n}\nconst dist = Array(v).fill(-1);\ndist[0] = 0;\nconst q = [0];\nwhile(q.length){\n  const curr = q.shift();\n  for(let nxt of adj[curr]){\n    if(dist[nxt] === -1){ dist[nxt] = dist[curr] + 1; q.push(nxt); }\n  }\n}\nconsole.log(dist[v-1]);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(V + E) [BFS], Space Complexity: O(V)\n#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int v, e;\n    if (!(cin >> v >> e)) return 0;\n    vector<vector<int>> adj(v);\n    for (int i = 0; i < e; ++i) {\n        int u, w; cin >> u >> w;\n        adj[u].push_back(w); adj[w].push_back(u);\n    }\n    vector<int> dist(v, -1);\n    queue<int> q;\n    q.push(0); dist[0] = 0;\n    while (!q.empty()) {\n        int curr = q.front(); q.pop();\n        for (int nxt : adj[curr]) {\n            if (dist[nxt] == -1) { dist[nxt] = dist[curr] + 1; q.push(nxt); }\n        }\n    }\n    cout << dist[v - 1] << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(V + E) [BFS], Space Complexity: O(V)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int v = sc.nextInt(), e = sc.nextInt();\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < v; i++) adj.add(new ArrayList<>());\n        for (int i = 0; i < e; i++) {\n            int u = sc.nextInt(), w = sc.nextInt();\n            adj.get(u).add(w); adj.get(w).add(u);\n        }\n        int[] dist = new int[v];\n        Arrays.fill(dist, -1);\n        Queue<Integer> q = new LinkedList<>();\n        q.add(0); dist[0] = 0;\n        while (!q.isEmpty()) {\n            int curr = q.poll();\n            for (int nxt : adj.get(curr)) {\n                if (dist[nxt] == -1) { dist[nxt] = dist[curr] + 1; q.add(nxt); }\n            }\n        }\n        System.out.println(dist[v - 1]);\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(V + E), Space Complexity: O(V)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [v, e] = lines[0].split(' ').map(Number);\nconst adj = Array.from({length: v}, () => []);\nfor(let i=1; i<=e; i++){\n  const [u, w] = lines[i].split(' ').map(Number);\n  adj[u].push(w); adj[w].push(u);\n}\nconst dist = Array(v).fill(-1);\ndist[0] = 0;\nconst q = [0];\nwhile(q.length){\n  const curr = q.shift();\n  for(let nxt of adj[curr]){\n    if(dist[nxt] === -1){ dist[nxt] = dist[curr] + 1; q.push(nxt); }\n  }\n}\nconsole.log(dist[v-1]);` }
    ],
    problemCreator: creatorId
  },

  // ==========================================
  // DYNAMIC PROGRAMMING (DP) PROBLEMS (5)
  // ==========================================
  {
    title: "Climbing Stairs",
    description: `You are climbing a staircase. It takes \`n\` steps to reach the top.

Each time you can either climb \`1\` or \`2\` steps. In how many distinct ways can you climb to the top?

### Constraints:
- \`1 <= n <= 45\``,
    difficulty: "easy",
    tags: ["dp"],
    visibleTestCases: [
      { input: "3", output: "3", explanation: "There are 3 ways to climb 3 steps: (1+1+1), (1+2), (2+1)." },
      { input: "4", output: "5", explanation: "There are 5 distinct ways to reach step 4." }
    ],
    hiddenTestCases: [
      { input: "3", output: "3" },
      { input: "4", output: "5" },
      { input: "5", output: "8" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nif (n <= 2) { console.log(n); process.exit(0); }\nlet a = 1, b = 2;\nfor(let i = 3; i <= n; i++) { const c = a + b; a = b; b = c; }\nconsole.log(b);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N), Space Complexity: O(1) [Dynamic Programming]\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    if (n <= 2) { cout << n << "\\n"; return 0; }\n    long long a = 1, b = 2;\n    for (int i = 3; i <= n; ++i) {\n        long long c = a + b; a = b; b = c;\n    }\n    cout << b << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1) [Dynamic Programming]\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        if (n <= 2) { System.out.println(n); return; }\n        long a = 1, b = 2;\n        for (int i = 3; i <= n; i++) {\n            long c = a + b; a = b; b = c;\n        }\n        System.out.println(b);\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nif (n <= 2) { console.log(n); process.exit(0); }\nlet a = 1, b = 2;\nfor(let i = 3; i <= n; i++) { const c = a + b; a = b; b = c; }\nconsole.log(b);` }
    ],
    problemCreator: creatorId
  },
  {
    title: "0/1 Knapsack Problem",
    description: `Given \`N\` items with values and weights, and a knapsack capacity \`W\`, determine the maximum total value you can obtain by choosing a subset of items such that their total weight does not exceed \`W\`.

### Input Format:
- Line 1: Space-separated integers \`N\` and \`W\`.
- Line 2: Space-separated values of items.
- Line 3: Space-separated weights of items.

### Constraints:
- \`1 <= N <= 100\`
- \`1 <= W <= 1000\``,
    difficulty: "medium",
    tags: ["dp"],
    visibleTestCases: [
      { input: "3 50\n60 100 120\n10 20 30", output: "220", explanation: "Taking item 2 (value 100, weight 20) and item 3 (value 120, weight 30) gives max value 220 within capacity 50." }
    ],
    hiddenTestCases: [
      { input: "3 50\n60 100 120\n10 20 30", output: "220" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [n, w] = lines[0].split(' ').map(Number);\nconst val = lines[1].split(' ').map(Number);\nconst wt = lines[2].split(' ').map(Number);\nconst dp = Array(w + 1).fill(0);\nfor(let i = 0; i < n; i++) {\n  for(let j = w; j >= wt[i]; j--) {\n    dp[j] = Math.max(dp[j], dp[j - wt[i]] + val[i]);\n  }\n}\nconsole.log(dp[w]);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N * W), Space Complexity: O(W) [1D DP Array]\n#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n, w;\n    if (!(cin >> n >> w)) return 0;\n    vector<int> val(n), wt(n);\n    for (int i = 0; i < n; ++i) cin >> val[i];\n    for (int i = 0; i < n; ++i) cin >> wt[i];\n    vector<int> dp(w + 1, 0);\n    for (int i = 0; i < n; ++i) {\n        for (int j = w; j >= wt[i]; --j) {\n            dp[j] = max(dp[j], dp[j - wt[i]] + val[i]);\n        }\n    }\n    cout << dp[w] << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N * W), Space Complexity: O(W) [Dynamic Programming]\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextInt()) return;\n        int n = sc.nextInt(), w = sc.nextInt();\n        int[] val = new int[n], wt = new int[n];\n        for (int i = 0; i < n; i++) val[i] = sc.nextInt();\n        for (int i = 0; i < n; i++) wt[i] = sc.nextInt();\n        int[] dp = new int[w + 1];\n        for (int i = 0; i < n; i++) {\n            for (int j = w; j >= wt[i]; j--) {\n                dp[j] = Math.max(dp[j], dp[j - wt[i]] + val[i]);\n            }\n        }\n        System.out.println(dp[w]);\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N * W), Space Complexity: O(W)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [n, w] = lines[0].split(' ').map(Number);\nconst val = lines[1].split(' ').map(Number);\nconst wt = lines[2].split(' ').map(Number);\nconst dp = Array(w + 1).fill(0);\nfor(let i = 0; i < n; i++) {\n  for(let j = w; j >= wt[i]; j--) {\n    dp[j] = Math.max(dp[j], dp[j - wt[i]] + val[i]);\n  }\n}\nconsole.log(dp[w]);` }
    ],
    problemCreator: creatorId
  },
  {
    title: "Longest Common Subsequence",
    description: `Given two strings \`text1\` and \`text2\` separated by a space on line 1, return the length of their longest common subsequence.

A subsequence is a sequence that can be derived from another string by deleting some or no characters without changing the relative order of the remaining characters.

### Constraints:
- \`1 <= text1.length, text2.length <= 1000\``,
    difficulty: "medium",
    tags: ["dp"],
    visibleTestCases: [
      { input: "abcde ace", output: "3", explanation: "The longest common subsequence is 'ace' and its length is 3." }
    ],
    hiddenTestCases: [
      { input: "abcde ace", output: "3" },
      { input: "abc def", output: "0" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst [s1, s2] = fs.readFileSync(0, 'utf-8').trim().split(' ');\nconst m = s1.length, n = s2.length;\nconst dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));\nfor(let i=1; i<=m; i++){\n  for(let j=1; j<=n; j++){\n    if(s1[i-1] === s2[j-1]) dp[i][j] = 1 + dp[i-1][j-1];\n    else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);\n  }\n}\nconsole.log(dp[m][n]);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(M * N), Space Complexity: O(M * N) [2D DP Table]\n#include <iostream>\n#include <string>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s1, s2;\n    if (!(cin >> s1 >> s2)) return 0;\n    int m = s1.length(), n = s2.length();\n    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\n    for (int i = 1; i <= m; ++i) {\n        for (int j = 1; j <= n; ++j) {\n            if (s1[i - 1] == s2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];\n            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);\n        }\n    }\n    cout << dp[m][n] << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(M * N), Space Complexity: O(M * N) [Dynamic Programming]\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        String s1 = sc.next(), s2 = sc.next();\n        int m = s1.length(), n = s2.length();\n        int[][] dp = new int[m + 1][n + 1];\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (s1.charAt(i - 1) == s2.charAt(j - 1)) dp[i][j] = 1 + dp[i - 1][j - 1];\n                else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n        System.out.println(dp[m][n]);\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(M * N), Space Complexity: O(M * N)\nconst fs = require('fs');\nconst [s1, s2] = fs.readFileSync(0, 'utf-8').trim().split(' ');\nconst m = s1.length, n = s2.length;\nconst dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));\nfor(let i=1; i<=m; i++){\n  for(let j=1; j<=n; j++){\n    if(s1[i-1] === s2[j-1]) dp[i][j] = 1 + dp[i-1][j-1];\n    else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);\n  }\n}\nconsole.log(dp[m][n]);` }
    ],
    problemCreator: creatorId
  },
  {
    title: "Coin Change Problem",
    description: `You are given an array of integer \`coins\` representing coins of different denominations and an integer \`amount\` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return \`-1\`.

### Input Format:
- Line 1: Space-separated coin denominations.
- Line 2: Target amount.

### Constraints:
- \`1 <= coins.length <= 12\`
- \`1 <= coins[i] <= 2^31 - 1\`
- \`0 <= amount <= 10^4\``,
    difficulty: "medium",
    tags: ["dp"],
    visibleTestCases: [
      { input: "1 2 5\n11", output: "3", explanation: "11 = 5 + 5 + 1 (minimum 3 coins)." }
    ],
    hiddenTestCases: [
      { input: "1 2 5\n11", output: "3" },
      { input: "2\n3", output: "-1" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst coins = lines[0].split(' ').map(Number);\nconst amount = Number(lines[1]);\nconst dp = Array(amount + 1).fill(Infinity);\ndp[0] = 0;\nfor(let coin of coins){\n  for(let i=coin; i<=amount; i++){\n    dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n  }\n}\nconsole.log(dp[amount] === Infinity ? -1 : dp[amount]);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(Amount * N), Space Complexity: O(Amount) [DP]\n#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    if (!getline(cin, line1)) return 0;\n    getline(cin, line2);\n    stringstream ss(line1);\n    vector<int> coins; int c;\n    while (ss >> c) coins.push_back(c);\n    int amount = stoi(line2);\n    vector<int> dp(amount + 1, 1e9);\n    dp[0] = 0;\n    for (int coin : coins) {\n        for (int i = coin; i <= amount; ++i) {\n            dp[i] = min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    cout << (dp[amount] >= 1e9 ? -1 : dp[amount]) << "\\n";\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(Amount * N), Space Complexity: O(Amount)\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String[] parts = sc.nextLine().trim().split("\\\\s+");\n        int amount = Integer.parseInt(sc.nextLine().trim());\n        int[] coins = new int[parts.length];\n        for (int i = 0; i < parts.length; i++) coins[i] = Integer.parseInt(parts[i]);\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, 1000000000);\n        dp[0] = 0;\n        for (int coin : coins) {\n            for (int i = coin; i <= amount; i++) {\n                dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n            }\n        }\n        System.out.println(dp[amount] >= 1000000000 ? -1 : dp[amount]);\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(Amount * N), Space Complexity: O(Amount)\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst coins = lines[0].split(' ').map(Number);\nconst amount = Number(lines[1]);\nconst dp = Array(amount + 1).fill(Infinity);\ndp[0] = 0;\nfor(let coin of coins){\n  for(let i=coin; i<=amount; i++){\n    dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n  }\n}\nconsole.log(dp[amount] === Infinity ? -1 : dp[amount]);` }
    ],
    problemCreator: creatorId
  },
  {
    title: "House Robber",
    description: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed.

Adjacent houses have security systems connected — it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an array of non-negative integers representing the amount of money in each house, return the maximum amount of money you can rob tonight without alerting the police.

### Constraints:
- \`1 <= nums.length <= 100\`
- \`0 <= nums[i] <= 400\``,
    difficulty: "easy",
    tags: ["dp"],
    visibleTestCases: [
      { input: "2 7 9 3 1", output: "12", explanation: "Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount = 2 + 9 + 1 = 12." }
    ],
    hiddenTestCases: [
      { input: "2 7 9 3 1", output: "12" },
      { input: "1 2 3 1", output: "4" }
    ],
    startCode: [
      { language: "javascript", initialCode: `const fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nif(nums.length === 0) { console.log(0); process.exit(0); }\nlet prev1 = 0, prev2 = 0;\nfor(let num of nums){\n  let tmp = prev1;\n  prev1 = Math.max(prev2 + num, prev1);\n  prev2 = tmp;\n}\nconsole.log(prev1);` }
    ],
    referenceSolution: [
      { language: "cpp", completeCode: `// Time Complexity: O(N), Space Complexity: O(1) [Dynamic Programming]\n#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line;\n    if (getline(cin, line)) {\n        stringstream ss(line);\n        int num;\n        long long prev1 = 0, prev2 = 0;\n        while (ss >> num) {\n            long long tmp = prev1;\n            prev1 = max(prev2 + num, prev1);\n            prev2 = tmp;\n        }\n        cout << prev1 << "\\n";\n    }\n    return 0;\n}` },
      { language: "java", completeCode: `// Time Complexity: O(N), Space Complexity: O(1) [Dynamic Programming]\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String[] parts = sc.nextLine().trim().split("\\\\s+");\n            long prev1 = 0, prev2 = 0;\n            for (String p : parts) {\n                if (p.isEmpty()) continue;\n                int num = Integer.parseInt(p);\n                long tmp = prev1;\n                prev1 = Math.max(prev2 + num, prev1);\n                prev2 = tmp;\n            }\n            System.out.println(prev1);\n        }\n    }\n}` },
      { language: "javascript", completeCode: `// Time Complexity: O(N), Space Complexity: O(1)\nconst fs = require('fs');\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);\nif(nums.length === 0) { console.log(0); process.exit(0); }\nlet prev1 = 0, prev2 = 0;\nfor(let num of nums){\n  let tmp = prev1;\n  prev1 = Math.max(prev2 + num, prev1);\n  prev2 = tmp;\n}\nconsole.log(prev1);` }
    ],
    problemCreator: creatorId
  }
];

async function run() {
  try {
    await main();
    console.log("Connected to MongoDB database.");
    
    for (let prob of updatedProblems) {
      await Problem.findOneAndUpdate(
        { title: prob.title },
        { ...prob },
        { upsert: true, new: true }
      );
      console.log(`Updated problem solutions for C++, Java & JS: "${prob.title}"`);
    }
    
    console.log("All 15 problems updated with multi-language C++, Java, and JavaScript reference solutions!");
    process.exit(0);
  } catch (err) {
    console.error("Error updating problems:", err);
    process.exit(1);
  }
}

run();
