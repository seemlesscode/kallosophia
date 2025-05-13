import { describe, it, expect } from 'vitest'
import { resolvers } from '../../src/graphql/resolvers'

describe('Query.appName resolver', () => {
  it('returns "Kallosophia"', () => {
    const result = resolvers.Query.appName()
    expect(result).toBe('Kallosophia')
  })
})
