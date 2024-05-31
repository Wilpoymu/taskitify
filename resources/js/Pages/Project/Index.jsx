import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";

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
            {/* <a
              href="/admin"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Ir al panel admin
            </a> */}
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}

              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th scope="col" className="px-3 py-3">
                      ID
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Created date
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Due Date
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Created By
                    </th>
                    <th scope="col" className="px-3 py-3 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects.data.map((project) => (
                    <tr className="bg-white border-b">
                      <td className="px-3 py-2">{project.id}</td>
                      <td className="px-3 py-2">
                        <img
                          src={project.image_path}
                          style={{ width: 60 }}
                          alt="project image"
                        />
                      </td>
                      <td className="px-3 py-2">{project.name}</td>
                      <td className="px-3 py-2">{project.status}</td>
                      <td className="px-3 py-2 text-nowrap">{project.created_at}</td>
                      <td className="px-3 py-2 text-nowrap">{project.due_date}</td>
                      <td className="px-3 py-2">{project.createdBy.name}</td>
                      <td className="px-3 py-2">
                        <Link
                          href={route("project.edit", project.id)}
                          className="font-medium text-blue-600 hover_underline mx-1"
                        >
                          Edit
                        </Link>
                        <Link
                          href={route("project.destroy", project.id)}
                          className="font-medium text-red-600 hover_underline mx-1"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination links={projects.meta.links} />
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}

export default Index;
