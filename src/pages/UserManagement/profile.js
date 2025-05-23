import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';
import profileimg from '../../assets/p.jpeg'; // Ensure this path is correct

const Profile = () => {
  const user = {
    name: 'Tanbeer',
    employeeId: 'E001',
    phone: '123-456-7890',
    email: 'admin@gmail.com',
    position: 'Engineer',
    department: 'Engineering',
    roleName: 'Admin',
  };

  return (
    <>
      <Breadcrumb pageName={"User Profile"} currentPage={"Profile"} />
      <section className="pt-5 bg-blueGray-50">
        <div className="w-full lg:w-4/12 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative">
                    <img
                      alt="Profile"
                      src={profileimg}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div className="w-full px-4 text-center mt-20">
                  <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                    {user.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {user.position}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    {user.department}
                  </div>
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      <span className="font-semibold">Employee ID:</span> {user.employeeId}<br />
                      <span className="font-semibold">Phone:</span> {user.phone}<br />
                      <span className="font-semibold">Email:</span> {user.email}<br />
                      <span className="font-semibold">Role Name:</span> {user.roleName}
                    </p>
                    <button className="font-normal text-myorange-100">
                      <FontAwesomeIcon icon={faEdit} /> Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
