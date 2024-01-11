import Button from '@/components/button.vue'
import { describe, it, expect, beforeEach } from 'vitest'

import { shallowMount, VueWrapper } from '@vue/test-utils'

describe('Button', () => {
    let wrapper: VueWrapper
    beforeEach(() => {
        wrapper = shallowMount(Button, {
            props: {
                recordValues: { 20: 2, 15: 1 }
            }
        })
    })

    it('should render properly', () => {
        expect(wrapper.exists()).toBe(true)
    })
})
