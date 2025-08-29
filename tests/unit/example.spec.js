import { shallowMount, createLocalVue } from '@vue/test-utils'
import BaseCard from '@/components/BaseCard.vue'
import FontAwesomeIcon from '../../fontawesome.config'

const localVue = createLocalVue()
localVue.component('font-awesome-icon', FontAwesomeIcon)

describe('BaseCard.vue', () => {
  const main = 'test message'
  const description = 'test description'
  const icon = ['fas', 'clock']
  const wrapper = shallowMount(BaseCard, {
    localVue,
    mocks: {
      $t: () => {
        return { actions: { go_to: 'Go To' } }
      },
    },
    propsData: { main, description, icon },
  })

  it('should render card', () => {
    expect(wrapper.contains('.card')).toBe(true)
  })
  it('should render card with title', () => {
    expect(wrapper.find('.card-content > .title').text()).toMatch(main)
  })
  it('should render card with description', () => {
    expect(wrapper.find('.card-content-description').text()).toMatch(
      description,
    )
  })
})
