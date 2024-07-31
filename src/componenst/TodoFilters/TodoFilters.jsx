import { FiltersButton, FiltersButtonContainer, FiltersContainer, ItemsLeft } from "./TodoFilters.components";

const TodoFilters = ({
    total,
    activeFilter = '', // Valor por defecto como cadena vacía
    showAllTodos, 
    showActiveTodos, 
    showCompletedTodos, 
    handleClearComplete
}) => {
    return (
        <FiltersContainer> 
            <ItemsLeft total={total} />
            <FiltersButtonContainer>
                <FiltersButton action={() => showAllTodos()} active={activeFilter} filter='All' />
                <FiltersButton action={() => showActiveTodos()} active={activeFilter} filter='Active' />
                <FiltersButton action={() => showCompletedTodos()} active={activeFilter} filter='Completed' />
            </FiltersButtonContainer>
            <button onClick={() => handleClearComplete()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
                Clear Completed
            </button>
        </FiltersContainer> 
    );
}

export { TodoFilters };
