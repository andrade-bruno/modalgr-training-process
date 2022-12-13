import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation()

    // Every time pathname changes, scrolls to top page

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
}