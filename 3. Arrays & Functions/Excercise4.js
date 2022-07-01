// DEEP cOMPARISON

function deepEqual(x, y, indentation = "") {
  if (typeof x === typeof y) {
    if (typeof x === "object") {
      if (x !== null) {
        xKeys = Object.keys(x);
        yKeys = Object.keys(y);
        if (xKeys.length == yKeys.length) {
          trackInequalities = [];
          for (i = 0; i <= xKeys.length - 1; i++) {
            trackInequalities.push(deepEqual(x[xKeys[i]], y[yKeys[i]], "    "));
          }
          return !trackInequalities.includes(false);
        } else {
          // Different amount of keys
          return false;
        }
      } else {
        // Both are null
        return true;
      }
    } else {
      return x === y;
    }
  } else {
    return false;
  }
}

function test(assertion, expected, actual) {
  console.log(assertion, expected === actual ? "OK" : "FAILED");
}

test(
  "Shallow deepEqual with same identities should yield true",
  true,
  deepEqual(1, 1)
);
test(
  "Shallow deepEqual with different identities should yield false",
  false,
  deepEqual(1, 2)
);
test(
  "Deep deepEqual with same identities should yield true",
  true,
  deepEqual(
    { value: "test", rest: { value: "test2", rest: null } },
    { value: "test", rest: { value: "test2", rest: null } }
  )
);
test(
  "Deep deepEqual with different identities should yield false",
  false,
  deepEqual(
    { value: "test", rest: { value: "test2", rest: null } },
    { value: "test", rest: { value: "diff", rest: null } }
  )
);
test(
  "Deep deepEqual with identical objects containing arrays should yield true",
  true,
  deepEqual(
    { value: "test", rest: ["test", "test2", "test3"] },
    { value: "test", rest: ["test", "test2", "test3"] }
  )
);
