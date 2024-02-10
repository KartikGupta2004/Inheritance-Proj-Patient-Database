import React, { useState, useEffect } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
// import './Doctor'
import "./Doctor.css";
function DoctorDashboard() {
  const [data, setData] = useState([]);
  const { user } = useAuthContext();
  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);
  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/doctor/fetchall`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: user.authToken,
          },
        }
      );
      const responseData = await response.json();
      setData([...responseData]);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  return (
    <>
      <div className="bg-[url('Assets/doctordashboard.jpg')] bg-cover bg-center justify-center items-center flex h-screen min-w-[717px]">
        <section id='content'>
          <main>
            <div class='head-title'>
              <div class='left'>
                <p className='text-5xl font-bold'>Admin Dashboard</p>
              </div>
            </div>

            <ul class='box-info'>
              <li>
                <i class='bx bxs-calendar-check'></i>
                <span class='text'>
                  <p className='font-semibold text-3xl'>New Patients</p>
                  <p className='text-3xl mb-2'>1020</p>
                </span>
              </li>
              <li>
                <i class='bx bxs-group'></i>
                <span class='text'>
                  <p className='font-semibold text-3xl '>Total Patients</p>
                  <p className='text-3xl mb-2'>2834</p>
                </span>
              </li>
            </ul>

            <div class='table-data'>
              <div class='order'>
                <div class='head border-b-2 border-gray-800'>
                  <p className='font-bold text-2xl md:text-3xl lg:text-5xl'>
                    Recent Appointments
                  </p>
                </div>
                <table className='table-auto mt-2'>
                  <thead>
                    <tr className=''>
                      <th className='text-xl md:text-2xl lg:text-3xl text-start'>
                        Patient
                      </th>
                      <th className='text-xl md:text-2xl lg:text-3xl text-start'>
                        Date of Visit
                      </th>
                      <th className='text-xl md:text-2xl lg:text-3xl text-start'>
                        Doctor's Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length === 0 ? (
                      <tr>
                        <td>
                          <p className='font-bold text-center text-2xl md:text-3xl lg:text-5xl'>
                            No Appointment Pending
                          </p>
                        </td>
                      </tr>
                    ) : (
                      data.map((data) => (
                        <tr className=''>
                          <td>
                            <p className='text-2xl md:text-3xl lg:text-4xl text-start'>
                              {data.name}
                            </p>
                          </td>
                          <td className='text-2xl md:text-3xl lg:text-4xl text-start'>
                            <p>
                              {data.date} {data.time}
                            </p>
                          </td>
                          <td>
                            <p className='text-2xl md:text-3xl lg:text-4xl text-start'>
                              {data.doc_name}
                            </p>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default DoctorDashboard;
