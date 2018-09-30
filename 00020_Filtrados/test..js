describe("", function() {
  it("saldosDeMesesComLucro([1]) é [1]", function() {
    assert.deepEqual(saldosDeMesesComLucro([1]), [1])
  })
  it("saldosDeMesesComLucro([2, 20, 20]) é [2, 20, 20]", function() {
    assert.deepEqual(saldosDeMesesComLucro([2, 20, 20]), [2, 20, 20])
  })
  it("saldosDeMesesComLucro([]) é []", function() {
    assert.deepEqual(saldosDeMesesComLucro([]), [])
  })
  it("saldosDeMesesComLucro([0, 0, 0]) é []", function() {
    assert.deepEqual(saldosDeMesesComLucro([0, 0, 0]), [])
  })
  it("saldosDeMesesComLucro([10, -10, 2, 100]) é [10, 2, 100]", function() {
    assert.deepEqual(saldosDeMesesComLucro([10, -10, 2, 100]), [10, 2, 100])
  })
  it("saldosDeMesesComLucro([-1, -2, -3]) é []", function() {
    assert.deepEqual(saldosDeMesesComLucro([-1, -2, -3]), [])
  })
})