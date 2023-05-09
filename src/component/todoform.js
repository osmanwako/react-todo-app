import { useState } from "react";

function Todoform({ addItem }) {
    const [title, setTitle] = useState('');

    const Oninput = (e) => {
        setTitle(() => e.target.value);
    };
    const Onsubmit = (e) => {
        e.preventDefault();
        addItem(title);
        setTitle('');
    };
    return <form class="form-container" onSubmit={Onsubmit}>
        <input
            type="text"
            placeholder="Add Todo..."
            class="input-text"
            value={title} onChange={Oninput}
        />
        <button class="input-submit" type="submit">&#10010;</button>
    </form>
}
export default Todoform;