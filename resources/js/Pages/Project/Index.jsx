import React from "react";
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Index({ auth, projects }) {
  return (
    <>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Projects
          </h2>
        }
      >
        <Head title="Projects" />

        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <a
              href="/admin"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Ir al panel admin
            </a>
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              {/* <TodoList /> */}
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}

export default Index;
