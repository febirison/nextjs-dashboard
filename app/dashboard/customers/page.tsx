import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  }| Promise<any>; // Add Promise<any> to satisfy the constraint
}) {
  const actualSearchParams = (searchParams && 'then' in searchParams)
    ? await searchParams // If it's a promise, await it
    : searchParams;
    
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}