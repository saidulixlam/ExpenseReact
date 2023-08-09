const ExpensesFilter = (props) => {
    function dropdownFunction(e) {
        props.onChangeFilter(e.target.value);
    }
    return ( 
        <div className="expense-filter">
            <label htmlFor="">Filter By Year </label>
            <select value={props.selected} onChange={dropdownFunction}>
            <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
     );
}
 
export default ExpensesFilter;