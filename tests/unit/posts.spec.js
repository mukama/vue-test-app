import Posts from '@/components/Posts.vue'

describe('Posts.vue', () => {
  it('has a created hook', () => {
    expect(typeof Posts.created).toBe('function')
  })
})


