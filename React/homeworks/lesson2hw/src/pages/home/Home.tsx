import Counter from '../../widgets/counter/Counter';
import './ui/Home.css';

export default function Home() {
    return <div className='container'>
        <h1>Hello, World</h1>
        <Counter />
    </div>;
}