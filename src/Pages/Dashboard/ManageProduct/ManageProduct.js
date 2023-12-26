import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const ManageProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const { data: shop, isLoading, refetch} = useQuery({
        queryKey: ['shop'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/shop', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/shop/${product._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Product ${product.name} deleted successfully`)
            }
        })
    }

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='bg-gray-200 h-full p-5'>
        <h1 className='text-3xl'>Manage Products</h1>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>
        <div className="overflow-x-auto">
            <table className="table text-lg">
                <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shop &&
                        shop.map((shop, i) => <tr key={shop._id}>
                            <th>{i + 1}</th>
                            <td><div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={shop.image} alt=''/>
                                </div>
                            </div>
                            </td>
                            <td>{shop.name}</td>
                            <td>{shop.price}</td>
                           <td><label onClick={() => setDeletingProduct(shop)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        {
            deletingProduct && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                successAction = {handleDeleteProduct}
                successButtonName="Delete"
                modalData = {deletingProduct}
                closeModal = {closeModal}
            >
            </ConfirmationModal>
        }
    </div>
    );
};

export default ManageProduct;