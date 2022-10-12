import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import App from './App.vue'

describe('prevent-event-propagation', () => {
  it('should work', async () => {
    const result: string[] = []
    console.log = vi.fn((log: string) => {
      result.push(log)
    })

    const wrapper = mount(App)

    await wrapper.findAll('div')[1].trigger('click')
    expect(JSON.stringify(result)).toBe(JSON.stringify([
      'click2',
    ]))
  })
})
