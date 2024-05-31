import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

function Task({ auth, tasks }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Tasks
        </h2>
      }
    >
      <Head title="Tasks" />
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <pre>{JSON.stringify(tasks, undefined, 2)}</pre>
      </div>
    </AuthenticatedLayout>
  );
}

export default Task;
