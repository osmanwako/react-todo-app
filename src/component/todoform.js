function Todoform() {
    return <form class="form-container">
        <input
            type="text"
            placeholder="Add Todo..."
            class="input-text input-both"
            value=""
        />
        <button class="input-submit">&#10010;</button>
    </form>
}
export default Todoform;