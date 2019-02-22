describe("", () => {
  it("contem([1, 6, 7, 6], 7) é true", () => {
    assert(contem([1, 6, 7, 6], 7));
  })
  it("contem([1, 6, 7, 6], 6) é true", () => {
    assert(contem([1, 6, 7, 6], 6));
  })
  it("contem([], 7) é false", () => {
    assert(!contem([], 7));
  })
  it("contem([8, 5], 7) es false", () => {
    assert(!contem([8, 5], 7));
  })
  it("contem([1, 8, 5], 7) es false", () => {
    assert(!contem([1, 8, 5], 7));
  })
  it("contem([1, 1, 1], 1) es true", () => {
    assert(contem([1, 1, 1], 1));
  })
})
