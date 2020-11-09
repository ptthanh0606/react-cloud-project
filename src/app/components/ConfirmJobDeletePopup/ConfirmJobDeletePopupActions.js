import Axios from "axios";

export const deleteSelectedJob = (jobid) => {
  return new Promise((resolve, reject) => {
    Axios.delete(
      `http://localhost:8080/prc391/api/jobs/delete?id=${jobid}`
    ).then((response) => {
      resolve(response.data);
    });
  });
};

export const getAllJobs = () => {
  return new Promise((resolve, reject) => {
    Axios.get("http://localhost:8080/prc391/api/jobs/search").then(
      (response) => {
        resolve(response.data);
      }
    );
  });
};

export const getAllJobsByOwnerID = (ownerId) => {
  return new Promise((resolve) => {
    Axios.get(
      `http://localhost:8080/prc391/api/jobs/search?ownerId=${ownerId}`
    ).then((response) => {
      resolve(response.data);
    });
  });
};
