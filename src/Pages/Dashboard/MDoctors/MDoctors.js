import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../../index.css'
import AddDoctor from '../AddDoctor/AddDoctor';
import ManageDoctors from '../ManageDoctors/ManageDoctors';
const MDoctors = () => {
    return (
        <div className='m-2'>
            <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List className="TabsList" aria-label="Manage your account">
                    <Tabs.Trigger className="TabsTrigger" value="tab1">
                        Add Doctor
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab2">
                        Manage Doctor
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="TabsContent" value="tab1">
                    <AddDoctor />
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab2">
                    <ManageDoctors />
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
};

export default MDoctors;