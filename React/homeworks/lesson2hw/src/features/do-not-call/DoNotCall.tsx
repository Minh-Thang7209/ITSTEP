import { useState } from 'react';

export const DoNotCall = () => {
    const [checked, setChecked] = useState(false);
    return <>
        <label>
            <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            Не телефонувати
        </label>
    </>
}