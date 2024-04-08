import React from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TaskList from "../../components/taskList";
import TaskModal from "@/components/taskModal";
import Navbar from "@/components/navbar";

// const createNewDaily = async (userId, setDailies) => {
//   const response = await fetch("/api/dailies", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     //questo e' il body per la creazione dell'habit
//     body: JSON.stringify({
//       title: "nuova daily", //il titolo dell'habit lo sceglie l'utente inserendolo nel form, allo stato attuale e' fisso
//       userId, //lo userId dipende sempre dalla session, se nopn c'e' session non si puo' creare un habit e vieni reindirizzato alla pagina di login
//     }),
//   });

//   if (response.ok) {
//     const newDaily = await response.json();
//     console.log(newDaily.data);
//     setDailies((prevDailies) => [...prevDailies, newDaily.data]);
//   } else {
//     const error = await response.json();
//     console.error(error);
//   }
// };

const DailiesPage = ({ session }) => {
  const router = useRouter();
  const [dailies, setDailies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadDailies = async () => {
      if (session) {
        const userId = session.user._id;
        const response = await fetch(`/api/dailies?userId=${userId}`);
        if (response.ok) {
          const dailies = await response.json();
          setDailies(dailies.data);
        } else {
          console.error("Failed to load dailies");
        }
      } else {
        console.log("No session");
        router.push("/login");
      }
    };

    loadDailies();
  }, [router, session]);

  const handleDeleteClick = async (id) => {
    const endpoint = `/api/dailies/${id}`;
    const response = await fetch(endpoint, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Failed to delete task");
    } else {
      setDailies(dailies.filter((daily) => daily._id !== id));
    }
  };

  return (
    <div>
      <h1>Welcome to the Dailies Page</h1>
      {/* <button onClick={() => createNewDaily(session.user._id, setDailies)}>
        Create new daily
      </button> */}
      {isModalOpen && (
        <TaskModal
          setTasks={setDailies}
          dataModal={("New Daily", false)}
          session={session}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
      <TaskList tasks={dailies} deleteFunction={handleDeleteClick} />
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}

export default DailiesPage;
