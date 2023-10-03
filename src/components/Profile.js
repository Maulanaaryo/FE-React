import React, { useState } from "react";
import NowLoading from "./NowLoading";

const Profile = () => {
  const [users] = useState([
    {
      name: "Aryo",
      hoby: "Bermain Game",
    },
    { name: "Parjo", hoby: "Menjadi Wibu" },
    {
      name: "Paijo",
      hoby: "Nonton Film",
    },
  ]);
  return (
    <div className="table-profile">
      <table className="table table-hover table-bordered">
        <thead className="bg-primary text-white">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Hoby</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <NowLoading />
          ) : (
            users.map((user, index) => {
              const { name, hoby } = user;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{hoby}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
