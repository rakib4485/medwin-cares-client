import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../../index.css'
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const Products = () => {
    return (
        <div className='m-2'>
            <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List className="TabsList" aria-label="Manage your account">
                    <Tabs.Trigger className="TabsTrigger" value="tab1">
                        Add Product
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab2">
                        Manage Products
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="TabsContent" value="tab1">
                    <AddProduct />
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab2">
                    <ManageProduct />
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
};

export default Products;