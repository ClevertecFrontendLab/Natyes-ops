import { FC, memo } from 'react';
import { Space, Layout, Typography, Card, List } from 'antd';
import { CardListItems } from '@constants/card-list';
import { Link } from 'react-router-dom';
import { AppSize } from '@constants/app';

import cls from './content-main.module.scss';

const { Content } = Layout;
const { Title } = Typography;

const list = [
    'планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;',
    'отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;',
    'создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
    'выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.',
];

export const ContentMain: FC = memo(({ widthClass }: string) => {
    const cardSize = widthClass === AppSize.small ? 'small' : 'default';
    const gridCard =
        widthClass === AppSize.small ? { gutter: 8, column: 1 } : { gutter: 16, column: 3 };

    return (
        <Content className={cls.main}>
            <Space className={[cls.space, 'space-card']} size={[0, 24]} wrap>
                <Card size={cardSize} className={cls.list}>
                    С CleverFit ты сможешь:
                    <List
                        className={cls.list}
                        dataSource={list}
                        renderItem={(item) => <List.Item className={cls.item}>— {item}</List.Item>}
                    />
                </Card>
                <Card size={cardSize}>
                    <Title className={cls['card-title']} level={4}>
                        CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
                        Не откладывай на завтра — начни тренироваться уже сегодня!
                    </Title>
                </Card>
            </Space>
            <List
                className={[cls['card-list'], cls.space]}
                grid={gridCard}
                dataSource={CardListItems}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            className={cls['card-item']}
                            size='small'
                            align='center'
                            title={<div className={cls['card-title']}>{item.title}</div>}
                        >
                            <Link className={cls['card-link']} to={item.path}>
                                {item.icon} {item.label}
                            </Link>
                        </Card>
                    </List.Item>
                )}
            />
        </Content>
    );
});
