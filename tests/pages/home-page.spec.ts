import PageLayout from '@/layouts/page-layout.vue'
import { createTestingPinia } from '@pinia/testing'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import { shallowMount, VueWrapper } from '@vue/test-utils'
import { setActivePinia } from 'pinia'
import HomePage from '@/pages/home-page.vue'
import { useRandomIntegersStore } from '../../src/stores/useRandomIntegers.store'

describe('Home page', () => {
    let wrapper: VueWrapper
    beforeEach(async () => {
        setActivePinia(createTestingPinia())
        vi.mocked(useRandomIntegersStore().searchIntegers)
        wrapper = shallowMount(HomePage)
    })

    it('should display a page layout', () => {
        const pageLayout = wrapper.findComponent(PageLayout)

        expect(pageLayout.exists()).toBe(true)
    })

    it('should load integers list before accessing home page', () => {
        expect(useRandomIntegersStore().searchIntegers).toHaveBeenCalled()
    })
})
