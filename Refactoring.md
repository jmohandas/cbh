# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I made the following changes while refactoring the given code:

1. When there is no event, the `TRIVIAL_PARTITION_KEY` can be returned immediately. When there is event, the logic would be based on the presence of `partitionKey`. if the `partitionKey` is not there, the `event` is stringified and hashed to return as `candidate`. if the `partitionKey` is there and it is not a string, it has to be converted to string first. If the ouput strigified value exceed the stipulated `MAX_PARTITION_KEY_LENGTH`, the stringified value is hashed. Otherwise it is returned without hashing.
2. The hashing function is refactored as another function called `createHash`. It expects a string as input and returns the hashed value as output. This reduces the redundant occurence of the same lengthy hashing function call. Multiple occurence of the lengthy calls could potentially lead to mismatched hashing alogorithm usage in different places and consequently produce bugs when it is spread across the file without wrapping.
3. For better testing possibility, I took the liberty of moving the constants into another `config` file. This allows the function to recieve these as input parameters to the function allowing the developers to change the values easily without changing the values at configuration file. The configuration file is also provided with test cases to ensure that the required keys and values are in place and it is of the expected datatype by the function.
4. Additional tests are added to ensure more wider coverage for different possible inputs to the `deterministicPartitionKey` function.