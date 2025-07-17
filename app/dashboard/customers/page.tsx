import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  // Correctly type searchParams as a Promise
  searchParams?: Promise<{
    query?: string;
    page?: string;
  } | undefined>; // Or simply Promise<Record<string, string | string[] | undefined>>
}) {
  // Await the searchParams Promise to get the actual object
  const resolvedSearchParams = await searchParams;

  const query = resolvedSearchParams?.query || '';
  // const currentPage = Number(resolvedSearchParams?.page) || 1; // If you also use page

  const customers = await fetchFilteredCustomers(query);
  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}