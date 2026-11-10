import { act, fireEvent, render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders all projects and moves previews on scroll, including mobile, respecting reduced motion', () => {
    const originalMatchMedia = window.matchMedia;
    const originalObserver = window.ResizeObserver;
    const preference = { matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() };
    window.matchMedia = jest.fn(() => preference);
    window.ResizeObserver = class { observe() {} disconnect() {} };
    let callback;
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(fn => { callback = fn; return 1; });
    jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});
    const originalWidth = window.innerWidth;
    try {
        const { container, unmount } = render(<Projects />);
        expect(screen.getAllByRole('article')).toHaveLength(10);
        const stage = container.querySelector('.project-visual');
        let top = 500;
        stage.getBoundingClientRect = () => ({ top, height: 360 });
        act(() => callback());
        const first = parseFloat(stage.style.getPropertyValue('--parallax-offset'));
        top = -100;
        fireEvent.scroll(window);
        act(() => callback());
        const second = parseFloat(stage.style.getPropertyValue('--parallax-offset'));
        expect(second - first).toBeGreaterThan(120);
        window.innerWidth = 390;
        fireEvent.resize(window);
        act(() => callback());
        expect(parseFloat(stage.style.getPropertyValue('--parallax-offset'))).not.toBe(0);
        preference.matches = true;
        act(() => preference.addEventListener.mock.calls[0][1]());
        act(() => callback());
        expect(stage.style.getPropertyValue('--parallax-offset')).toBe('0px');
        unmount();
        expect(preference.removeEventListener).toHaveBeenCalled();
    } finally {
        window.innerWidth = originalWidth;
        window.matchMedia = originalMatchMedia;
        window.ResizeObserver = originalObserver;
        jest.restoreAllMocks();
    }
});
