#!/usr/bin/env node
// Self-check for the @name -> :name rewrite in src/lib/db/mysql.ts.
// The risk is mangling an "@" that lives inside a string literal (an email
// default, for example), so that is what most of these cover.
//
//   node scripts/test-placeholders.mjs

import assert from "node:assert/strict";

// Kept in sync with src/lib/db/mysql.ts. Duplicated rather than imported so
// this runs without a TypeScript loader.
function toNamedPlaceholders(sql) {
  let out = "";
  let quote = null;

  for (let i = 0; i < sql.length; i++) {
    const ch = sql[i];

    if (quote) {
      out += ch;
      if (ch === "\\") {
        if (i + 1 < sql.length) out += sql[++i];
      } else if (ch === quote) {
        quote = null;
      }
      continue;
    }

    if (ch === "'" || ch === '"' || ch === "`") {
      quote = ch;
      out += ch;
      continue;
    }

    if (ch === "@" && /[a-zA-Z_]/.test(sql[i + 1] || "")) {
      out += ":";
      continue;
    }

    out += ch;
  }

  return out;
}

const cases = [
  ["INSERT INTO t (a) VALUES (@a)", "INSERT INTO t (a) VALUES (:a)"],
  ["SET x = @x, y = @y WHERE id = @id", "SET x = :x, y = :y WHERE id = :id"],
  // The important one: an email inside a literal must survive untouched.
  [
    "SELECT * FROM t WHERE email = 'admin@attendkh.com'",
    "SELECT * FROM t WHERE email = 'admin@attendkh.com'",
  ],
  [
    "UPDATE t SET email = @email WHERE email = 'old@example.com'",
    "UPDATE t SET email = :email WHERE email = 'old@example.com'",
  ],
  // Backtick-quoted identifiers are literals too.
  ["SELECT `a@b` FROM t WHERE c = @c", "SELECT `a@b` FROM t WHERE c = :c"],
  // Escaped quote must not end the literal early.
  [
    "SELECT * FROM t WHERE s = 'it\\'s an @email' AND id = @id",
    "SELECT * FROM t WHERE s = 'it\\'s an @email' AND id = :id",
  ],
  // A bare @ not followed by an identifier is left alone.
  ["SELECT '@' , @real", "SELECT '@' , :real"],
  // Positional placeholders are untouched.
  ["SELECT * FROM t WHERE a = ? AND b = ?", "SELECT * FROM t WHERE a = ? AND b = ?"],
];

for (const [input, expected] of cases) {
  assert.equal(toNamedPlaceholders(input), expected, `failed on: ${input}`);
}

console.log(`toNamedPlaceholders: ${cases.length} cases passed`);
