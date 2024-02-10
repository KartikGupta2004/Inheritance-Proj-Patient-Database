import React, { useState, useEffect } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
// import './Doctor'
import "./Doctor.css";
function DoctorDashboard() {
  const [data, setData] = useState([]);
  const { user } = useAuthContext();
  useEffect(() => {
    if (user) {
      getAllergy();
    }
  }, [data, user]);
  const getAllergy = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/fetchall`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: user.authToken,
        },
      });
      const responseData = await response.json();
      setData([...responseData]);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  return (
    <>
      <div className="bg-[url('Assets/doctordashboard.jpg')] bg-cover bg-center justify-center items-center flex h-screen min-w-[717px]">
        <section id="content">
          <main>
            <div class="head-title">
              <div class="left">
                <p className="text-5xl font-bold">Admin Dashboard</p>
              </div>
            </div>

            <ul class="box-info">
              <li>
                <i class="bx bxs-calendar-check"></i>
                <span class="text">
                  <p className="font-semibold text-3xl">New Patients</p>
                  <p className="text-3xl mb-2">1020</p>
                </span>
              </li>
              <li>
                <i class="bx bxs-group"></i>
                <span class="text">
                  <p className="font-semibold text-3xl ">Total Patients</p>
                  <p className="text-3xl mb-2">2834</p>
                </span>
              </li>
            </ul>

            <div class="table-data">
              <div class="order">
                <div class="head">
                  <p className="font-bold text-2xl md:text-3xl lg:text-5xl">Recent Appointments</p>
                </div>
                <table>
                  <thead>
                    <tr className="flex justify-between">
                      <th className="text-xl md:text-2xl lg:text-3xl ">Patient</th>
                      <th className="text-xl md:text-2xl lg:text-3xl ">Date of Visit</th>
                      <th className="text-xl md:text-2xl lg:text-3xl ">Doctor's Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
								<td>
									<img src="img/people.png"/>
									<p className='text-2xl'>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status completed">Completed</span></td>
							</tr> */}
                    <div
                      className={`flex justify-center p-5 ${
                        data.length === 0 ? "items-center" : "items-start"
                      }`}
                    >
                      <div className="">
                        <div className="flex flex-col justify-center items-center gap-3">
                          {data.length === 0 ? (
                            <tr>
                              <td>
                                <p className="font-bold text-center text-2xl md:text-3xl lg:text-5xl">
                                  No Appointment Pending
                                </p>
                              </td>
                            </tr>
                          ) : (
                            data.map((data) => (
                              <div
                                key={data.id}
                                className="flex justify-center w-full"
                              >
                                <tr className="flex justify-between">
                                  <td>
                                    <p className="text-2xl md:text-3xl lg:text-4xl">{data.patient}</p>
                                  </td>
                                  <td className="text-2xl md:text-3xl lg:text-4xl">{data.date}</td>
                                  <td>
                                    <span className="text-2xl md:text-3xl lg:text-4xl">
                                      {data.doctor}
                                    </span>
                                  </td>
                                </tr>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
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
