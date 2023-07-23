import React from 'react';
import { Form } from 'react-router-dom';

interface ICategoryModal {
  type: 'post' | 'patch';
  id?: number;
  setVisibleModal: (visible: boolean) => void;
}

export const CategoryModal: React.FC<ICategoryModal> = ({
  type,
  id,
  setVisibleModal,
}) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black/50 flex justify-center items-center">
      <Form
			onSubmit={() => setVisibleModal(false)}
			action='/categories'
			method={type}
			className="grid gap-2 w-[300px] p-5 rounded-md bg-slate-900">
        <label htmlFor='title'>
          <small className='ml-2'>Category Title</small>
          <input className='input w-full' type="text" name='title' placeholder='title...'/>
        </label>

        <div className="flex items-center gap-2">
          <button type="submit" className='btn btn-green'>
						{type === 'patch' ? 'Save' : 'Create'}
					</button>
          <button onClick={() => setVisibleModal(false)} type="button" className='btn btn-red'>Close</button>
        </div>
      </Form>
    </div>
  );
};
