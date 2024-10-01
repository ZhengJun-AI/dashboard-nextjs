import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchCustomers } from '@/app/lib/data';

 
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
    const customers = await fetchCustomers();
    return (
        <div className="w-full">
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            </div>
            <CustomersTable customers={customers}/>
        </div>
    );
}