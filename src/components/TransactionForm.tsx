import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Form } from 'react-router-dom';

export const TransactionForm: React.FC = () => {
  return (
    <div className="rounded-md bg-slate-800 p-4">
      <Form
        className="grid gap-2"
        method="post"
        action="/transactions"
      >
        <label className="grid" htmlFor="title">
          <span>Title</span>
          <input
            type="text"
            className="input border-slate-700 bg-slate-800 "
            placeholder="Title..."
            name="title"
            required
          />
        </label>

        <label className="grid" htmlFor="amount">
          <span>Amount</span>
          <input
            type="number"
            className="input border-slate-700 bg-slate-800 "
            placeholder="Amount..."
            name="amount"
            required
          />
        </label>

        <label htmlFor="category" className="grid">
          <span>Category</span>
          <select
            className="input border-slate-700 bg-slate-800 "
            name="category"
            required
          >
            <option value="1">Salary</option>
            <option value="2">Gift</option>
            <option value="3">Grocery</option>
          </select>
        </label>

        <button
          // onClick={() => setVisibleModal(true)}
          className="max-w-fit flex items-center gap-2 text-white/50 mt-2 hover:text-white"
        >
          <FaPlus />
          <span>Manage Categories:</span>
        </button>

        <div className="flex gap-4 items-center">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value={'income'}
              className="form-radio text-blue-600"
            />
            <span>Income</span>
          </label>
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value={'expense'}
              className="form-radio text-blue-600"
            />
            <span>Expense</span>
          </label>
        </div>

				<button className='btn btn-green max-w-fit mt-2'>
					Submit
				</button>
      </Form>
    </div>
  );
};
