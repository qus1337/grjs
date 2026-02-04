import { render, screen, fireEvent, act } from '@testing-library/react'
import { ThemeProvider, useTheme } from '../components/theme/theme-provider'
import { describe, it, expect, vi, beforeEach } from 'vitest'

const TestComponent = () => {
  const { theme, resolvedTheme, toggleTheme, setTheme } = useTheme()
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="resolved">{resolvedTheme}</span>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={() => setTheme('light')}>Set Light</button>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
    </div>
  )
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
    document.documentElement.classList.remove('dark')
  })

  it('默认为 system 模式，并根据系统偏好解析', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme').textContent).toBe('system')
  })

  it('能够手动切换主题并持久化到 localStorage', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    fireEvent.click(screen.getByText('Set Dark'))
    expect(screen.getByTestId('theme').textContent).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    fireEvent.click(screen.getByText('Set Light'))
    expect(screen.getByTestId('theme').textContent).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('能够通过 toggleTheme 无缝切换', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    // 初始可能是 light (mock 默认为 false)
    const initialTheme = screen.getByTestId('resolved').textContent
    fireEvent.click(screen.getByText('Toggle'))
    
    const expectedTheme = initialTheme === 'dark' ? 'light' : 'dark'
    expect(screen.getByTestId('resolved').textContent).toBe(expectedTheme)
  })

  it('能够从 localStorage 恢复偏好', () => {
    localStorage.setItem('theme', 'dark')
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme').textContent).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
