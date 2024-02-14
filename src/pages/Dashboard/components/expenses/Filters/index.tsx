import React, {useState} from 'react';
import {Expense, ExpensesFilters} from "../../../../../types/interfaces";

const Filters: React.FC<ExpensesFilters> = ({expenses,onFilterChange,displayedExpenses}) => {
    const [filterDescription, setFilterDescription] = useState<string>('');
    const [filterMinAmount, setFilterMinAmount] = useState<number | ''>('');
    const [filterMaxAmount, setFilterMaxAmount] = useState<number | ''>('');
    const [filterStartDate, setFilterStartDate] = useState<string>('');
    const [filterEndDate, setFilterEndDate] = useState<string>('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleFilter = () => {
        let filtered: Expense[] = [...expenses];

        if (filterDescription) {
            filtered = expenses.filter(expense =>
                expense.description.toLowerCase().includes(filterDescription.toLowerCase())
            );
        }

        if (filterMinAmount ) {
            filtered = filtered.filter(expense => expense.amount >= filterMinAmount);
        }

        if (filterMaxAmount) {
            filtered = filtered.filter(expense => expense.amount <= filterMaxAmount);
        }

        if (filterStartDate && filterEndDate) {
            filtered = filtered.filter(expense => expense.date >= filterStartDate && expense.date <= filterEndDate);
        }

        onFilterChange(filtered);
    };

    const handleSortExpenses = () => {
        const sortedExpenses = [...displayedExpenses];

        sortedExpenses.sort((a, b) => {
            if (sortDirection === 'asc') {
                return a.description.localeCompare(b.description);
            } else {
                return b.description.localeCompare(a.description);
            }
        });

        onFilterChange(sortedExpenses);

        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };
    const handleResetFilters = () => {
        onFilterChange(expenses);
        setFilterDescription('');
        setFilterMinAmount('');
        setFilterMaxAmount('');
        setFilterStartDate('');
        setFilterEndDate('');
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Filter by Description"
                value={filterDescription}
                onChange={(e) => setFilterDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Minimum Amount"
                value={ filterMinAmount}
                onChange={(e) => setFilterMinAmount(+e.target.value)}
            />
            <input
                type="number"
                placeholder="Maximum Amount"
                value={ filterMaxAmount}
                onChange={(e) => setFilterMaxAmount( +e.target.value)}
            />
            <input
                type="date"
                placeholder="Start Date"
                value={filterStartDate}
                onChange={(e) => setFilterStartDate(e.target.value)}
            />
            <input
                type="date"
                placeholder="End Date"
                value={filterEndDate}
                onChange={(e) => setFilterEndDate(e.target.value)}
            />
            <button onClick={handleSortExpenses}>
                {sortDirection === 'asc' ? 'Sort Descending' : 'Sort Ascending'}
            </button>
            <button onClick={handleFilter}>Apply Filters</button>
            <button onClick={handleResetFilters}>Reset Filters</button>
        </div>
    );
};

export default Filters;
