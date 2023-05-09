import { useState } from "react";

function Todoform() {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(() => e.target.value);
    };
    return <form class="form-container">
        <input
            type="text"
            placeholder="Add Todo..."
            class="input-text"
            value={title} onChange={handleChange}
        />
        <button class="input-submit">&#10010;</button>
    </form>
}
export default Todoform;