import clsx from "clsx";
import { CSSProperties, useState } from "react";
import { defaultArticleState } from "./constants/articleProps";
import { ArticleParamsForm } from "./components/article-params-form";
import { Article } from "./components/article";
import styles from './styles/index.module.scss';

export const App = () => {
	const [articleState, setArticleState] = useState(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setArticleState={setArticleState} />
			<Article />
		</div>
	);
};