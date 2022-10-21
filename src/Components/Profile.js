import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import "./profile.css";
import { motion } from 'framer-motion';


const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}



const Home = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
            const list = [];
            snapshot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() })
            });
            setEvents(list);
            setLoading(false);
        },
            (error) => {
                console.log(error);
            }
        );

        return () => {
            unsub();
        };
    }, []);


    return (
        <>
            <section>
                <section>
                    <section className="profile-container">
                        {loading ? <motion.div variants={loaderVariants} animate="animationOne" className="updating-ball"></motion.div> : (
                            <article>
                                {events && events.map((item) => (
                                    <article key={item.id}>
                                        <summary>
                                            <img src={item.img} className="profile-img" alt="user" />
                                            <section className="profile-details">
                                                <h1 className="profile-name">{item.name}</h1>
                                                <p className="profile-loc">Email: {item.email}</p>
                                                <p className="profile-loc">Date Of Birth: {item.date}</p>
                                                <p className="profile-loc">Location: {item.location}</p>
                                                <button onClick={() => navigate(`/update/${item.id}`)} className="profile-btn">Edit Profile</button>
                                            </section>
                                        </summary>
                                    </article>
                                ))}
                            </article>
                        )}
                    </section>
                </section>
            </section>
        </>
    )
}

export default Home 