import React from 'react';
import { TransactionForm } from '../components/TransactionForm';
import { instance } from '../api/axios.api';
import { ICategory, IResponseTransactionLoader } from '../api/types/types';
import { useLoaderData } from 'react-router-dom';




export const transactionLoader = async () => {
	const categories = await instance.get<ICategory>('/categories')
	const data = {
		categories: categories.data,
	}
	return data
}

export const transactionAction = async ({request}:any) => {
  const data = {};
  return data;
};

export const Transactions: React.FC = () => {


  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-4 items-start">
        <div className=" grid col-span-2">
					<TransactionForm/>
				</div>
        <div className="rounder-md bg-slate-800 p-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="uppercase text-md font-bold text-center">
                Total Income:
              </p>
              <p className="bg-green-600 p-1 rounded-sm text-center mt-2">
                10000
              </p>
            </div>
            <div>
              <p className="uppercase text-md font-bold text-center">
                Total Expence:
              </p>
              <p className="bg-red-500 p-1 rounded-sm text-center mt-2">
                10000
              </p>
            </div>
          </div>
          <div>Chart</div>
        </div>
      </div>

      <h1 className="my-5">Table</h1>
    </>
  );
};
