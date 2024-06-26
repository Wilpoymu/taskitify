import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Todo, { TodoList } from './ToDo';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <a href="/admin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ir al panel admin
                    </a>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <TodoList /> */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
