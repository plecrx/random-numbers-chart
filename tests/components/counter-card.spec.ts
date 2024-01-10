import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import CounterCard from '../../src/components/counter-card.component.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('CounterCard', () => {
    it('renders properly', () => {
        setActivePinia(createPinia())
        const wrapper = shallowMount(CounterCard, { props: { msg: 'Hello VueJS' } })

        expect(wrapper.text()).toContain('Hello VueJS')
    })
})
