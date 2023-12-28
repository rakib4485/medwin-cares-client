import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import BkashPayment from '../BkashPayment/BkashPayment';
import ConfirmOrders from '../ConfirmOrders/ConfirmOrders';

const Confirms = () => {
    return (
        <div className='m-2'>
            <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List className="TabsList" aria-label="Manage your account">
                    <Tabs.Trigger className="TabsTrigger" value="tab1">
                        Confirm Appointment
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab2">
                        Confirm Order
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="TabsContent" value="tab1">
                    <BkashPayment />
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab2">
                    <ConfirmOrders />
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
};

export default Confirms;