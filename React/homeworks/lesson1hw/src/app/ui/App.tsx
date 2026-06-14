export default function App(){
    const date = new Date().getDate().toString();
    const month = new Date().toLocaleString('uk-UA', { month: 'long' });
    const year = new Date().getFullYear().toString();
    const hours = new Date().getHours().toString();
    const minutes = new Date().getMinutes().toString();

    return <div>
        <p>{date} {month} {year} p. {hours}:{minutes}</p>
        <p>рік {year}</p>
        <p>міс {month}</p>
        <p>день {date}</p>
        <p>год {hours}</p>
        <p>хв {minutes}</p>
    </div>
}