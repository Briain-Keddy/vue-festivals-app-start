import { shallowMount } from '@vue/test-utils'
import MyNavBer from '@/components/MyNavBer.vue'

describe('MyNavBer.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(MyNavBer, {
      propsData: { 
        msg: 'Hello World'
      }
    })
    expect(wrapper.text()).toMatch('Hello World')
  })
})
