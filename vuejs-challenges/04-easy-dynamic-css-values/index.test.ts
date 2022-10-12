import { describe, expect, it } from 'vitest'

import AppRaw from './App.vue?raw'

describe('Dynamic css values', () => {
  it('render to body', () => {
    expect(AppRaw).toContain(atob('Y29sb3I6IHYtYmluZCh0aGVtZSk='))
  })
})
