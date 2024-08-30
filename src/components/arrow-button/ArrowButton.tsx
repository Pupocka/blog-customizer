import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export interface ArrowButtonProps {
	onClick: OnClick;
	isOpened: boolean;
}

export const ArrowButton = ({onClick, isOpened}: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={onClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, isOpened ? styles.container_open : '')}
>
			<img 
				src={arrow} 
				alt='иконка стрелочки' 
				className={clsx(styles.arrow, isOpened ? styles.arrow_open: '')} 
			/>
		</div>
	);
};
