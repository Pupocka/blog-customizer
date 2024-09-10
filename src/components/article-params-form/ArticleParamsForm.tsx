import React, { useState, useRef, useEffect } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { Text } from 'components/text';
import { Separator } from '../separator';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { 
  backgroundColors, 
  contentWidthArr, 
  defaultArticleState, 
  fontColors, 
  fontFamilyOptions, 
  fontSizeOptions,
  OptionType,
  ArticleStateType
} from 'src/constants/articleProps';

interface ArticleStateTypeProps {
	setArticleState: (articleState: ArticleStateType) => void;
}

export const ArticleParamsForm = ({ setArticleState }: ArticleStateTypeProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [articleState, setState] = useState<ArticleStateType>(defaultArticleState);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (propName: keyof ArticleStateType, propValue: OptionType) => {
    setState({
      ...articleState,
      [propName]: propValue,
    });
  };

  const handleReset = () => {
    setArticleState(defaultArticleState);
		setState(defaultArticleState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setArticleState(articleState);
  };

  return (
    <>
      <ArrowButton 
				onClick={handleToggleSidebar} 
				isOpened={isSidebarOpen} 
			/>
      <aside 
        ref={sidebarRef}
        className={clsx(styles.container, isSidebarOpen ? styles.container_open : '')}
      >
        <form 
					className={styles.form} 
					onSubmit={handleSubmit} 
					onReset={handleReset}>

          <Text 
            as='h2' 
            size={31} 
            weight={800} 
          >
            Задайте параметры
          </Text>
          <Select
            options={fontFamilyOptions}
            selected={articleState.fontFamilyOption}
            title='шрифт'
            onChange={(value) => handleInputChange('fontFamilyOption', value)}
          />
          <RadioGroup
            name='fontSize'
            options={fontSizeOptions}
            selected={articleState.fontSizeOption}
            title='размер шрифта'
            onChange={(value) => handleInputChange('fontSizeOption', value)}
          />
          <Select
            options={fontColors}
            selected={articleState.fontColor}
            title='цвет шрифта'
            onChange={(value) => handleInputChange('fontColor', value)}
          />
          <Separator />
          <Select
            options={backgroundColors}
            selected={articleState.backgroundColor}
            title='цвет фона'
            onChange={(value) => handleInputChange('backgroundColor', value)}
          />
          <Select
            options={contentWidthArr}
            selected={articleState.contentWidth}
            title='ширина контента'
            onChange={(value) => handleInputChange('contentWidth', value)}
          />
          <div className={styles.bottomContainer}>
            <Button title='Сбросить' type='reset' />
            <Button title='Применить' type='submit' />
          </div>
        </form>
      </aside>
    </>
  );
};
