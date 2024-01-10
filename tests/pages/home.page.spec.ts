import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import HomePage from '../../src/pages/home-page.vue'
import CounterCard from '../../src/components/counter-card.vue'

describe('Home page', () => {
    it('should display a counter card', () => {
        setActivePinia(createPinia())
        const wrapper = shallowMount(HomePage)
        const counterCard = wrapper.findComponent(CounterCard)

        expect(counterCard.exists()).toBe(true)
    })
})
