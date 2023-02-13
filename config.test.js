const {constConfigs} = require("./config");

describe("Ensure required configuration parameters", () => {
    it("Shall have TRIVIAL_PARTITION_KEY configured", () => {
        const {TRIVIAL_PARTITION_KEY} = constConfigs;
        expect(TRIVIAL_PARTITION_KEY).toBe("0");
    });

    it("Shall have TRIVIAL_PARTITION_KEY configured as type String", () => {
        const {TRIVIAL_PARTITION_KEY} = constConfigs;
        expect(typeof TRIVIAL_PARTITION_KEY).toBe("string");
    });

    it("Shall have MAX_PARTITION_KEY_LENGTH configured", () => {
        const {MAX_PARTITION_KEY_LENGTH} = constConfigs;
        expect(MAX_PARTITION_KEY_LENGTH).toBe(256);
    });

    it("Shall have MAX_PARTITION_KEY_LENGTH configured as type number", () => {
        const {MAX_PARTITION_KEY_LENGTH} = constConfigs;
        expect(typeof MAX_PARTITION_KEY_LENGTH).toBe("number");
    });
});