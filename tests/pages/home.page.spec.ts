import PageLayout from '@/layouts/page-layout.vue'
import { describe, it, expect, beforeEach } from 'vitest'

import { shallowMount, VueWrapper } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import HomePage from '@/pages/home-page.vue'
describe('Home page', () => {
    let wrapper: VueWrapper
    beforeEach(() => {
        setActivePinia(createPinia())
        wrapper = shallowMount(HomePage)
    })

    it('should display a page layout', () => {
        const pageLayout = wrapper.findComponent(PageLayout)

        console.log(wrapper.html())

        expect(pageLayout.exists()).toBe(true)
    })
})
