import { renderTheme } from '../../styles/render-theme'
import Home from '.';
import { theme } from '../../styles/theme';
import { screen } from '@testing-library/react'
// import 'jest-styled-components';


test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  debug();
  
  const headingContainer = screen.getByRole('heading', { name: 'Hello' })
  .parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  expect(headingContainer).toMatchSnapshot();
  // expect(headingContainer).toHaveStyleRule('background', 'red');
});