import React, { useState } from 'react';
import { AiFillEdit, AiFillCloseCircle } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { Form } from 'react-router-dom';
import { CategoryModal } from '../components/CategoryModal';
import { instance } from '../api/axios.api';

export const categoriesAction = async ({ request }: any) => {
  switch (request.method) {
    case 'POST': {
      const formData = await request.formData();
      const title = {
        title: formData.get('title'),
      };
      await instance.post('/categories', title);
      return null;
    }
    case 'PATCH': {
      return null;
    }
    case 'DELETE': {
      return null;
    }
  }
};

export const Categories: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  return (
    <>
      <div className="mt-10 p-4 rounded-md bg-slate-800">
        <h1>Your category list</h1>
        <div className="flex mt-2 flex-wrap items-center gap-2">
          <div className="group py-2 px-4 rounded-lg bg-blue-600 flex items-center relative gap-2">
            Salary
            <div className="hidden absolute px-3 left-0 top-0 bottom-0 right-0 rounded-lg bg-black/90 items-center justify-between  group-hover:flex">
              <button>
                <AiFillEdit />
              </button>

              <Form
                className="flex"
                method="delete"
                action="/categories"
              >
                <input type="hidden" value={'Category ID'} />
                <button type="submit">
                  <AiFillCloseCircle />
                </button>
              </Form>
            </div>
          </div>
        </div>

        <button
          onClick={() => setVisibleModal(true)}
          className="max-w-fit flex items-center gap-2 text-white/50 mt-5 hover:text-white"
        >
          <FaPlus />
          <span>Create a new category</span>
        </button>
      </div>

      {visibleModal && (
        <CategoryModal
          type="post"
          id={1}
          setVisibleModal={setVisibleModal}
        />
      )}
    </>
  );
};
