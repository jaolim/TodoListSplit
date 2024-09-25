function TodoTable(props) {

    return (
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
                {props.todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.description}</td>
                        <td>
                            <button name="delete" onClick={() => {
                                const filteredTodos = props.todos.filter((todo, i) => index != i)
                                props.setTodos(filteredTodos)
                            }}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable;