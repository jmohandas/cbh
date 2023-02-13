const { deterministicPartitionKey } = require("./dpk_refactored");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns partitionKey string when provided an object with partitionKey as string within length limit", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "12345"});
    expect(trivialKey).toBe("12345");
  });

  it("Returns partitionKey string when provided an object with partitionKey as number", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 5300});
    expect(trivialKey).toBe("5300");
  });

  it("Returns partitionKey string when provided an object with partitionKey as boolean", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: true});
    expect(trivialKey).toBe("true");
  });

  it("Returns partitionKey string when provided an object with partitionKey as Obejct", () => {
    const trivialKey = deterministicPartitionKey({name: "tester", age: 25, purpose: "testing"});
    expect(trivialKey).toBe("ef12cf644c206e346cfb61c8b010a282412f07b43b77286e52a415b48df0c7165a6fb6a1274210e5c87e8a175e70e3814916ea68af5327d1077cfb002be3785f");
  });

  it("Returns hashed partitionKey when provided an object with partitionKey with more than the configured MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "123456789123456789"}, {MAX_PARTITION_KEY_LENGTH: 16});
    expect(trivialKey).toBe("f913c2c95b4c122960dbb5a071fc9d8a5bf562b8599b47f3411c3980bee5109498c9d8b5a36058abc65ccc721301b2690001961d920ec9fa983415440603eebc");
  });
});
