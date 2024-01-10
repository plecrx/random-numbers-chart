import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CounterCard from '~/components/CounterCard.vue'

describe('CounterCard', () => {
  it('renders properly', () => {
    const wrapper = mount(CounterCard, { props: { msg: 'Hello VueJS' } })
    expect(wrapper.text()).toContain('Hello VueJS')
  })
})
