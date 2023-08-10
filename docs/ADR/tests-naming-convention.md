# preface

---

### Why do we need a convention for describing tests?

Test naming is important for teams on long term project as any other code style conventions. By applying code convention in tests you proclaim that each test name will be readable, understandable and will have a well-known naming pattern for everyone on the project.

### Candidates:

There are dozens of conventions, and it is actually not important which of them you will choose it is important to choose one.

1. `MethodName_StateUnderTest_ExpectedBehavior`
    <br></br>
2. `MethodName_ExpectedBehavior_StateUnderTest`
    <br></br>
3. `testFeatureBeingTested`
    <br></br>
4. `Should_ExpectedBehavior_When_StateUnderTest`
    <br></br>
5. `Given_Preconditions_When_StateUnderTest_Then_ExpectedBehavior` — Behavior-Driven Development (BDD)
---

Inspired by [this article](https://markus.oberlehner.net/blog/naming-your-unit-tests-it-should-vs-given-when-then/)
We are using 5th option, which is implicit `Given, Then, When`.  