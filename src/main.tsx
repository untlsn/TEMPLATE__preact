import { render } from 'preact';
import App from './app';
import 'virtual:windi.css';
import 'virtual:windi-devtools';

render(<App />, document.getElementById('app')!);
