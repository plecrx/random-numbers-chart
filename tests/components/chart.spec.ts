import Chart from '@/components/chart.vue'
import { describe, it, expect, beforeEach } from 'vitest'

import { shallowMount, VueWrapper } from '@vue/test-utils'

describe('Chart', () => {
    let wrapper: VueWrapper
    beforeEach(() => {
        wrapper = shallowMount(Chart, {
            props: {
                recordValues: { 20: 2, 15: 1 }
            }
        })
    })

    it('should render properly', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('should render 2 bars given occurences of numbers', () => {
        expect(wrapper.findAll('[data-testid="chart-bar"]').length).toBe(2)
    })

    it('should render the right label given occurrences of numbers', () => {
        const [first, second] = wrapper.findAll('[data-testid="chart-bar-label"]')

        expect(first.text()).toBe('15')
        expect(second.text()).toBe('20')
    })

    it('should render 10 bars given occurences of numbers', async () => {
        await wrapper.setProps({
            recordValues: { 20: 2, 15: 1, 56: 5, 18: 6, 63: 1, 57: 7, 68: 8, 96: 5, 656: 5, 66: 6 }
        })

        expect(wrapper.findAll('[data-testid="chart-bar"]').length).toBe(10)
    })

    it('should render 2 bars given occurences of text', async () => {
        await wrapper.setProps({ recordValues: { '20': 2, '15': 1 } })

        expect(wrapper.findAll('[data-testid="chart-bar"]').length).toBe(2)
    })

    it('should render the right label given occurrences of text', async () => {
        await wrapper.setProps({ recordValues: { '20': 2, '15': 1 } })
        const [first, second] = wrapper.findAll('[data-testid="chart-bar-label"]')

        expect(first.text()).toBe('15')
        expect(second.text()).toBe('20')
    })
})
