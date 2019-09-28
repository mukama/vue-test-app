import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('displays 5 posts when lauched', () => {
    const wrapper = shallowMount(App);
    setTimeout(() => { // TODO: Find a better alternative
      expect(wrapper.findAll('.post').length).toEqual(5)
    }, 3000);
  })

  it('moves post down when an arrow down gets clicked', () => {
    const wrapper = shallowMount(App);
    setTimeout(() => { // TODO: Find a better alternative
      wrapper.findAll('.post')[1].find('button.down').click()
      expect(wrapper.findAll('.post')[2].text()).toMatch('qui est esse')
    }, 3000);
  })

  it('moves post up when an arrow up gets clicked', () => {
    const wrapper = shallowMount(App);
    setTimeout(() => { // TODO: Find a better alternative
      wrapper.findAll('.post')[1].find('button.up').click()
      expect(wrapper.findAll('.post')[0].text()).toMatch('qui est esse')
    }, 3000);
  })
})


