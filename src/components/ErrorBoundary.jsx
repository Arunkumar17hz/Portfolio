import { Component } from 'react'

// Catches render errors (e.g. WebGL/Three.js failing in a restricted environment)
// so a 3D failure never blanks the entire site.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error) {
    if (import.meta.env.DEV) console.warn('ErrorBoundary caught:', error)
  }
  render() {
    if (this.state.hasError) return this.props.fallback || null
    return this.props.children
  }
}

// Quick WebGL capability probe (used to avoid mounting Canvas where unsupported)
export function hasWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}
