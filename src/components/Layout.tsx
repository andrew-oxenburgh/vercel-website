import NavBar from './NavBar';
import {MDXProvider} from '@mdx-js/react';
import CodeBlock from './CodeBlock';
import {ThemeProvider, StylesProvider, createTheme, Theme} from '@material-ui/core/styles';

const components = {
	pre: props => <div {...props} />,
	code: CodeBlock,
};

const theme: Theme = createTheme();

export default function Layout({children}) {
	return <>
		<MDXProvider components={components}>
			<main>
				<StylesProvider injectFirst>
					<ThemeProvider theme={theme}>
						<NavBar/>
						<div className="content">{children}</div>
					</ThemeProvider>
				</StylesProvider>
			</main>
		</MDXProvider>
	</>;
}
