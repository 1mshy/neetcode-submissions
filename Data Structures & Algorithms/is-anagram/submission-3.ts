class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const m: Map<string, number> = new Map();
        const m2: Map<string, number> = new Map();

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++) {
            const c1 = s[i];
            const c2 = t[i];
            m.set(c1, (m.get(c1) + 1) || 1)
            m2.set(c2, (m2.get(c2) + 1) || 1)
        }
        for (const [key] of m2) {
            if (m.get(key) !== m2.get(key)) return false;
        }
        return true;
    }
}
