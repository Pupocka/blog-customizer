import { useState } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

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
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
