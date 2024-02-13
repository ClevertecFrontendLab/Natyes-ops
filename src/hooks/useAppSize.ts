import { useState, useEffect } from 'react';
import { AppSize } from '@types/app-size';

export const useAppSize = (): AppSize => {
    const [size, setSize] = useState<AppSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return size;
};
