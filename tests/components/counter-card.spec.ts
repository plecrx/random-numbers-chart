import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import CounterCard from '../../src/components/counter-card.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('Counter card', () => {
    it('should render properly', () => {
        setActivePinia(createPinia())
        const wrapper = shallowMount(CounterCard, { props: { msg: 'Hello VueJS' } })

        expect(wrapper.text()).toContain('Hello VueJS')
    })
})
