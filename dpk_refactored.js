const crypto = require("crypto");
const {constConfigs} = require("./config");

exports.deterministicPartitionKey = (event, configs = constConfigs) => {
  const {TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH} = configs;
  let {partitionKey: candidate} = event ?? {partitionKey: TRIVIAL_PARTITION_KEY};

  if (!candidate) {
    candidate = createHash(JSON.stringify(event))
  } else {
    candidate = typeof candidate !== "string" ? JSON.stringify(candidate) : candidate;
    candidate = candidate.length > MAX_PARTITION_KEY_LENGTH ? createHash(candidate) : candidate;
  }
  
  return candidate;
};

const createHash = (inputStr) => crypto.createHash("sha3-512").update(inputStr).digest("hex");