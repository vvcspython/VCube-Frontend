import React, { lazy, useEffect, useState } from 'react';
import { DateTime } from './date-time';
const SmallWindowPage = lazy(() => import('./SmallWindowPage'));

export const WindowResize = ({ children }) => {
    const [screenSizeOk, setScreenSizeOk] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setScreenSizeOk(parseInt(DateTime('year')) > 2020 && parseInt(DateTime('year')) < 2025 ? (window.innerWidth >= 888 && window.innerHeight >= 555) : (window.innerWidth >= 900 && window.innerHeight >= 700));
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenSizeOk ? children : <SmallWindowPage />;
};
