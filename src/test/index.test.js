const { describe, it } = require('node:test')
const assert = require('node:assert')
const { validatorUserQuery } = require('../../build/utils/validatorUserQuery')

describe('Utils folder', function () {
  it('should return a RepositoryUser object', () => {
    const object = { user: 'luchooo' }
    const result = validatorUserQuery(object)
    assert.deepStrictEqual(result, { user: 'luchooo' })
  })

  it('should throw an error when given an empty object', () => {
    assert.throws(() => { validatorUserQuery({}) },
      /incorrect or missing user query/i
    )
  })

  it('should throw an error when given an object wit a user property it is number', () => {
    const object = { user: 123 }
    assert.throws(() => { validatorUserQuery(object) },
      /incorrect or missing user query/i
    )
  })

  it('should throw an error when given an object with an empty string user property', () => {
    const object = { user: '' }
    assert.throws(() => { validatorUserQuery(object) },
      /incorrect or missing user query/i
    )
  })
})
