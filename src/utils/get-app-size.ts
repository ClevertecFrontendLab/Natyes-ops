import { AppSize } from '@constants/app';
import { AppWidth } from '@types/app-schema';
import { useAppSize } from '@hooks/useAppSize';

export const getAppSize = (): AppSize => {
    const { width } = useAppSize();

    const widthClass =
        width >= 1200 ? AppSize.large : width >= 756 ? AppSize.medium : AppSize.small;

    return { width, widthClass };
};
