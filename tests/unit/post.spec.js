import { shallowMount } from '@vue/test-utils'
import Post from '@/components/Post.vue'

describe('Post.vue', () => {
  const post = {
    "userId": 1,
    "id": 1,
    "title": "test title",
    "body": "test body"
  }

  it('renders title when passed in post', () => {
    const wrapper = shallowMount(Post, {
      propsData: { post }
    })
    expect(wrapper.text()).toMatch(post.title)
  })
})


