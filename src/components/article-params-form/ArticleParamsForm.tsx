import { useState } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { Text } from 'components/text';
import { Separator } from '../separator';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';

export const ArticleParamsForm = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const handleToggleSidebar = () => {
		setIsSidebarOpen(prevState => !prevState);
	};

	return (
		<>
			<ArrowButton onClick={handleToggleSidebar} isOpened={isSidebarOpen}  />
			<aside 
				className={clsx(styles.container, isSidebarOpen ? styles.container_open : '')}
			>
				<form className={styles.form}>
				<Text 
					as='h2' 
					size={31} 
					weight={800} 
					uppercase>
						Задайте параметры
					</Text>
					< Select
						options={fontFamilyOptions}
						selected={defaultArticleState.fontFamilyOption}
						title='шрифт'/>
					< RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={defaultArticleState.fontSizeOption}
						title='размер шрифта'
					/>
					< Select
						options={fontColors}
						selected={defaultArticleState.fontColor}
						title='цвет шрифта'/>
					<Separator />
					
					< Select
						options={backgroundColors}
						selected={defaultArticleState.backgroundColor}
						title='цвет фона'/>
						< Select
						options={contentWidthArr}
						selected={defaultArticleState.contentWidth}
						title='ширина контента'/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
