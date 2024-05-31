import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

function User({ auth, users }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Users
        </h2>
      }
    >
      <Head title="Users" />
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <pre>{JSON.stringify(users, undefined, 2)}</pre>
      </div>
    </AuthenticatedLayout>
  );
}

export default User;
